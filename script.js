 num = prompt('Enter a number to be FizzBuzz\'d');

FizzBuzz(num);

function FizzBuzz(num) {
  let list = '';
  
  for (let i = 1; i <= num; i++) {
    (i % 3 == 0) && (i % 5 == 0) ? list += ' FizzBuzz' :
    (i % 3 == 0) ? list += ' Fizz':
    (i % 5 == 0) ? list += ' Buzz':
    list += ` ${i}`;
  }
  alert(list);
}



