const CompanySchema = require('../Models/CompanyModel')
// =========================================

let counter = 1;

const savingOnDataBase = async (data) => {

    try {
        let companyData = new CompanySchema(data)   

        let companySaved = await companyData.save()

        console.log(`Saving data number: ${counter}`)
        counter++
    } catch (error) {
        console.log(error)
    }
}



module.exports = {savingOnDataBase}