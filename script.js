"use strict"
//1. Переписать функцию sumTwoSmallestNumbers. Данная функция должна принимать неограниченное кол-во аргументов и возвращать сумму двух наименьших чисел для заданного массива. Если передано меньше 2х аргументов - то должна вывестись ошибка (в консоль) и функция не должна продолжать выполнение.

// function sumTwoSmallestNumbers(...args) {
//     if (isNaN(args[0]) || isNaN(args[1])){
//         return console.error("Передано меньше 2-х аргументов!");
//     }
//     else {
//         return args.sort((a, b) => a - b)[0] + args[1];
//     }
// }

// console.log(sumTwoSmallestNumbers(67, 19, 52, 42, 21, 77, 40, 23, 45, 8)); // 27
// console.log(sumTwoSmallestNumbers(99, 10, 13, 32, 28, 43, 11, 19)); // 21
// console.log(sumTwoSmallestNumbers(9, 19)); // 28
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")
// console.log(sumTwoSmallestNumbers()); // undefined и отдельный console.error("...")

//2. Написать функцию createCalculator, чтобы ее можно было использовать таким образом:
//Для реализации необходимо использовать замыкание.
//Подсказка 1: функция может возвращать любой тип данных
//Подсказка 2: в значении ключа объекта может быть функция (как мы разбирали в примере с функция calc)

function createCalculator(startArgument) {
    let result = startArgument;
    return {
      sum: function(arg) {
        return result += arg;
      },
      sub: function(arg) {
        return result -= arg;
      },
      div: function(arg) {
        return result /= arg;
      },
      mult: function(arg) {
        return result *= arg;
      },
    };
  };
  
const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11