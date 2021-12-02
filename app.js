// =========================================
const fs = require('fs')
const readline = require('readline')
// =========================================
// Importing actions
const {gettingCNAE,gettingCNPJ,gettingDate,gettingSituation,gettingName,gettingContact,gettingAdress} = require('./Controllers/ReadDataController')
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
        let CNPJ = gettingCNPJ(responseList)
        let CNAE = gettingCNAE(responseList)
        let Endereco = gettingAdress(responseList)
        let SituacaoCadastral = gettingSituation(responseList)
        let NomeFantasia = gettingName(responseList)
        let DataDeInicio = gettingDate(responseList)
        let Contato = gettingContact(responseList)
        
        // Creating the object to save on DataBase
        let object = {
            cnpj: CNPJ,
            nome: NomeFantasia,
            cnae: CNAE,
            situacaocadastral: SituacaoCadastral,
            inicioatividade: DataDeInicio,
            contato: Contato,
            endereco: Endereco,
            id: counter,
        }

        console.log(object)
        counter++
    })
}


readFile();


