let person = {
    name: 'Marcelo Deus',
    age: 23
};

function calculateAge(years){
    return `In ${years} years, ${this.name} will have ${this.age + years} years of age`;
};

console.log(calculateAge.call(person, 30));
