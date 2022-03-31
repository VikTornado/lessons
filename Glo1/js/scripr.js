"use strict";

let title,
    screens,
    screenPrice,
    adaptive,
    rollback = +(Math.ceil(Math.random() * 100)),
    fullPrice,
    allServicePrices,
    servicePercentPrice,
    service1,
    servicePrice,
    service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt("Как называется ваш проект?", "калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    }
    while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "метрика");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "метрика");

        }
        do {
            servicePrice = +prompt("Сколько это будет стоить?", 1000);
        }
        while (!isNumber(servicePrice));
        sum += servicePrice;
    }

    return sum;
};

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%";
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%";
    } else if (price < 15000 && price >= 0) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так";
    }
};

const getTitle = function (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100));
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();


console.log(`${getTitle(title)}`);
showTypeOf(title);
showTypeOf(adaptive);
showTypeOf(screenPrice);

console.log("allServicePrices", allServicePrices, typeof allServicePrices);
console.log(screens, typeof screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice, typeof servicePercentPrice);