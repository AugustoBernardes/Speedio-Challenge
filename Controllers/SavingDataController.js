const CompanySchema = require('../Models/CompanyModel')
// =========================================


const savingOnDataBase = async (data) => {

    try {
        let companyData = new CompanySchema(data)   

        let companySaved = await companyData.save()
    } catch (error) {
        console.log(error)
    }
}



module.exports = {savingOnDataBase}