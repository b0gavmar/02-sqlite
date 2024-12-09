import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

const initDB = async () => {
    await dbRun("DROP TABLE IF EXISTS users");
    await dbRun("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, lastName TEXT, email TEXT, class TEXT)");


    const users = [
        { firstName: "John", lastName: "Doe", email: "john.doe@example.com" , class: "13b"},
        { firstName: "Jane",lastName:"Smith", email: "jane.smith@example.com", class: "12a"},
        { firstName: "Sam",lastName:"Johnson", email: "sam.johnson@example.com" , class: "11c"},
    ];

    for (const user of users) {
       await dbRun("INSERT INTO users (firstName, lastName, email, class) VALUES (?, ?, ?, ?)", [user.firstName, user.lastName, user.email, user.class]);
    }
};

function dbQuery(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export { db, dbQuery, dbRun, initDB };