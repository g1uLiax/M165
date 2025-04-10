const { MongoClient } = require('mongodb');

async function run() {
  const uri = "mongodb://admin:1234@35.175.69.55:27017/?authSource=admin&readPreference=primary&ssl=false";
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log("connection successful");

    const flight = client.db("flightmanagement");
    const admin = client.db("admin");

    await flight.command({
      createUser: "read",
      pwd: "1234",
      roles: [{ role: "read", db: "flightmanagement"}]
    });
    console.log("user read created")

    await admin.command({
      createUser: "readWrite",
      pwd: "1234",
      roles: [{ role: "readWrite", db: "flightmanagement" }]
    })
    console.log("user readWrite created")
  } catch (error) {
    console.log(error)
  } finally {
    await client.close()
  }
  
}

run();
