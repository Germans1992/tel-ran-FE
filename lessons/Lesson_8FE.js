// //array - Массив;

// let fruits = ['Apple', 'Banana'];

// console.log(fruits.length); // Длинна массива

// let first_fruit = fruits[0];

// console.log(first_fruit);

// fruits.push('Mango'); //Добавить в конец массива

// console.log(fruits);

// fruits.pop(); // удаление последнего массива

// fruits.unshift('Mango'); // Добавление в начало массива

// fruits.shift(); //Удаление первого элемента массива

// console.log(fruits);
// console.log(fruits.indexOf('Banana'));
// fruits.splice(1, 1); //Какой элемент и сколько элементов удаляется

// let spl = fruits.splice(fruits.indexOf('Apple'), 2);
// console.log(spl);
// console.log(fruits);

//Программа, которая считывает три числа через

// let arr = [];

// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// let num3 = Number(prompt('Enter the number'));

// arr.push(num1, num2, num3);
// console.log(arr);

// let style = ['Jazz', 'Blues'];

// style.push('Rock and Roll');

// style.splice(1, 1, 'Classic');

// let firstArray = style.shift();

// style.unshift('Rep', 'Reggae');

// console.log(firstArray);
// console.log(style);

// for (let num = 0; num < 5; num++) {
//     if (num == 2) {
//         continue;
//     }
//     console.log(num);
// };

// let arr = [];

// for (let num = 0; num < 3; num++) {
//     arr.push(Number(prompt('Enter the number')));
// }
// console.log(arr);

//Задача написать цикл который выводит только положительные цифры

// let arr = [1, 0, -3, 13, -45, -23, 17, 99]
// for (num = 0; num < arr.length; num++) {
//     if (arr[num] > 0) {
//         console.log(arr[num]);
//     }
// }