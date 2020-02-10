// ignored first line
const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB deployment's connection
// string
const uri =
  "mongodb+srv://sample-hostname:27017/?poolSize=20&useUnifiedTopology=true";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const db = client.db("sample_mflix");
    const collection = db.collection('movies');

    await collection.createIndex(
      { 'title' : 1 },
      { 'collation' : { 'locale' : 'en_US' } });

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);