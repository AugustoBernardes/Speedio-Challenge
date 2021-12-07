
// CNAE
// =========================================
const gettingCNAE = (data) => {
    try {
        // Replacing the signal " to empty space
        const ReceivedCNAE = data[11].replace(/"/g, '').substr(0,7) ; 
            
        // Validating data
        if(ReceivedCNAE === ''){
            return '';
        }else{
            return ReceivedCNAE
        }
       
    } catch (error) {
        return ''; 
    }
}

// CNPJ
// =========================================
const gettingCNPJ = (data) =>{
    try {
        // Breaking apart the CNPJ data
        const CnpjBasico = data[0].replace(/"/g, '');
        const CnpjOrdem = data[1].replace(/"/g, '');
        const CnpjDv = data[2].replace(/"/g, '');

        // Putting together the CNPJ data
        const FullCnpj = CnpjBasico+CnpjOrdem+CnpjDv;
        
        return FullCnpj;
    } catch (error) {
        return ''; 
    }
}

// DATE
// =========================================
const gettingDate = (data) => {

    try {
        // Receving the start date
        const date = data[10].replace(/"/g, '');

        // Separing the Year, Month and Day
        const year = date.substr(0,4) ;
        const month = date.substr(4,2);
        const day = date.substr(6,8)

        // Creating a object to put he date 
        const fullDate = {
            ano:year,
            mes:month,
            dia:day
        }

        return fullDate;
        
    } catch (error) {

        // Creating a undefined object
        const undefinedDate = {
            ano:'',
            mes:'',
            dia:''
        }

        return undefinedDate;
    }
}

// SITUATION 
// =========================================
const gettingSituation = (data) => {
    try {
        const situation = data[5].replace(/"/g, '')   

        return situation;
    } catch (error) {
        return ''
    }
}

// NAME
// =========================================
const gettingName = (data) => {
    try {
        const name = data[4].replace(/"/g, '')

        if(name === ''){
            return '';
        }else{
            return name;
        }

    } catch (error) {
        return '';
    }
}

// ADRESS
// =========================================
const gettingAdress = (data) => {
    try {

        // Getting adress data
        const PublicPlace = data[13].replace(/"/g, '')
        const Number = data[15].replace(/"/g, '')
        const Complement = data[14].replace(/"/g, '')
        const District = data[17].replace(/"/g, '')
        const Cep = data[18].replace(/"/g, '')
        const Uf = data[19].replace(/"/g, '')


        // Object with all the adress data
        const fullAdress = {
            logradouro:PublicPlace,
            numero:Number,
            complemento:Complement,
            bairro:District,
            cep:Cep,
            uf:Uf
        }

        return fullAdress;
 
    } catch (error) {

        const undefinedAdress = {
            logradouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            cep:'',
            uf:''
        }
        
        return undefinedAdress;
    }
}


// CONTACT
// =========================================
const gettingContact = (data) => {

    try {
        // Getting the contact numbers
        const firstDDD = data[21].replace(/"/g, '')
        const firstNumber = data[22].replace(/"/g, '')

        const secondDDD = data[23].replace(/"/g, '')
        const secondNumber = data[24].replace(/"/g, '')

        const contactData = {
            telefone1: `${firstDDD}${firstNumber}`,
            telefone2: `${secondDDD}${secondNumber}`,
        }

        return contactData
    } catch (error) {
        const undefinedContact = {
            telefone1: '',
            telefone2: ''
        }

        return undefinedContact
    }

}

module.exports = {gettingCNAE,gettingCNPJ,gettingDate,gettingSituation,gettingName,gettingAdress,gettingContact}