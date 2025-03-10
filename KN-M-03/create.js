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
  const pilot4 = new ObjectId();
  const pilot5 = new ObjectId();

  const airplane1 = new ObjectId();
  const airplane2 = new ObjectId();
  const airplane3 = new ObjectId();
  const airplane4 = new ObjectId();
  const airplane5 = new ObjectId();

  const airport1 = "JFK";
  const airport2 = "LAX";
  const airport3 = "FRA";
  const airport4 = "LHR";
  const airport5 = "DXB";

  await db.collection("pilot").insertMany([
      { _id: pilot1, firstname: "John", lastname: "Doe" },
      { _id: pilot2, firstname: "Jane", lastname: "Smith" },
      { _id: pilot3, firstname: "Max", lastname: "Müller" },
      { _id: pilot4, firstname: "Alice", lastname: "Brown" },
      { _id: pilot5, firstname: "Bob", lastname: "Johnson" }
  ]);

  await db.collection("airport").insertOne({
      IATA_id: airport1, city: "New York", country: "USA", capacity: 50000, homeplanes: [
          { capacity: 180, model: "Boeing 737" },
          { capacity: 250, model: "Airbus A320" }
      ]
  });

  await db.collection("airport").insertOne({
      IATA_id: airport2, city: "Los Angeles", country: "USA", capacity: 70000, homeplanes: [
          { capacity: 300, model: "Boeing 777" }
      ]
  });

  await db.collection("airport").insertOne({
      IATA_id: airport4, city: "London", country: "UK", capacity: 80000, homeplanes: [
          { capacity: 200, model: "Airbus A321" }
      ]
  });

  await db.collection("airport").insertOne({
      IATA_id: airport5, city: "Dubai", country: "UAE", capacity: 100000, homeplanes: [
          { capacity: 350, model: "Boeing 787" }
      ]
  });

  await db.collection("airplane").insertMany([
    { _id: airplane1, capacity: 180, model: "Boeing 737", homeairport_id: airport1 },
    { _id: airplane2, capacity: 250, model: "Airbus A320", homeairport_id: airport2 },
    { _id: airplane3, capacity: 300, model: "Boeing 777", homeairport_id: airport3 },
    { _id: airplane4, capacity: 200, model: "Airbus A321", homeairport_id: airport4 },
    { _id: airplane5, capacity: 350, model: "Boeing 787", homeairport_id: airport5 }
  ]);

  await db.collection("flight").insertMany([
      { depart: new Date("2025-06-01"), arrival: new Date("2025-06-02"), start: airport1, destination: airport2, airplane: airplane1, pilot: pilot1 },
      { depart: new Date("2025-06-03"), arrival: new Date("2025-06-04"), start: airport2, destination: airport3, airplane: airplane2, pilot: pilot2 },
      { depart: new Date("2025-06-05"), arrival: new Date("2025-06-06"), start: airport3, destination: airport1, airplane: airplane3, pilot: pilot3 },
      { depart: new Date("2025-06-07"), arrival: new Date("2025-06-08"), start: airport4, destination: airport5, airplane: airplane4, pilot: pilot4 },
      { depart: new Date("2025-06-09"), arrival: new Date("2025-06-10"), start: airport5, destination: airport1, airplane: airplane5, pilot: pilot5 }
  ]);

  console.log("data was added");
  await client.close();
}
run().catch(console.dir);
