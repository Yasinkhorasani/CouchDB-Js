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

const dbName = 'example';

// use() ist die einzige Methode, die kein Promise ist
// Sie stellt die Verbindung zur Datenbank her
let workDB = db.use(dbName);

const meinAuto = {
    _id: 'e3833fe95854000cf70983b8a100b5a7',
    _rev: "3-25c2d7ade0e513a5748e2cf2b32d2587",
    marke: 'VW',
    modell:'Golf',
    leistungKW: 102,
    farbe: 'rot',
    leasing: false
}

// Um einen Datensatz zu aktualieren, dient ebenfalls der insert()-Befehl

workDB.insert(meinAuto).then(
    console.log
).catch(
    console.warn
)
