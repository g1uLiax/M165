CREATE KEYSPACE flightmanagement2 WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE flightmanagement2;

CREATE TABLE flight_by_airport (
  IATA_id_depart text,
  IATA_id_arrive text,
  country text,
  city text,
  start_date date,
  end_date date,
  PRIMARY KEY (IATA_id_depart, IATA_id_arrive)
);

CREATE TABLE flight_by_airplane (
  airplane_id int,
  start_date date,
  end_date date,
  IATA_id_depart text,
  IATA_id_arrive text,
  PRIMARY KEY (airplane_id, start_date)
);

CREATE TABLE flight_by_employee (
  employee_id int,
  start_date date,
  last_name text,
  end_date date,
  IATA_id_arrive text,
  IATA_id_depart text,
  PRIMARY KEY (employee_id, start_date)
);

CREATE TABLE employee_by_flight (
  flight_id int,
  employee_id int,
  last_name text,
  first_name text,
  occupation text,
  PRIMARY KEY (flight_id, employee_id)
);
