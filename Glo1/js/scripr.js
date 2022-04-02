"use strict";

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    service1: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    rollback: 10,
    asking: function () {
        appData.title = prompt(
            "Как называется ваш проект?",
            "Калькулятор верстки");
        appData.screens = prompt(
            "Какие типы экранов нужно разработать?",
            "Простые, Сложные, Интерактивные");
        do {
            appData.screenPrice = prompt(
                "Сколько будет стоить данная работа?", 1000);
        } while (!appData.isNumber(appData.screenPrice));

        appData.adaptive = confirm(
            "Нужен ли адаптив на сайте?");
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num)) && num != ' ';
    },

    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt(
                    "Какой дополнительный тип услуги нужен?",
                    "метрика");
            } else if (i === 1) {
                appData.service2 = prompt(
                    "Какой дополнительный тип услуги нужен?",
                    "метрика");
            }

            do {
                appData.price = prompt("Сколько это будет стоить?", 1000);
            } while (!appData.isNumber(appData.price));
            sum += +appData.price;
            return sum;
        }
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
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
        return appData.title.trim()[0].toUpperCase()
            + appData.title.trim().substring(1).toLowerCase();
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    logger: function () {
        for (let i in appData) {
            console.log(i + ": " + appData[i]);
        }
    }
};

appData.start();