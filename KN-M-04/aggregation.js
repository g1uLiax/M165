const { MongoClient } = require('mongodb')

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("flightmanagement");

  console.log("Aggregation using $match with AND condition:");
  const result = await db.collection("airplane").aggregate([
    { $match: { model: /Boeing/ } },
    { $match: { homeairport_id: "JFK"} }
  ]).toArray();
  console.log(result);

  console.log("Aggregation using $match, $project, and $sort:");
  const result1 = await db.collection("airplane").aggregate([
    { $match: { capacity: { $gte: 150 } } },
    { $project: { model: 1, capacity: 1, homeairport_id: 1, _id: 0} },
    { $sort: { capacity: 1 } }
  ]).toArray();
  console.log(result1);

  console.log("Aggregation $sum on pilot:");
  const sort = await db.collection("pilot").aggregate([
    { $group: { _id: null, total: { $sum: 1} } }
  ]).toArray();
  console.log(sort);

  console.log("Aggregation $group:");
  const group = await db.collection("airport").aggregate([
    { $group: { _id: "$IATA_id", total: { $sum: 1} } }
  ]).toArray();
  console.log(group);

  await client.close();

}

run().catch(console.dir);
