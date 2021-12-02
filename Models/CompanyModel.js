const mongoose = require('mongoose')
// =========================================

const companySchema = new mongoose.Schema({
    cpnj:{type:String},
    nome:{type:String},
    cnae:{type:String},
    situacaocadastral:{type:String},
    inicioatividade:{
        ano:{type:String},
        mes:{type:String},
        dia:{type:String}
    },
    contato:{
        telefone1:{type:String},
        telefone2:{type:String}
    },
    endereco:{
        logradouro:{type:String},
        numero:{type:String},
        complemento:{type:String},
        bairro:{type:String},
        cep:{type:String},
        uf:{type:String}
    }

},{
    collection:'Companies'
})

module.exports = mongoose.model('CompanySchema',companySchema)