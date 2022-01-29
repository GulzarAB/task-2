// 1. Дана строка **'ddd@bbb@ccc'**. Замените все **@** на **'!'**
// let text = "ddd@bbb@ccc";
// let newText = text.replace(/@/gi,"!");
// console.log(newText);

// // 2. Дана строка **'js'**. Сделайте из нее строку **'JS'**.
// let a = "js";
// let newA = a.toUpperCase(); 
// console.log(newA);

// // 3. Дана строка **'JS'**. Сделайте из нее строку **'js'**.
// let b = "JS";
// let newB = a.toLowerCase(); 
// console.log(newB);

// // 4. Дана строка**'I am a hero!'**. Выведите в консоль **количество символов** в этой строке.
// let str = "I am a hero!";
// let newStr = str.length;
// console.log(newStr);

// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
//     **Пример: "Номер вашей карты: **********1245"**
let cardNumber = prompt("Урматтуу кардар карстаңыздын номерин жазыңыз!");
let card = cardNumber.slice(12,16);
console.log("********" + card);

