const {pipeline} = require('stream')
const {promisify} = require('util')
// =========================================
// Importing functions
const {DisplayAllData} = require('./DisplayData')
const {ReadingFile} = require('./ReadFile')


const pipelineAsync = promisify(pipeline)


async function run(){
    await pipelineAsync(
        ReadingFile,
        DisplayAllData
    )
}

run()
console.log('Acabo!')