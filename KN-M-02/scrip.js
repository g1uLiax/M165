const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
    const client = new MongoClient(uri);
    await client.connect();

    const db = client.db("flightmanagement");
    await db.createCollection("airplane");
    await db.createCollection("airport");
    await db.createCollection("flight");
    await db.createCollection("pilot");

    console.log("success");
    await client.close();
}

run().catch(console.dir);