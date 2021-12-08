let restaurants = [];
let years = [];
let counting = [];
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

function validatingRestaurants(){
    let years = gettingYears()

    years.forEach(year => {
        let data = {
            ano:year,
            counter:0
        }

        counting.push(data)
    })
 
    restaurants.forEach(restaurant => {
        let validateYear = restaurant.inicioatividade.ano
        
        counting.forEach(data => {
            let year = data.ano
            
            if(validateYear == year){
                data.counter = data.counter + 1
            }

        })
    })

    return counting
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

module.exports = {calculatingPercentage,coutingRestaurants,validatingRestaurants}