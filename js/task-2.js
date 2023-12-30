'use strict';
/*
Задача 2. Форматування повідомлення
ВИКОНУЙ ЦЕ ЗАВДАННЯ У ФАЙЛІ task-2.js :::
Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

Доповни код функції таким чином, що:

Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"


Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція formatMessage(message, maxLength)
Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"
Виклик функції formatMessage("Vestibulum facilisis purus nec", 20) повертає "Vestibulum facilisis..."
Виклик функції formatMessage("Vestibulum facilisis purus nec", 30) повертає "Vestibulum facilisis purus nec"
Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) повертає "Nunc sed turpis..."
Виклик функції formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) повертає "Nunc sed turpis a felis in nunc fringilla"
*/
{
    let task = '2';
    console.log(`----------------task-${task}--------------------`);

    function formatMessage(message, maxLength) {
        let length = message.length;
        if (length <= maxLength) {
            return message;
        }
        return message.slice(0, maxLength) + '...';
    };
    console.log(formatMessage("Curabitur ligula sapien", 16));// повертає "Curabitur ligula..."
    console.log(formatMessage("Curabitur ligula sapien", 23));// повертає "Curabitur ligula sapien"
    console.log(formatMessage("Vestibulum facilisis purus nec", 20));// повертає "Vestibulum facilisis..."
    console.log(formatMessage("Vestibulum facilisis purus nec", 30));// повертає "Vestibulum facilisis purus nec"
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));// повертає "Nunc sed turpis..."
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));// повертає "Nunc sed turpis a felis in nunc fringilla"
    console.log(`----------------task-${task}--------------------`);
}