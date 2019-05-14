CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INTEGER auto_increment not null,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT false,
    date TIMESTAMP not null DEFAULT current_timestamp,
    primary key(id)
    );