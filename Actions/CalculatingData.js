const CompanySchema = require('../Models/CompanyModel')
// =========================================


const CalculatingData = async () => {

    let companiesActiveSituation = [];

    try {
        let companies = await  CompanySchema.find({})

        // Putting a part the data
        companies.forEach(data => {
            let company = data;

            if(company.situacaocadastral == 02){
                companiesActiveSituation.push(company)
            }
        });

        // Calculating percentage
        let activeCompanies = companiesActiveSituation.length

        let multiplicating = (activeCompanies * 100)

        let percentage = (multiplicating / companies.length)

        if(activeCompanies === 0){
            console.log('Não há empresas com situação ativa!')
        }else{
            console.log(`Porcentagem de empresas com situação ativa é de aproximadamente: ${percentage.toFixed(2)}%`)
        
        }

    } catch (error) {
        console.log('Happened a error!')
    }
}

module.exports = {CalculatingData}