const { MongoClient } = require('mongodb');

async function run() {
   const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("flightmanagement");

    // 1. Zeige nur bestimmte Felder aus dem Unterdokument "homeplanes"
    console.log("projection only show certain fields:");
    const result1 = await db.collection("airport").aggregate([
        {
            $project: {
                airport: 1,
                city: 1,
                country: 1,
                "homeplanes.model": 1,
                _id: 0
            }
        }
    ]).toArray();
    console.log(result1);

    // 2. Filter: Nur Flughäfen, die Flugzeuge mit hoher Kapazität besitzen
    console.log("filter airports with homeplanes.capacity >= 250:");
    const result2 = await db.collection("airport").aggregate([
        {
            $match: { "homeplanes.capacity": { $gte: 250 } }
        }
    ]).toArray();
    console.log(result2);

    // 3. Unwind + Filter + Projektion auf homeplanes
    console.log("unwind, filter and projection of homeplanes:");
    const result3 = await db.collection("airport").aggregate([
        { $unwind: "$homeplanes" },
        { $match: { "homeplanes.capacity": { $gte: 250 } } },
        {
            $project: {
                airport: 1,
                city: 1,
                "homeplanes.model": 1,
                "homeplanes.capacity": 1,
                _id: 0
            }
        }
    ]).toArray();
    console.log(result3);

    await client.close();
}

run().catch(console.dir);
