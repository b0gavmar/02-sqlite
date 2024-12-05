import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initDB = async () => {
    await dbRun("DROP TABLE users");
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT PRIMARY KEY, class TEXT)");


    const users = [
        { firstName: "John", lastName: "Doe", email: "john.doe@example.com" , class: "13b"},
    ];

     for (const user of users) {
        await dbRun("INSERT INTO users (firstName, lastName, email, class) VALUES (?, ?, ?, ?)", [user.firstName, user.lastName, user.email, user.class]);
     }
};