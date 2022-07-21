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
    marke: 'VW',
    modell:'Golf',
    leistungKW: 102,
    farbe: 'weiß',
    leasing: false,
    inspektion:[
        {
            jahr: 2022,
            arbeiten:[
                {
                    name: 'Bremse ölen',
                    zeit: .3
                },
                {
                    name: 'Waschen',
                    zeit: 1
                }
            ]
        }
    ]
}

// Der Parameter für create() Muss ein Objekt sein.
workDB.insert(meinAuto).then(
    console.log
).catch(
    console.warn
)
