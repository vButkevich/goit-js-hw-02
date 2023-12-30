'use strict';
/*
Задача 4. Доставка товару
ВИКОНУЙ ЦЕ ЗАВДАННЯ У ФАЙЛІ task-4.js :::
Оголоси функцію getShippingCost(country),
 яка повинна перевіряти можливість доставки товару в країну користувача (параметр country)
  і повертати повідомлення про результат.
   Обов'язково використовуй інструкцію switch.

Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

Список країн і вартість доставки:

China — 100 кредитів
Chile — 250 кредитів
Australia — 170 кредитів
Jamaica — 120 кредитів
Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція getShippingCost(country)
У тілі функції використана інструкція switch
Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"
Виклик getShippingCost("China") повертає "Shipping to China will cost 100 credits"
Виклик getShippingCost("Chile") повертає "Shipping to Chile will cost 250 credits"
Виклик getShippingCost("Jamaica") повертає "Shipping to Jamaica will cost 120 credits"
Виклик getShippingCost("Sweden") повертає "Sorry, there is no delivery to your country"

*/
{
    let task = '4';
    console.log(`----------------task-${task}--------------------`);

    function getShippingCost(country) {

        // China — 100
        // Chile — 250
        // Australia — 170
        // Jamaica — 120

        let price;
        switch (country.toLowerCase()) {
            case 'australia':
                price = 170;
                break;
            // case 'Germany':price = 170;break;
            case 'china':
                price = 100;
                break;
            case 'chile':
                price = 250;
                break;
            case 'jamaica':
                price = 120;
                break;
            // case 'Sweden':price = 170;break;
            default:
                return "Sorry, there is no delivery to your country";
        }
        return `Shipping to ${country} will cost ${price} credits`;
    };
    console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
    console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
    console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
    console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
    console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
    console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
    console.log(`----------------task-${task}--------------------`);
}
