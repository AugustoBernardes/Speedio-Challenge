const CompanySchema = require('../Models/CompanyModel')
const {calculatingPercentage,coutingRestaurants} = require('../Controllers/CalculatingController')
// =========================================


const CalculatingData = async () => {

    let companiesActiveSituation = [];

    try {
        var companies = await  CompanySchema.find({})

        // Putting a part the data
        companies.forEach(data => {
            let company = data;

            if(company.situacaocadastral == 02){
                companiesActiveSituation.push(company)
            }
        });


        //Showing informations
        console.log(`Possuem ${coutingRestaurants(companies)} restaurantes!`)
        console.log(`Porcentagem é de: ${calculatingPercentage(companiesActiveSituation,companies)}%`)
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {CalculatingData}