## A.)
<img width="485" alt="image" src="https://github.com/user-attachments/assets/44bc47cd-b759-4959-8604-57eb85a12cae" /><br>
<img width="485" alt="image" src="https://github.com/user-attachments/assets/2ba19c49-c77e-4810-a0ae-54824ca6bef8" /><br>

### user read
<img width="746" alt="image" src="https://github.com/user-attachments/assets/e84cfe42-537b-40ee-bd8c-a7cddce758d5" /><br>
<img width="746" alt="image" src="https://github.com/user-attachments/assets/090a51d4-9420-442d-8dc4-2cba4c5239a0" /><br>
<img width="332" alt="image" src="https://github.com/user-attachments/assets/6ad84637-881a-496b-9b57-338a471c2fea" /><br>

### user read and write
<img width="743" alt="image" src="https://github.com/user-attachments/assets/9e7f0691-7b10-48a4-b183-411c4119faef" /><br>
<img width="329" alt="image" src="https://github.com/user-attachments/assets/3b94f4cb-7e4e-4df3-a253-5b93d508bba9" /><br>
<img width="338" alt="image" src="https://github.com/user-attachments/assets/bd973418-7692-4ff6-a7db-8584c1d49f77" /><br>

## B.)
### dump with snapshot
<img width="957" alt="image" src="https://github.com/user-attachments/assets/86321df9-3692-4718-87fc-7cfd81409226" /><br>
<img width="152" alt="image" src="https://github.com/user-attachments/assets/d68679f6-0bd5-4be2-bb54-d24023dde42c" /><br>
### dump with database tools
<img width="859" alt="image" src="https://github.com/user-attachments/assets/735483d3-3f49-48f7-bcf9-c8b70f3d00c9" /><br>
<img width="437" alt="image" src="https://github.com/user-attachments/assets/775ada1f-7480-44d0-8e1b-75b322d0d5b6" /><br>
<img width="860" alt="image" src="https://github.com/user-attachments/assets/dbb24645-11ed-47ca-89ad-1ce35606bc5c" /><br>

## C.)
### Replication

### Sharding

Replication copies the same data to multiple servers, which helps with availability and protects against data loss. It also boosts read performance. However, replication doesn't help if your database gets too large to fit on one server. Sharding works differently, it splits the data into parts and stores them on different servers. This allows the system to handle more data and can make queries faster. But sharding needs to be set up carefully. Replication is great for keeping data safe and the system running, but sharding is better when you need to scale out.

For our company’s search platform that processes search queries, I suggest using sharding. It can handle large amounts of query results efficiently and offers better performance as the system grows.
