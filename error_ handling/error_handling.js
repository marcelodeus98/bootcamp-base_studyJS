let persons = ['jon', 'lucas', 'marcelo'];

function validateError(array, number){
    try {
        
        if(!array && !number) throw new ReferenceError('Send the parameters!');
    
        if(typeof array !== 'object') throw new TypeError('Array must be of type object!');
    
        if(typeof number !== 'number') throw new TypeError('Number must be of type number!');
    
        if(array.length !== number) throw new RangeError('Array size is different from number passed as parameter!')
        
    
        console.log('Sucess!')
    } 
    catch (error) {
        if(error instanceof ReferenceError){
            console.log(error.stack);
        }
        else if(error instanceof TypeError){
            console.log(error.stack);
        }
        else if(error instanceof RangeError){
            console.log(error.stack);
        }
        else{
            console.log(`Unexpected error ${error}`);
        }
    }
}

validateError(3,3); // Array is not array
validateError(); // parameters were not sent
validateError(persons,2); // The size array and number is not equal
validateError(persons,3); // Sucess
validateError(persons, 'dois'); // Number is not number
