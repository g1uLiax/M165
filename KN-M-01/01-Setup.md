# A.) Installation
<img width="720" alt="image" src="https://github.com/user-attachments/assets/c8542d26-ace6-470f-9d2a-ddd744f6b99a" />

The authSource=admin parameter specifies which database to authenticate to when connecting to the database. You are authenticating against the admin database because your user was created there.

`sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf` <br>
This command replaces the first IP with the second IP in the mondog.conf file. The default for the mongoDB would be to run on the localhost (127.0.0.1). This command changes the ip and allows us remote access on our mongoDB. <br>

`sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf` <br>
This command changes the security settings in the mongod.conf file. The change enables the authorization and increases the security.

<img width="270" alt="image" src="https://github.com/user-attachments/assets/4fb2702b-ce58-4686-a5ff-b4cd92140bd9" />

# B.) First Steps
<img width="435" alt="image" src="https://github.com/user-attachments/assets/7b05379c-20b4-4063-9728-4d27412fc878" />
<img width="535" alt="image" src="https://github.com/user-attachments/assets/51f62f35-934a-4f3f-868f-decda0155de1" />

```
[{
  "_id": {
    "$oid": "67b30fb5688b5d0cbffc2cc3"
  },
  "name": "Max Mustermann",
  "age": 34,
  "birthdate": {
    "$date": "2002-05-01T00:00:00.000Z"
  },
  "height": 120.25
}]
```
The complicated date format is neccessary incase the data gets imported into another database. If it isnt done like this, the other database will mistake the date as a string. Its important to have an universal format that is the same everywhere to prevent errors or handling the data wrong.

# C.) First Steps Shell
<img width="237" alt="image" src="https://github.com/user-attachments/assets/0ff30007-9027-40a6-93e2-6145f156e69f" />
<img width="237" alt="image" src="https://github.com/user-attachments/assets/1426e893-30d2-47a0-9126-c9d306a6aa06" />
With the commands you can view the collections and tables in the database. 
A collection in MongoDB is equivalent to a table in relational databases but provides more flexibility. A collection has no schema to follow, unlike a table in a relational database.


