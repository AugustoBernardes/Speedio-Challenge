const mongoose = require('mongoose')
require('dotenv').config()
// =========================================

// Importing action 
// =========================================
const {ReadFile} = require('./Controllers/ReadFileController')

// Data Base Connection
// =========================================
function ConnectingDataBase(){
    const DB_KEY = process.env.DB_KEY

    // Db connection
    mongoose.connect(DB_KEY)   

    const db = mongoose.connection   

    db.once('error', () => {console.log("DataBase wasn't load!")})
    db.once('open', () => {console.log('DataBase loaded!') + ReadFile()})    

}

ConnectingDataBase();



