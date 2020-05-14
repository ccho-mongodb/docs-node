const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB deployment's connection
// string.
const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?w=majority";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    // begin-idx
    const db = client.db("sample_mflix");
    const movies = db.collection("movies");

    // Create an ascending index on the "title" field in the
    // "movies" collection.
    const result = await movies.createIndex({ title: 1 });
    console.log(`Index created: ${result}`);
    // end-idx

    // begin-query
    const query = { title: "Batman" }
    const sort = { title: 1 };
    const projection = { title: 1 };

    const cursor = movies
      .find(query)
      .sort(sort)
      .project(projection);
    // end-query
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
