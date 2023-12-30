'use strict';
/*
Задача 1. Замовлення дроїдів
INFO
Виконуй це завдання у файлі task-1.js

Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.
 Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

quantity — кількість замовлених дроїдів
pricePerDroid — ціна одного дроїда
customerCredits — сума коштів на рахунку клієнта
Доповни функцію таким чином:

Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
Додай перевірку, чи зможе клієнт оплатити замовлення:
якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція makeTransaction(quantity, pricePerDroid, customerCredits)
Виклик makeTransaction(5, 3000, 23000) повертає "You ordered 5 droids worth 15000 credits!"
Виклик makeTransaction(3, 1000, 15000) повертає "You ordered 3 droids worth 3000 credits!"
Виклик makeTransaction(10, 5000, 8000) повертає "Insufficient funds!"
Виклик makeTransaction(8, 2000, 10000) повертає "Insufficient funds!"
Виклик makeTransaction(10, 500, 5000) повертає "You ordered 10 droids worth 5000 credits!"
*/{
    let task = '1';
    console.log(`----------------task-${task}--------------------`);
    function makeTransaction(quantity, pricePerDroid, customerCredits) {
        let totalPrice = quantity * pricePerDroid;
        if (totalPrice <= customerCredits) {
            return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
        }
        return "Insufficient funds!";
    };
    console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
    console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
    console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
    console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
    console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
    console.log(`----------------task-${task}--------------------`);
}