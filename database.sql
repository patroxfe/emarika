CREATE DATABASE IF NOT EXISTS emarika;
USE emarika;

CREATE TABLE IF NOT EXISTS klient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    actualpage VARCHAR(255),
    description TEXT,
    competitors TEXT,
    media TEXT,
    material TEXT,
    logo VARCHAR(255),
    language VARCHAR(255),
    notes TEXT
);