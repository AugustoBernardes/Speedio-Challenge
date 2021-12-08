// =========================================
// Importing functions
const {CalculatingData} = require('./Actions/CalculatingData')
const {ReadingFile} = require('./Actions/ReadFile')


// Executing the function on a row
function RunningPipeline(){
    ReadingFile()

    // Waiting for the first function to finish
    setTimeout( () => {
        CalculatingData()
    },15000)
}

RunningPipeline()
