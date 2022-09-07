// constant
const sqlite3 = require('sqlite3')
const dbName = 'myData.db'

// Opening Database
let db = new sqlite3.Database(dbName, err => {
    if (err)
        throw err

    console.log('Database stated on'+ ' ' + dbName)
})


// Create table
// db.run(
//     'CREATE TABLE eleve(id INTEGER PRIMARY KEY AUTOINCREMENT, firstname VARCHAR(100), name VARCHAR(100), age NUMBER(10))',
//     err => {
//         if (err)
//             throw err
//         console.log('The one row as created')
//     }
// )

// insert on table
// const sql = 'INSERT INTO eleve(firstname,name,age) values (?,?,?)'
// db.run(sql,["cedric", "kouadio", "25"], err =>{
//     if (err)
//         throw err
//     console.log('The one row as created on Database')
// })

// delete the one line on table
// const sql = "DELETE FROM eleve WHERE id = '2'"
// db.run(sql, err => {
//     if (err)
//         throw err
//     console.log('One data is deleted on table')
// })



// view data list
const sql = 'SELECT*FROM eleve'

db.all(sql, [], (err, rows) => {
    rows.forEach((row) => {
        console.log(row)
    })
})

// // closing database
db.close(err=>{
    if (err)
        throw err

    console.log('Database closed')
})