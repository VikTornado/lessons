let title = "GloAcademy";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 77;
let rollback = Math.floor(Math.random() * 100);
let fullPrice = 99;
let adaptive = true;


console.log("Название проекта " + title + " - тип данных " + (typeof (title)));
console.log("Хочу заработать " + fullPrice + " долларов " + " - тип данных " + (typeof (fullPrice)));
console.log("Булевое значение " + adaptive + " - тип данных " + (typeof (adaptive)));
console.log("Длина строки screens - " + screens.length + " символ");
console.log("Стоимость верстки экранов " + (screenPrice) + " рублей / долларов / гривен / юани");
console.log("Стоимость разработки сайта " + (fullPrice) + " рублей / долларов / гривен / юани");
console.log(screens.toLocaleLowerCase());
console.log(screens.split(" "));
console.log("Процент отката посреднику за работу = " + Math.floor(fullPrice * (rollback / 1000)));

