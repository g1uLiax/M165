// updateData.js
const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("flightmanagement");

  //updateOne() - update last name, Müller -> Meyer
  const pilotId = new ObjectId("67ceb48a96e5c5c7382441b4");
  await db.collection("pilot").updateOne(
    { _id: pilotId },
    { $set: { lastname: "Meyer" } }
  );
  console.log("Updated one pilots last name");

  //updateMany() - update capacity for multiple
  await db.collection("airport").updateMany(
    { $or: [{ city: "New York" }, { city: "Los Angeles" }] },
    { $inc: { capacity: 5000 } }
  );
  console.log("Updated capacity for multiple airports");

  // 3. replaceOne() - replace an airplane
  const airplaneId = new ObjectId("67ceb48a96e5c5c7382441b7");
  await db.collection("airplane").replaceOne(
    { _id: airplaneId },
    { _id: airplaneId, capacity: 220, model: "Boeing 787", homeairport_id: "JFK" }
  );
  console.log("Replaced one airplane document");

  await client.close();
}
run().catch(console.dir);
