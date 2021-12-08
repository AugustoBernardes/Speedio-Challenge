const CompanySchema = require('../Models/CompanyModel')
const {calculatingPercentage,coutingRestaurants,validatingRestaurants} = require('../Controllers/CalculatingController')
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

        //Showing informations
        console.log(`Porcentagem é de: ${calculatingPercentage(companiesActiveSituation,companies)}%`)
        console.log(`Possuem ${coutingRestaurants(companies)} restaurantes!`)
        let restaurantsPerYear = validatingRestaurants()
        restaurantsPerYear.forEach(restaurant => {
            console.log(`No ano de ${restaurant.ano}, abriram ${restaurant.counter} restaurantes!`)
        });
        
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {CalculatingData}