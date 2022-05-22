let currentNumber = document.querySelector('#counter');
let valueInitial = 0;
console.log(currentNumber)


let increment = () => {
    valueInitial++;
    currentNumber.innerHTML = valueInitial;
};

let decrement = () => {
    valueInitial--;
    currentNumber.innerHTML = valueInitial;
};