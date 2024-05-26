-- Utwórz bazę danych, jeśli nie istnieje
CREATE DATABASE IF NOT EXISTS mojabaza;

-- Użyj bazy danych
USE mojabaza;

-- Utwórz tabelę klient, jeśli nie istnieje
CREATE TABLE IF NOT EXISTS klient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    actualpage VARCHAR(255),
    description TEXT,
    competitors TEXT,
    media TEXT,
    material TEXT,
    logo VARCHAR(50),
    language VARCHAR(50),
    notes TEXT
);