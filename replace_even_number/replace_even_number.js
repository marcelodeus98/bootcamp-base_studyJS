let replaceEvenNumber = (array) => {
    if(!array) return -1;
    if(!array.length) return -1;

    for(let indice = 0; indice < array.length; indice++){
        if(array[indice] === 0) {
            console.log('You are already zero!');
        }
        else if(array[indice] % 2 === 0 ){
            console.log(`To replace ${arr[indice]} por 0...`);
            arr[indice] = 0;
        }
    }

    return console.log(array);
}

let arr = [2,3,4,5,6,7,8,9,10,11,15,16,18];

replaceEvenNumber(arr);