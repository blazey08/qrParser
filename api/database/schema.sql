DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    username TEXT NOT NULL,
    age INT NOT NULL,
    occupation TEXT NOT NULL,
    phoneNumber
);

DROP TABLE IF EXISTS credentials;

CREATE TABLE credentials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);