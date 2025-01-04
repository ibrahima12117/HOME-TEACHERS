// app/api/users/route.js

import connectDB from '../../../config/db';
import User from '../../../Models/UserModel';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connectDB();

  try {
    const { nom, email, numeroDeTelephone, motDePasse } = await req.json();

    if (!nom || !email || !numeroDeTelephone || !motDePasse) {
      return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Cet email est déjà utilisé' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    const newUser = new User({
      nom,
      email,
      numeroDeTelephone,
      motDePasse: hashedPassword,
    });

    const savedUser = await newUser.save();
    return NextResponse.json(savedUser, { status: 201 });
  } catch (err) {
    console.error('Erreur interne du serveur:', err);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}

export async function GET(req) {
  await connectDB();

  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (err) {
    console.error('Erreur interne du serveur:', err);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}
