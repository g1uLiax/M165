// readData.js
const { MongoClient } = require('mongodb');

async function readData() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("flightmanagement");

  // all pilots whose name begins with M
  const pilots = await db.collection("pilot").find({ lastname: /^M/ }, { projection: { _id: 0, firstname: 1, lastname: 1 } }).toArray();
  console.log("pilots beginning with M:", pilots);

  // all airplanes with capacity over 200 and airbus in the model name
  const airplanes = await db.collection("airplane").find({ $and: [{ capacity: { $gt: 200 } }, { model: /Airbus/ }] }).toArray();
  console.log("all pilots whose name begins with M:", airplanes);

  // all airports in la or ny
  const airports = await db.collection("airport").find({ $or: [{ city: "New York" }, { city: "Los Angeles" }] }).toArray();
  console.log("airplanes, capacity over 200 and airbus model:", airports);

  // all flights starting after first june
  const flights = await db.collection("flight").find({ depart: { $gt: new Date("2025-06-01") } }, { projection: { _id: 1, start: 1, destination: 1, depart: 1 } }).toArray();
  console.log("flights starting after first june:", flights);

  await client.close();
}
readData().catch(console.dir);
