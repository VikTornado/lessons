"use strict";

const titleName = document.getElementsByTagName('h1')[0];
const btnReset = document.getElementsByClassName('.handler_btn');
const btnPlus = document.querySelector('.screen-btn');
const itemPercent = document.querySelector('.other-items.percent');
const itemNumber = document.querySelector('.other-items.number');
const range = document.querySelector('.rollback input[type=range]');
const rangeValue = document.querySelector('.rollback span.range-value');
const totalInput = document.getElementsByClassName('total-input'),
    totalInput1 = totalInput[0],
    totalInput2 = totalInput[1],
    totalInput3 = totalInput[2],
    totalInput4 = totalInput[3],
    totalInput5 = totalInput[4];
let screenItem = document.querySelectorAll('.screen');

console.log(titleName);
console.log(btnReset);
console.log(btnPlus);
console.log(itemPercent);
console.log(itemNumber);
console.log(range);
console.log(rangeValue);
console.log(totalInput);
console.log(screenItem);



const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 10,
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && num != ' ';
    },

    isString: function (str) {
        return isNaN(str);
    },

    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?");
        } while (!appData.isString(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (!appData.isString(name));
            let price = 0;

            do {
                price = prompt("Сколько будет стоить данная работа?");
                price = Number(price);
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price });

            console.log('Как называется ваш проект?', typeof appData.title);
            console.log('Какие типы экранов нужно разработать?', typeof name);
            console.log('Сколько будет стоить данная работа?', typeof price);
        }
        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (!appData.isString(name));

            do {
                price = prompt("Сколько это будет стоить?");
                price = Number(price);
            } while (!appData.isNumber(price));

            appData.services[name] = +price;

            console.log('Какой дополнительный тип услуги нужен?', typeof name);
            console.log('Сколько это будет стоить?', typeof price);
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price < 15000 && price >= 0) {
            return "Скидка не предусмотрена";
        } else if (price < 0) {
            return "Что то пошло не так";
        }
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toLowerCase();
        appData.title = +appData.title.trim().substring(1).toLowerCase();
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    logger: function () {
        for (let prop in appData) {
            console.log(prop);
        }
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
};

appData.start();