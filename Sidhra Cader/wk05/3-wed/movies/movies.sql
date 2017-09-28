CREATE DATABASE omdb;

CREATE TABLE movies(
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100),
  year INT,
  runtime VARCHAR(20),
  genre VARCHAR(200),
  actors VARCHAR(200),
  plot VARCHAR(1500)
);

ALTER TABLE movies ADD COLUMN image_url VARCHAR(200);
