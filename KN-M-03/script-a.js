const { MongoClient, ObjectId } = require('mongodb');

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false"
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("flightmanagement");

  // ObjectId Variablen
  const pilot1 = new ObjectId();
  const pilot2 = new ObjectId();
  const pilot3 = new ObjectId();

  const airplane1 = new ObjectId();
  const airplane2 = new ObjectId();
  const airplane3 = new ObjectId();

  const airport1 = "JFK";
  const airport2 = "LAX";
  const airport3 = "FRA";

  await db.collection("pilot").insertMany([
      { _id: pilot1, firstname: "John", lastname: "Doe" },
      { _id: pilot2, firstname: "Jane", lastname: "Smith" },
      { _id: pilot3, firstname: "Max", lastname: "Müller" }
  ]);

  await db.collection("airplane").insertMany([
      { _id: airplane1, capacity: 180, model: "Boeing 737", homeairport: airport1 },
      { _id: airplane2, capacity: 250, model: "Airbus A320", homeairport: airport2 },
      { _id: airplane3, capacity: 300, model: "Boeing 777", homeairport: airport3 }
  ]);

  await db.collection("airport").insertOne({
      IATA: airport1, city: "New York", country: "USA", capacity: 50000, homeplanes: [
          { capacity: 180, model: "Boeing 737" },
          { capacity: 250, model: "Airbus A320" }
      ]
  });

  await db.collection("airport").insertOne({
      IATA: airport2, city: "Los Angeles", country: "USA", capacity: 70000, homeplanes: [
          { capacity: 300, model: "Boeing 777" }
      ]
  });

  await db.collection("flight").insertMany([
      { depart: new Date("2025-06-01"), arrival: new Date("2025-06-02"), start: airport1, destination: airport2, airplane: airplane1, pilot: pilot1 },
      { depart: new Date("2025-06-03"), arrival: new Date("2025-06-04"), start: airport2, destination: airport3, airplane: airplane2, pilot: pilot2 },
      { depart: new Date("2025-06-05"), arrival: new Date("2025-06-06"), start: airport3, destination: airport1, airplane: airplane3, pilot: pilot3 }
  ]);

  console.log("data was added");
  await client.close();

}
run().catch(console.dir);
