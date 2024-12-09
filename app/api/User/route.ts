import {NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '../../Libs/Mongodb';
import Elementaire from '../../models/User';

export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    console.log('Received request data:', { username, email, password });

    await connectMongoDB();
    const newElementaire = new Elementaire({ username, email, password });
    await newElementaire.save();
    
    return NextResponse.json({ message: "Elementaire created" }, { status: 201 });
  } catch (error) {
    console.error("Failed to create Elementaire:", error);
    return NextResponse.json({ error: "Failed to create Elementaire" }, { status: 500 });
  }
}
