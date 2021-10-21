/*Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, 
начиная от первого и заканчивая вторым. Используйте setInterval.*/ 

function printNumbers(a, b) {
    let current = a;
  
    let timerId = setInterval(function() {
      alert(current);
      if (current == b) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNumbers(5, 15);
  