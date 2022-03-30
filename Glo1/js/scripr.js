"use strict";

let title = prompt("Как называется ваш проект?", "Калькулятор верстки"),
    screens = prompt("Какие типы экранов нужно разработать?", "Сложные"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", 1000),
    adaptive = confirm("Нужен ли адаптив на сайте?"),
    servise1 = prompt("Какой дополнительный тип услуги нужен?", "Адаптив"),
    servicePrice1 = +prompt("Сколько Вы готовы заплатить?", 2000),
    servise2 = prompt("Какой дополнительный тип услуги нужен?", "Мобильная версия"),
    servicePrice2 = +prompt("Сколько Вы готовы заплатить?", 3000),
    fullPrice = screenPrice + servicePrice1 + servicePrice2,
    procent = 10,
    result = (fullPrice / 100) * procent;


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getAllServicePrices = function (price1, price2) {
    return price1 + price2;
};

let allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

const getFullPrice = function (num1, num2) {
    return num1 + num2;
};
const fullPrice1 = getFullPrice(screenPrice + allServicePrices); //fullPrice1

const getTitle = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const getServicePercentPrices = function (a, b) {
    return a - b;
};
let servicePercentPrice = getServicePercentPrices(fullPrice, result);


const getRollbackMessage = function (price) {
    if (price >= 30000) {
        console.log("Даем скидку в 10%");
    } else if (price >= 15000 && price < 30000) {
        console.log("Даем скидку в 5%");
    } else if (price < 15000 && price >= 0) {
        console.log("Скидка не предусмотрена");
    } else if (price < 0) {
        console.log("Что то пошло не так");
    }
};


console.log(`${getTitle(title)}`);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log("сумма стоимости верстки и стоимости дополнительных услуг " + fullPrice);
console.log("разрабатываю " + screens + " типы экранов!");
console.log("Процент отката посреднику за работу: " + result + " рублей");
console.log(procent + '% от ' + fullPrice + ' будет ' + result);
console.log(servicePercentPrice + " итоговая стоимость минус сумма отката");
console.log(Math.ceil(servicePercentPrice) + " округление суммы");