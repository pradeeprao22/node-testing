CREATE DATABASE transport;

CREATE TABLE medium(
  medium_id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  type VARCHAR(200),
  cost INTEGER
);

CREATE TABLE user(
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  role VARCHAR(200),
  email VARCHAR(100),
  password VARCHAR(50)
)