# Konzeptionelles Datenmodell
<img width="476" alt="image" src="https://github.com/user-attachments/assets/50c55d53-68a3-4e57-bfd8-a4acb2bd41ef" /><br>
One flight has two airports, one is the start and one the destination. An airport can have many flights. A flight can have one pilot and one airplane, a pilot and an airplane can have many flights. An airplane also has a home airport.

# Logisches Datenmodell mongoDB
<img width="700" alt="image" src="https://github.com/user-attachments/assets/04d3c7f3-1f2c-4d30-ac3a-b349f418f45b" /><br>
I decided to reference the airports on the flight with their IATA ID, since it is unique for every airport and doesnt change. The Airplane is referenced with its id since other details about the airplane arent needed on the flight itself. <br>
The pilot is embedded since its good to know the pilot with their name on the flight, the pilot also gets announced at the start of the flight.<br>
On the airplane the airport is also referenced with its IATA ID for consistency and the same reasons as above for the flight. On the airport the homeairplanes are embedded in an array with their capacity and model, since its good to know which model the homeairplanes have and their capacity. <br>
Home airplanes are not neccessarily airplanes that are on the airport right now, they are airplanes that have been licensed by that airport and go there for repairments etc.


# Anwendung des Schemas
<img width="220" alt="image" src="https://github.com/user-attachments/assets/67ed8974-5f8a-4424-a381-19333d97fb0e" />


