const element_body = document.getElementsByTagName('body')[0];
const h1_mode = document.getElementById('title-mode');
const button_mode = document.getElementById('background-mode');

console.log(element_body);

let changeMode = () => {
    changeClass();
    changeText();
};

let changeClass = () => {
    button_mode.classList.toggle('dark-mode');
    h1_mode.classList.toggle('dark-mode');
    element_body.classList.toggle('dark-mode');
};

let changeText = () => {
    if(element_body.classList.contains('dark-mode')){
        button_mode.innerHTML = 'Ligth Mode';
        h1_mode.innerHTML = 'Dark mode is ON!'
        return;
    }

    button_mode.innerHTML = 'Dark Mode';
    h1_mode.innerHTML = 'Ligth mode is ON!'
}

button_mode.addEventListener('click', changeMode);


