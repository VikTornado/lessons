"use strict";

const title = prompt("Как называется ваш проект?", "GloAcademy");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
const rollback = Math.floor(Math.random() * 100);
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.floor(fullPrice - fullPrice * (rollback / 1000));

console.log(servicePercentPrice);


console.log("Название проекта " + title + " - тип данных " + (typeof (title)));
console.log("Какие типы экранов нужно разработать? - " + screens);

console.log("Хочу заработать " + fullPrice + " долларов " + " - тип данных " + (typeof (fullPrice)));
console.log("Булевое значение " + adaptive + " - тип данных " + (typeof (adaptive)));
console.log("Длина строки screens - " + screens.length + " символ");
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей / долларов / гривен / юани");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей / долларов / гривен / юани");
console.log(screens.toLocaleLowerCase());
console.log(screens.split(" "));
console.log("Процент отката посреднику за работу = " + Math.ceil(fullPrice * (rollback / 1000)));

