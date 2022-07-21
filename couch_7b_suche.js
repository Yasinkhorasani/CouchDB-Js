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

const dbName = 'staedte';

// use() ist die einzige Methode, die kein Promise ist
// Sie stellt die Verbindung zur Datenbank her
let workDB = db.use(dbName);

workDB.find({
    selector:{
        einwohner: {
            // gt -> greater than
            '$gt': 1e5,
            '$lt': 1e6
        }
    }
}).then(
    res => res.docs
).then(
    console.log
).catch(
    console.warn
)
