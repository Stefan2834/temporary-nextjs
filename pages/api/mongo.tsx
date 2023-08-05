import { MongoClient, Db } from 'mongodb';

const url: string | undefined= process.env.MONGODB_URI; // Replace with your actual MongoDB connection string
const dbName = 'chat-app'; // Replace with your database name

let cachedClient: MongoClient;
let cachedDb: Db;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  try {
    if(url) {
      const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as any); // Add "as any" to handle TypeScript error
      const db = client.db(dbName);
      cachedClient = client;
      cachedDb = db;
      
      return { client, db };
    }
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    return null;
  }
}




