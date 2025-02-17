# A.) Installation
<img width="725" alt="image" src="https://github.com/user-attachments/assets/c8542d26-ace6-470f-9d2a-ddd744f6b99a" />

The authSource=admin parameter specifies which database to authenticate to when connecting to the database. You are authenticating against the admin database because your user was created there.

`sudo sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf` <br>
This command replaces the first IP with the second IP in the mondog.conf file. The default for the mongoDB would be to run on the localhost (127.0.0.1). This command changes the ip and allows us remote access on our mongoDB. <br>

`sudo sed -i 's/#security:/security:\n  authorization: enabled/g' /etc/mongod.conf` <br>
This command changes the security settings in the mongod.conf file. The change enables the authorization and increases the security.


