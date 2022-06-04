let checkPolydrome = (string) => {
    if(!string) return "Not  a strig!";

    return string.split('').reverse().join("") === string;
}

console.log(checkPolydrome('aba'));
console.log(checkPolydrome('oba'));
