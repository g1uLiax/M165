## A.)
http://107.23.233.148:7474/browser/

```
CREATE 
    (a1:Airport {IATA_id: 'FRA', city: 'Frankfurt', country: 'Germany'}),
    (a2:Airport {IATA_id: 'JFK', city: 'New York', country: 'USA'}),
    (a3:Airport {IATA_id: 'LHR', city: 'London', country: 'UK'}),
    (ap1:Airplane {capacity: 300, model: 'Boeing 747', homeairport: 'FRA'}),
    (ap2:Airplane {capacity: 180, model: 'Airbus A320', homeairport: 'JFK'}),
    (ap3:Airplane {capacity: 250, model: 'Boeing 777', homeairport: 'LHR'}),
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
