import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from './mongo';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dbConnection = await connectToDatabase();

    if (!dbConnection) {
      throw new Error('Failed to establish a database connection.');
    }

    const { db } = dbConnection;

    // Assuming you have a collection named 'names' in your MongoDB database
    const namesCollection = db.collection('users');

    // Query the database to get the data
    const users = await namesCollection.find({}).toArray();

    res.json(users);
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}