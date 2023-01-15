/*//1
function isEmpty(obj) {
  for (let key in obj) {
    return false;
}
    return true;
}*/
/*//2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}*/
/*//3
function readNumber() {
  let num;
    do {
      num = prompt("Введіть число", '');
    } while (!isFinite(num));
    if (num === null || num === '') 
    return null;
    return +num;
}
alert(`число: ${readNumber()}`);*/
/*//4
function random(min, max) {
  return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));*/
/*//5
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));
alert(randomInteger(1, 5));*/
/*//6
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert( ucFirst("вася"));*/
/*//7
function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));*/
/*//8
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
alert(truncate("Ось що мені хотілося б сказати на цю тему:", 20));
alert(truncate("Усім привіт!", 20));*/
/*//9
function extractCurrencyValue(str) {
  return +str.slice(1);
}
alert(extractCurrencyValue ('$120') === 120);*/
/*//10
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введіть число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}
alert(sumInput());*/

//11. Блок "else" не обов'язковий. Якщо прибрати else ця функція буде працювати однаково. Else виконується у випадку, коли умова дорівнює false.

/*//12
function checkAge(age) {
  return age > 18 ? true : confirm('Батьки дозволили?');
}
function checkAge(age) {
    return age > 18 || confirm('Батьки дозволили?');
}*/
/*//13
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}*/
/*//14
function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}*/
/*//15
let x = prompt("x?", '');
let n = prompt("n?", '');
if (n < 1) {
  alert("Лише натуральні значення n, тобто цілі від 1 та вище.");
} else {
    alert( pow(x, n) );
}
let ask = (question, yes, no) => {
  confirm(question) ? yes() :no();
}
ask("Ви згодні?", () => alert("Ви погодилися."), () => alert("Ви скасували виконання."));*/

/*//16
function total(salary, price, outlay) {
  let target;
  return Math.ceil((target = price / (salary - outlay)));
}
alert(total(3333, 8000, 1750));*/

/*//17
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Ваше число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    if(number < 0) {
      sum += number;
    }
  }
  return sum;
}
alert(sumInput());*/