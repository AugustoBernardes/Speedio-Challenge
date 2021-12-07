const CompanySchema = require('../Models/CompanyModel')
// =========================================


const CalculatingData = async () => {

    let companiesActiveSituation = [];
    let restaurants = [];

    try {
        let companies = await  CompanySchema.find({})

        // Putting a part the data
        companies.forEach(data => {
            let company = data;

            if(company.situacaocadastral == 02){
                companiesActiveSituation.push(company)
            }
        });
        let activeCompanies = companiesActiveSituation.length

        if(activeCompanies === 0){
            console.log('Não há empresas com situação ativa!')
        }else{
            // Calculating percentage
            // =========================================
            let multiplicating = (activeCompanies * 100)

            let percentage = (multiplicating / companies.length)

            // Getting only restaurants
            // =========================================
            companiesActiveSituation.forEach(company => {
                let cnae = company.cnae
                
                if(cnae.startsWith('561') === true){
                    restaurants.push(company)
                }
            });

            
  
            // Showing informations
            console.log(`Porcentagem de empresas com situação ativa é de aproximadamente: ${percentage.toFixed(2)}%`)
        }

    } catch (error) {
        console.log(error)
    }
}


module.exports = {CalculatingData}