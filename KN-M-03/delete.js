const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("flightmanagement");

  const flight1 = new ObjectId("67ceb48b96e5c5c7382441c0");
  const flight2 = new ObjectId("67ceb48b96e5c5c7382441c1");

  await db.collection("pilot").deleteOne({ _id: new ObjectId("67ceb48a96e5c5c7382441b5") });
  console.log("Deleted one pilot with specific _id");

  await db.collection("flight").deleteMany({ $or: [{ _id: flight1 }, { _id: flight2 }] });
  console.log("Deleted multiple flights with specific _ids");

  await client.close();
}
run().catch(console.dir);
