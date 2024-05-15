const myAge = '13';
console.log(myAge);

const myName = "Artur";
console.log(myName);

const isStudent = "True";
console.log(isStudent);

const myString = "Я зараз занадто зайнятий, мені потрібно випити чаю. - Шерлок Холмс";
console.log(myString);

let myNumber = 5;
myNumber = myNumber + 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

const userName = prompt("Введіть ваше ім'я для подальших дій.");
alert("Вітаємо, " + userName + "!");

const userConfirm = confirm("Підтвердьте, якщо ви насправді хочете зайти на сайт.");
if (userConfirm) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}

const warning = alert("Увага! Ваші дії небезпечні та можуть погано вплинути на ваш пристрій!");
const warningConfirm = confirm("Підтвердьте, вашу дію, для запобігання вірусів.");
if (warningConfirm) {
    alert("Дякую за підтвердження!");
}
else {
    alert("Дію відмінено!");
}