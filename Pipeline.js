// =========================================
// Importing functions
const {calculatingData} = require('./Actions/CalculatingData')
const {ReadingFile} = require('./Actions/ReadFile')


async function runningApp(){
    await ReadingFile()
    calculatingData()
}

runningApp()
