
let restaurants = [];
let years = [];
// Percentage
// =========================================
function calculatingPercentage(activeComp,allCompanies ){
    // Calculating percentage
    // =========================================
    let activeCompanies = activeComp.length

    let multiplicating = (activeCompanies * 100)

    let percentage = (multiplicating / allCompanies.length)

    return percentage.toFixed(2)
}

// Getting the years
// =========================================
function gettingYears(){
    restaurants.forEach(restaurant => {
        let year = restaurant.inicioatividade.ano

        // Removing the duplicated years
        if(years.includes(year) === false){
            years.push(year)
        }
    })
    return years
}

// Restaurants
// =========================================

function coutingRestaurants(companies){
    if(companies.length === 0){
        console.log('Não há empresas com situação ativa!')
    }else{

        // Getting only restaurants
        // =========================================
        companies.forEach(company => {
            let cnae = company.cnae
            
            if(cnae.startsWith('561') === true){
                restaurants.push(company)
            }
        });
    }

    return restaurants.length;
}

module.exports = {calculatingPercentage,coutingRestaurants,gettingYears}