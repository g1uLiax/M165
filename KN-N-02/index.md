## A.)
http://107.23.233.148:7474/browser/

```
CREATE 
    (a1:Airport {IATA_id: 'FRA', city: 'Frankfurt', country: 'Germany'}),
    (a2:Airport {IATA_id: 'JFK', city: 'New York', country: 'USA'}),
    (a3:Airport {IATA_id: 'LHR', city: 'London', country: 'UK'}),
    (a4:Airport {IATA_id: 'CDG', city: 'Paris', country: 'France'}),
    (ap1:Airplane {capacity: 300, model: 'Boeing 747'}),
    (ap2:Airplane {capacity: 180, model: 'Airbus A320'}),
    (ap3:Airplane {capacity: 250, model: 'Boeing 777'}),
    (ap4:Airplane {capacity: 220, model: 'Boeing 737'}),
    (p1:Pilot {id: 'John', firstname: 'John', lastname: 'Doe'}),
    (p2:Pilot {id: 'Alice', firstname: 'Alice', lastname: 'Smith'}),
    (p3:Pilot {id: 'Robert', firstname: 'Robert', lastname: 'Brown'}),
    (p4:Pilot {id: 'Emma', firstname: 'Emma', lastname: 'Johnson'}),
    (f1:Flight {id: 'F100', departure_time: datetime('2024-06-01T08:00:00'), arrival_time: datetime('2024-06-01T12:00:00')}),
    (f2:Flight {id: 'F200', departure_time: datetime('2024-06-02T14:00:00'), arrival_time: datetime('2024-06-02T18:30:00')}),
    (f3:Flight {id: 'F300', departure_time: datetime('2024-06-03T07:15:00'), arrival_time: datetime('2024-06-03T11:45:00')}),
    (f4:Flight {id: 'F400', departure_time: datetime('2024-06-04T10:30:00'), arrival_time: datetime('2024-06-04T15:00:00')}),
    
    (f1)-[:DEPARTS_FROM]->(a1),
    (f1)-[:ARRIVES_AT]->(a2),
    (f2)-[:DEPARTS_FROM]->(a2),
    (f2)-[:ARRIVES_AT]->(a3),
    (f3)-[:DEPARTS_FROM]->(a3),
    (f3)-[:ARRIVES_AT]->(a1),
    (f4)-[:DEPARTS_FROM]->(a4),
    (f4)-[:ARRIVES_AT]->(a2),
    
    (ap1)-[:ASSIGNED_TO]->(f1),
    (ap2)-[:ASSIGNED_TO]->(f2),
    (ap3)-[:ASSIGNED_TO]->(f3),
    (ap4)-[:ASSIGNED_TO]->(f4),  

    (f1)-[:FLIED_WITH]->(ap1),
    (f2)-[:FLIED_WITH]->(ap2),
    (f3)-[:FLIED_WITH]->(ap3),
    (f4)-[:FLIED_WITH]->(ap4),
    
    (f1)-[:FLIED_BY]->(p1),
    (f2)-[:FLIED_BY]->(p2),
    (f3)-[:FLIED_BY]->(p3),
    (f4)-[:FLIED_BY]->(p4);
```

## B.)
<img width="1061" alt="image" src="https://github.com/user-attachments/assets/ea3948af-01fc-4e97-8199-344221d641f3" />

## C.)
<img width="947" alt="image" src="https://github.com/user-attachments/assets/e63ea576-1e37-4d9a-b7e7-69404e5f9aa9" />
<img width="947" alt="image" src="https://github.com/user-attachments/assets/cd20dc9b-8978-4069-8928-ec7ffa80103d" />

## D.)
<img width="983" alt="image" src="https://github.com/user-attachments/assets/69469b8d-62b8-4fd9-82d0-da690485d88d" /><br>
Ein Flug wurde mit einem kleineren Flugzeug durchgeführt. Nach einer Evaluation wird entschieden, das Flugzeug durch ein größeres Modell zu ersetzen. Dabei soll das alte Flugzeug abgetrennt und eine neue Beziehung mit dem neuen Flugzeug hergestellt werden.<br>
<img width="983" alt="image" src="https://github.com/user-attachments/assets/9758d26e-58f1-42ab-be5b-b2c0981d5d57" /><br>
Pilotin „Alice Smith“ wurde zur Chef-Pilotin befördert. Diese Änderung soll am bestehenden Knoten vorgenommen werden. Wir ergänzen ein neues Property rank.<br>
<img width="983" alt="image" src="https://github.com/user-attachments/assets/a8e1b537-fc59-4e4e-91b3-c3125ca87297" /><br>
Der Flughafen „LHR“ wurde in „Heathrow London“ umbenannt, und zur Korrektur wird auch das Country-Property präzisiert zu „United Kingdom“.<br>

## E.)
<img width="986" alt="image" src="https://github.com/user-attachments/assets/713acfc6-e4b7-471e-b474-2d71a3d1c22f" />
Was passiert:
- Jeder Pilot bekommt ein neues Property status.
- Es wird dynamisch je nach Nachnamen gesetzt – direkt im Query.
