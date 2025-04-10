const { MongoClient } = require('mongodb')

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("flightmanagement");

  console.log("join flight with airplane using $lookup:");
  const result = await db.collection("flight").aggregate([
    {
      $lookup: {
        from: "airplane",
        localField: "airplane",
        foreignField: "_id",
        as: "airplane_info"
      }
    },
    {
      $project: {
        id_flight: 1,
        depart: 1,
        arrival: 1,
        start: 1,
        destination: 1,
        "airplane_info.model": 1,
        "airplane_info.capacity": 1,
        _id: 0
      }
    }
  ]).toArray();
  console.log(result);

  console.log("join, filter big ariplanes");
  const result2 = await db.collection("flight").aggregate([
    {
      $lookup: {
        from: "airplane",
        localField: "airplane",
        foreignField: "_id",
        as: "airplane_info"
      }
    },
    {
      $unwind: "$airplane_info"
    },
    {
      $match: { "airplane_info.capacity": { $gte: 200 } }
    },
    {
      $group: {
        _id: "$airplane_info.model",
        totalFlights: { $sum: 1 }
      }
    },
    {
      $sort: { totalFlights: -1 }
    }
  ]).toArray();
  console.log(result2);

  await client.close();

}

run().catch(console.dir);
