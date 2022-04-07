const book = document.querySelectorAll('.book');
const adv = document.querySelectorAll('.adv');
const elem = book[4].getElementsByTagName('a');
const block = document.querySelectorAll("ul > li");
let newLiElem = document.createElement("li");

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
adv[0].remove();
book[0].before(book[1]);
book[2].before(book[5]);
book[0].after(book[4]);
book[4].after(book[3]);

elem[0].innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов'

block[3].after(block[6]);
block[6].after(block[8]);
block[48].before(block[55]);
block[55].after(block[49]);
block[49].after(block[50]);
block[53].after(block[51]);

newLiElem.textContent = "Глава 8: За пределами ES6";
block[25].after(newLiElem);

console.log(book);
console.log(block);
