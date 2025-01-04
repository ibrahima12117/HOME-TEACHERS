// app/api/users/discuter.js
"use server";
import prisma from '../../../config/prisma';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    console.log('Données reçues dans la requête POST:', data);
    
    const { prenom, nom, email, numeroDeTelephone, codePostal, niveau, moyenneDernierControle, nombreEleveBesoinProfesseur, typeProfesseur, notelorsdeladerniercontrole } = data;

    if (!prenom || !nom || !email || !numeroDeTelephone || !codePostal || !niveau || !moyenneDernierControle || !nombreEleveBesoinProfesseur || !typeProfesseur || !notelorsdeladerniercontrole) {
      return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 });
    }

    const nouvelleDiscussion = await prisma.discu.create({
      data: {
        prenom,
        nom,
        email,
        numeroDeTelephone,
        codePostal,
        niveau,
        moyenneDernierControle,
        nombreEleveBesoinProfesseur,
        typeProfesseur,
        notelorsdeladerniercontrole,
      },
    });

    return NextResponse.json(nouvelleDiscussion, { status: 201 });
  } catch (err) {
    console.error('Erreur interne du serveur:', err);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}



export async function GET(req) {
  try {
    console.log('Appel à la fonction GET');
    const discussions = await prisma.discu.findMany();
    if (!discussions) {
      console.error('Aucune discussion trouvée:', discussions);
      return NextResponse.json({ message: 'Aucune discussion trouvée' }, { status: 404 });
    }
    console.log('Discussions trouvées:', discussions);
    return NextResponse.json(discussions, { status: 200 });
  } catch (err) {
    console.error('Erreur interne du serveur:', err);
    return NextResponse.json({ message: 'Erreur interne du serveur' }, { status: 500 });
  }
}

