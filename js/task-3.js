'use strict';
/*Задача 3. Перевірка спаму
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. 
Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

Доповни код функції таким чином, що:

Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
Якщо в рядку відсутні заборонені слова, функція повертає буль false
Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

Залиш цей код для перевірки ментором.

На що буде звертати увагу ментор при перевірці:
Оголошена функція checkForSpam(message).
Виклик функції checkForSpam("Latest technology news") повертає false
Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
Виклик функції checkForSpam("Get best sale offers now!") повертає true
Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true

*/
{
    let task = '3';
    console.log(`----------------task-${task}--------------------`);

    function checkForSpam(message) {
        message = message.toLowerCase();
        return message.includes('sale') || message.includes('spam')
    };
    console.log(checkForSpam("Latest technology news")); // false
    console.log(checkForSpam("JavaScript weekly newsletter")); // false
    console.log(checkForSpam("Get best sale offers now!")); // true
    console.log(checkForSpam("Amazing SalE, only tonight!")); // true
    console.log(checkForSpam("Trust me, this is not a spam message")); // true
    console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
    console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

    console.log(`----------------task-${task}--------------------`);
}
