import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../Libs/Mongodb';
import Course from '../../models/Elementaire';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === 'GET') {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } else if (req.method === 'POST') {
    const { title, description, videoSrc, documentLink } = req.body;
    const newCourse = new Course({ title, description, videoSrc, documentLink });
    await newCourse.save();
    res.status(201).json(newCourse);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
  // Exemple d'utilisation de logs
console.log('Trying to connect to the database...');
await dbConnect();
console.log('Database connected successfully.');

}
