DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    username TEXT NOT NULL,
    age INT NOT NULL,
    occupation TEXT NOT NULL,
    phoneNumber
);