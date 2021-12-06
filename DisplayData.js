const mongoose = require('mongoose')
require('dotenv').config()
// =========================================

// Importing action 
// =========================================
const {DisplayData} = require('./Controllers/DisplayDataController')

// Data Base Connection
// =========================================
function DisplayAllData(){
    const DB_KEY = process.env.DB_KEY

    // Db connection
    mongoose.connect(DB_KEY)   

    const db = mongoose.connection   

    db.once('error', () => {console.log("DataBase wasn't load!")})
    db.once('open', () => {console.log('DataBase loaded!') + DisplayData()})    

}

DisplayAllData();

module.exports = {DisplayAllData}

