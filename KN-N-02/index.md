## A.)
http://107.23.233.148:7474/browser/

```
CREATE 
    (a1:Airport {IATA_id: 'FRA', city: 'Frankfurt', country: 'Germany'}),
    (a2:Airport {IATA_id: 'JFK', city: 'New York', country: 'USA'}),
    (a3:Airport {IATA_id: 'LHR', city: 'London', country: 'UK'}),
    (a4:Airport {IATA_id: 'ZRH', city: 'Zurich', country: 'Switzerland'}),
    (ap1:Airplane {capacity: 300, model: 'Boeing 747'}),
    (ap2:Airplane {capacity: 180, model: 'Airbus A320'}),
    (ap3:Airplane {capacity: 250, model: 'Boeing 777'}),
    (p1:Pilot {firstname: 'John', lastname: 'Doe'}),
    (p2:Pilot {firstname: 'Alice', lastname: 'Smith'}),
    (p3:Pilot {firstname: 'Robert', lastname: 'Brown'}),
    (f1:Flight {departure_time: datetime('2024-06-01T08:00:00'), arrival_time: datetime('2024-06-01T12:00:00')}),
    (f2:Flight {departure_time: datetime('2024-06-02T14:00:00'), arrival_time: datetime('2024-06-02T18:30:00')}),
    (f3:Flight {departure_time: datetime('2024-06-03T07:15:00'), arrival_time: datetime('2024-06-03T11:45:00')}),
    
    (a1)-[:STARTS_IN]->(f1),
    (a2)-[:GOES_TO]->(f1),
    (a2)-[:STARTS_IN]->(f2),
    (a3)-[:GOES_TO]->(f2),
    (a3)-[:STARTS_IN]->(f3),
    (a1)-[:GOES_TO]->(f3),
    
    (ap1)-[:HAS]->(a1),
    (ap2)-[:HAS]->(a2),
    (ap3)-[:HAS]->(a3),
    
    (f1)-[:HAS]->(ap1),
    (f2)-[:HAS]->(ap2),
    (f3)-[:HAS]->(ap3),
    
    (f1)-[:FLIES]->(p1),
    (f2)-[:FLIES]->(p2),
    (f3)-[:FLIES]->(p3);
```
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
