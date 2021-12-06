// =========================================
// Importing actions
const {calculatingPercentage} = require('../Controllers/CalculatingDataController')

const DisplayData = () => {
    
    calculatingPercentage()
}


module.exports = {DisplayData}