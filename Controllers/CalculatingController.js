

function calculatingPercentage(activeComp,allCompanies ){
    // Calculating percentage
    // =========================================
    let activeCompanies = activeComp.length

    let multiplicating = (activeCompanies * 100)

    let percentage = (multiplicating / allCompanies.length)

    return percentage

}

// Restaurants
// =========================================
let restaurants = [];
function coutingRestaurants(companies){
    if(companies === 0){
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

module.exports = {calculatingPercentage,coutingRestaurants}