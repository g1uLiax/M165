const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("Villiger");

  const collections = await db.collections();
  for (let collection of collections) {
    await collection.drop();
    console.log(`Dropped collection: ${collection.collectionName}`);
  }

  await client.close();
}
run().catch(console.dir);