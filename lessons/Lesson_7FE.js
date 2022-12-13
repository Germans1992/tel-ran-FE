// alert("hello World!");

// let first_name = "German"; //String

// let num = 25; //Number

// let question = 'true'; //Boolean

// const pi = 3.14;

// let result = prompt("Enter the number"); // Окошко для данных

// console.log(typeof(result));

// let str1 = "Hello";
// let str2 = 'Hello';
// let str3 = `Hello ${num}`; // Интерполяция строка плюс число;

// console.group("Germans" + ' ' + "Titovs"); //Конкатенация соединение строк;

// let first_name = 'Germans';
// let greeting = "hello";

// console.log(`${greeting}, ${first_name}`);

// let r = 12;
// let g = 34;
// let b = 14;

// console.log(`rgb(${ r }, ${ g }, ${ b })`);

// let num = 123;
// let str = String(num);

// console.log(str);
// console.log(num);

// let str = "123";
// let num = Number(str);

// console.log(typeof(str));
// console.log(typeof(num)); //Явное преображение

// let str = "123";
// let num = +str;

// console.log(typeof(str));
// console.log(typeof(num)); //Не явное;

// console.log('3' + 2); //32;
// console.log('3' * 2); //6;
// console.log('6' / 2); //3;
// console.log(+'3' + 2); //5;

//Написать программу которая выводит ваш возвраст в минутах

// let age = +prompt("Каков ваш возвраст?");
// age *= 525600;
// console.log(`Your age is ${age} in minutes`);

//Программа которая выводит квадрат числа!

// let num = prompt("Какое число возвести в квадрат?");
// Number(num);
// console.log(num ** 2);

//Складываем оба числа через prompt

// let num1 = +prompt('Number?');
// let num2 = +prompt('Number?');
// console.log(num1 + num2);

// let num = Number(prompt("Enter the number"));

// if (num == 0) {
//     console.log("Ноль");
// } else if (num > 0) {
//     console.log("Положительное");
// } else {
//     console.log("Другое число");
// }

//Сравнивает два числа и выводит наибольшее!

// let num1 = Number(prompt("Первое число"));
// let num2 = Number(prompt("Второе число"));

// if (num1 > num2) {
//     console.log(num1);
// } else if (num2 > num1) {
//     console.log(num2);
// }

let num = Number(prompt("Ваше число?"));

if (num == 0) {
    console.log("Число равно нулю");
} else if (num % 2 == 0) {
    console.log("Выводит число четное");
} else if (num % 2 != 0) {
    console.log("число не четное");
}