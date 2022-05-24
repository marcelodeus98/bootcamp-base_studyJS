let sum = ( number_one, number_two) => {
    number_one = parseInt(prompt("Enter a number one"));
    number_two = parseInt(prompt("Enter a number two"));
    let valid_number_equals;
    let total = number_one + number_two;
    let total_is_one;
    let total_is_two;   
    
    number_one === number_two ? valid_number_equals = 'The numbers are same!' : valid_number_equals = 'The numbers are different!';
  

    total > 10 ? total_is_one = 'is bigger than 10' : total_is_one = 'is smalller than 10';

    total > 20 ? total_is_two = 'is bigger than 20' : total_is_two = 'is smaller than 20';
    
    alert(`${valid_number_equals}.The sum of numbers is ${total}, what is ${total_is_one}, and ${total_is_two}`)

  }

  sum();