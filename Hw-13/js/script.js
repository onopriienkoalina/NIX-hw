//1
/*document.body.firstElementChild
document.body.lastElementChild
document.body.lastElementChild.lastElementChild*/

/*2 1. Правда, тому що він завжди останній і дорівнює null.
2. Не правда, тому що перед ним можуть бути інакші вузли або елементи, так як він являється нащадком.*/

//3
/*let tbody = document.body.firstElementChild.firstElementChild;
for(let i = 0; i < tbody.children.length; i++) {
tbody.children[i].children[i].style.backgroundColor = 'red';
}*/

//4
/*document.getElementById('age-table')
document.querySelectorAll('#age-table label')
document.querySelector('td')
document.querySelector('form[name="search"]')
document.querySelector('input')
var nodes = document.querySelectorAll('input') 
nodes[nodes.length-1]*/

//5
/*let li = document.querySelectorAll("li");
for(let i=0; i < li.length; i++) {
alert(li[i].firstChild.data+" : "+li[i].querySelectorAll("li").length);
}*/

//6 Код виведе 1. Це script, останній вузол, так як браузер ще не встиг обробити сторінку.
/*alert(document.body.lastChild.nodeType); //1*/

//7 Код виведе BODY. Тому що коментар це єдиний нащадок body.firstChild і data це те що всередині нього.
/*let body = document.body;
body.innerHTML = "<!--" + body.tagName + "-->";
alert( body.firstChild.data ); //BODY*/

//8 Document є об'єктом класу HTMLDocument. Він посідає друге місце в DOM-ієрархії і успадковує від Node.

//9
/*function clear(elem) {
    elem.innerHTML = '';
  }
  clear(elem);*/

  //10 Тому що ааа повинно знаходитись в середіни тегу td або за кордонами таблиці. Так як браузер виправляє помилки автоматично він виніс ааа за кордони таблиці, то ж clear(elem) видалило таблицю а текст ааа залишився.
/*alert(table);
table.remove();*/

//11 
/*let ul = document.createElement('ul');
document.body.append(ul);
let list = [];
function creatingList() {
let content = prompt('створіть список');
if ( !( content == null || content == '' ) ) {
let li = document.createElement('li');
li.textContent = content;
list.push(li);
creatingList();
}
}
creatingList();
ul.append(...list);*/

//12
/*let li = document.querySelector('ul li');
li.insertAdjacentHTML('afterend','<li>2</li><li>3</li>');*/