
// 5. Составить скрипт, который запрашивает у пользователя ввести номер кредитной карты. Скрипт должен обработать полученный номер и показать на странице последние 4 цифры а остальные цифры карты должны заменены на *.
    
//     **Пример: "Номер вашей карты: **********1245"**
let cardNumber = prompt("Урматтуу кардар карстаңыздын номерин жазыңыз!");
let card = cardNumber.slice(12,16);
console.log("********" + card);
