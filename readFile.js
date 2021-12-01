// =========================================
const fs = require('fs')
const readline = require('readline')
// =========================================
// Importing actions
const {gettingCNAE} = require('./Controllers/Actions')
// =========================================

// Setting the file location
const fileLocation = './Estabelecimentos.ESTABELE'

const readFile = () => {
    const data = fs.createReadStream(fileLocation,'utf-8')

    const rl = readline.createInterface({
        input:data,
    })
    
    let counter = 0

    // Reading the file Lines
    rl.on('line', (res) => {
    
        // Spliting a string into an array 
        const responseList = res.split(';');

        // Sending data to functions
        // =========================================
        let CNAE = gettingCNAE(responseList)

        // Data de inicio esta em responseList[10]

        // Creating the object to sabe on DataBase
        let object = {
            cnae:CNAE,
            id:counter,
        }

        console.log(object)
        counter++
    })
}


readFile();


