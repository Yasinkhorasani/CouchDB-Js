'use strict';

/* Ausführlich
const nano = require('nano');
// Das nano-Modul besteht nur aus einer Funktion, die die Verbindung herstellt
const connection = nano('http://127.0.0.1:5984');
const db = connection.db;
*/

// Bitte niemals Credentials (a.k.a. Login-Daten) in den Quellcode schreiben.
let user = 'alfa';
let pw = 'alfa';

const db = require('nano')(`http://${user}:${pw}@127.0.0.1:5984`).db;

const dbName = 'exampl';

db.list().then(
    res => {
        if (res.includes(dbName)) return db.destroy(dbName);
        
        else return `${dbName} existiert nicht`;
    }
).then(
    console.log
).catch(
    console.warn
)

