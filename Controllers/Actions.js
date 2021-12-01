
const gettingCNAE = (data) => {

    try {
        // Replacing the signal " to empty space
        const ReceivedCNAE = data[12].replace(/"/g, '').substr(0,7)  ; 
            
        // Validating data
        if(ReceivedCNAE === ''){
            return 'undefined'
        }else{
            return ReceivedCNAE
        }
       
    } catch (error) {
        return 'undefined'    
    }
}

module.exports = {gettingCNAE}