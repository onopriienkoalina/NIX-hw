//1
/*function camelize(str) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}
alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));*/

//2
/*function filterRange(arr, a, b) {
  return arr.filter(item => (a <= item && item <= b));
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr);*/

//3
/*function filterRangeInPlace(arr, a, b) {
for(let i=0; i<arr.length; i++){
  if(arr[i]<a && arr[i]>b){
      arr.splice(i, 1);
      i--;
  }
}
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr );*/

//4
/*let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b-a);
alert(arr);*/

//5
/*let arr = ["HTML", "JavaScript", "CSS"];
function copySorted(arr){
    return arr.slice().sort();
}
let sorted = copySorted(arr);
alert(sorted);
alert(arr);*/

//6
/*function Calculator() {
this.methods = {
  "-": (a, b) => a - b,
  "+": (a, b) => a + b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};
this.calculate = function(str) {
  let split = str.split(' '),
    a = +split[0],
    op = split[1],
    b = +split[2];
  if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return this.methods[op](a, b);
};
this.addMethod = function(name, func) {
  this.methods[name] = func;
};
}*/

//7
/*let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 28};
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert(names);*/

//8
/*function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}
let vasya = {name : " Вася ", age: 25};
let petya = {name : " Петя ", age: 30};
let masha = {name : " Маша ", age: 28};
let arr = [ vasya , petya , masha ] ;
sortByAge ( arr );
alert( arr [0].name); 
alert ( arr [1].name);
alert ( arr [2].name);*/

//9
/*function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25};
let petya = { name: "Петя", age: 30};
let masha = { name: "Маша", age: 29};
let arr = [ vasya, petya, masha ];
alert(getAverageAge(arr));*/

//10
/*function unique(arr) {
let obj = {};
for (let i = 0; i < arr.length; i++) {
  let str = arr[i];
  obj[str] = true;
}
return Object.keys(obj);
}
let strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"];
alert (unique (strings));*/

//11
/*function unique(arr) {
  return Array.from(new Set(arr));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"];
alert(unique(values));*/

//12 Так вони незалежні, тому що counter і counter2 створено двома різними викликами і у кожного з них є своя змінна. Другій лічильник покаже 0, 1. 
  /*function makeCounter() {
let count = 0;
return function() {
return count++; };}
let counter = makeCounter();
let counter2 = makeCounter();
alert (counter ()); // 0
alert (counter ()); // 1
alert (counter2 ()); //?0
alert (counter2 ()); //?1*/

//13 Так він буде працювати і покаже 1, 2, 1. Тому що обидві функції мають доступ до змінної count.
/*function Counter() {
let count = 0;
this.up = function() {
return ++count;
};
this.down = function() {
return --count;
};
}
let counter = new Counter();
alert(counter.up()); //?1
alert(counter.up()); //?2
alert(counter.down() ); //?1*/

//14
/*function factorial(n) {
  if ((n === 0) || (n === 1))
  return 1;
else
  return (n * factorial(n - 1));
}
alert(factorial(5));*/





