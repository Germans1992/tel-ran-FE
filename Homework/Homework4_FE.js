// //Задание 1;

// let d = 7;
// console.log(d);
// console.log(Math.pow(d, 2));
// console.log(Math.pow(d, 3));

// //Задание 2;

// let a = +prompt("Введите число");
// if (a > 0) {
//     console.log(a * 2);
// }


// //Задание 3;

// var number = +prompt("Введите число");
// if (number > 0) {
//     console.log("число положительное");
// } else if (number < 0) {
//     console.log('число отрицательное');
// } else if (number == 0) {
//     console.log('Ноль');
// }

//Задание 4;

// var first_number = +prompt("Вводится первое число");
// var second_number = +prompt("Вводится второе число");

// if (first_number > second_number) {
//     console.log(first_number + second_number);
// } else if (second_number > first_number) {
//     console.log(first_number * second_number);
// } else if (first_number == second_number) {
//     console.log('Числа равны');
// }

//Задание 5;

// var number = +prompt("Введите число");
// if (number < 0) {
//     console.log(number ** 2);
// } else { console.log('Error'); }

//Задание 6;

// var children = +prompt("Количество учеников");
// var chairs = +prompt("Количество стульев");
// if (chairs < children) {
//     console.log('стульев не хватает');
// } else if (chairs >= children) {
//     console.log('Стульев хватает');
// }

//Задание 7;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.unshift('Start');
// arr.push('Finish');
// console.log(arr);

//Задание 8;

// for (i = 1; i <= 99; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }

//Задание 9;

// let a = +prompt('Введите число');
// if (a % 2 == 0) {
//     a = a - 1;
// }
// for (i = 1; i <= 7; i++) {
//     a = a + 2;
//     console.log(a);
// };

//Задание 10;

// let a = [13, 3, 45, 15, 1, 78, 32, 30, 3, 9];
// for (i = 0; i < a.length; i++) {
//     if (a[i] >= 15)
//         console.log(a[i]);
// }

//Задание 11;

// let a = [24, 2, 21, 67, 7, 95, 32, 83, 11, 17];
// for (i = 0; i < a.length; i++) {
//     if (a[i] % 2 != 0)
//         console.log(a[i]);
// }

//Задание 13;

// let arr = [20, 40, 77, 53];
// let sum = 0;

// function count() {
//     for (i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(count());

//Задание 14;

// const arr = [20, 40, 77, 53, 51, 67, 32, 8, 19];
// let sum = 0;

// function count() {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0)
//             sum += arr[i];
//     }
//     return sum;
// }
// console.log(count());

//Задание 15;

// const Numbers = [20, 40, 77, 53, 51, 67, 32, 8, 19];
// let sumEven = 0;
// let sumOdd = 0;

// function count() {
//     for (i = 0; i < Numbers.length; i++) {
//         if (Numbers[i] % 2 != 0)
//             sumEven += Numbers[i];
//     }
//     return sumEven;
// }
// console.log(count());

// function countOdd() {
//     for (i = 0; i < Numbers.length; i++) {
//         if (Numbers[i] % 2 == 0)
//             sumOdd += Numbers[i];
//     }
//     return sumOdd;
// }
// console.log(countOdd());
// console.log("Разница между четными и нечетными" + ' ' + (sumEven - sumOdd));