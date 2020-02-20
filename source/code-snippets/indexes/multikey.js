const { MongoClient } = require("mongodb");

// Replace the following with your MongoDB deployment's connection
// string.
const uri =
  "mongodb+srv://<user>:<password>@<cluster-url>?w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();

    // begin-ex
    //
    // (Connection code omitted for space.)
    //
    // Specify the "sample_mflix" database.
    const mflix = client.db("sample_mflix");

    // Create a multikey index on the "cast" array field
    // in the "movies" collection.
    const result = await mflix.collection("movies").createIndex({ cast: 1 });
    console.log("Index " + result + " created.");

    // end-ex
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
