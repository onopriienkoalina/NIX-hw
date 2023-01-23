//1
/*function createCalendar(elem, year, month) {
    const localizedWeekDaysArr = ['пн', 'вт','ср','чт','пт','сб','вс'];
    const localizedWeekDays = {
      '0':'вс','1':'пн', '2':'вт','3':'ср','4':'чт','5':'пт','6':'сб'
      };
      function getDay(i){
        return localizedWeekDaysArr.indexOf( localizedWeekDays[i]);
      }
    const table = document.createElement('table');
    const tableHead = document.createElement('thead');
    tableHead.append(document.createElement('tr'));
    const tableHeadRow = document.createElement('tr');
    localizedWeekDaysArr.forEach(day => {
      const th = document.createElement('th');
      th.textContent = day;
      tableHeadRow.append(th);
    });
    tableHead.append(tableHeadRow);
    table.append(tableHead);
    const date = new Date(year, month - 1, 1);
    const daysInMonth = new Date(year, month, 0).getDate();
    const tableBody = document.createElement('tbody');
    for (let i = 0; i < daysInMonth; i++){
      let row;
      date.setDate(i + 1);
      const isMonday = date.getDay() === 1;
      if(isMonday || i === 0){
        row = document.createElement('tr');
        localizedWeekDaysArr.forEach(x => {
          const td = document.createElement('td');
          row.append(td);
        })
        tableBody.append(row);
      } else {
        row = tableBody.querySelector('tr:last-child');
      }
      const items = row.querySelectorAll('td');
      date.setDate(i + 1);
      const weekDayIndex = date.getDay();
      const indexInRow = getDay(weekDayIndex);
      items[indexInRow].textContent = i + 1;
    }
    table.append(tableBody);
    elem.append(table);
}
createCalendar(cal, 2012, 9);*/

//2
/*function showNotification({top = 0, right = 0, className, html}) {
    let arg = arguments[0];
    let div = document.createElement('div');
    div.className = 'notification';
    div.classList.add(arg.className);
    div.style.top = arg.top + 'px';
    div.style.right = arg.right + 'px';
    div.innerHTML = arg.html;   
    document.body.append(div);    
    setTimeout(() => div.remove(), 1500);
}
let i = 1;
setInterval(() => {
    showNotification({
      top: 10,
      right: 10,
      html: 'Hello ' + i++,
      className: "welcome"
    });
}, 2000);*/

//3
/*document.onclick = function(e) { 
    coords.innerHTML = e.clientX + ':' + e.clientY;
};
let field = document.getElementById('field');
let coordinates = field.getBoundingClientRect();
let first = `${coordinates.left}:${coordinates.top}`;
let second = `${coordinates.right}:${coordinates.bottom}`;
let third = `${coordinates.left + field.clientLeft}:${coordinates.top + field.clientTop}`;
let forth = `${coordinates.right - field.clientLeft}:${coordinates.bottom - field.clientTop}`;*/

//4, 5, 6
/*
* Позиціонує елемент elem щодо елемента anchor відповідно до
значення position.
*
* @param {Node} anchor елемент, біля якого позиціонується інший
елемент
* @param {string} position одне з: top/right/bottom
* @param {Node} elem елемент, який позиціонується
*
* Обидва елементи elem і anchor повинні бути присутніми у
документі
*/ 

//4
/*function positionAt(anchor, position, elem) {
    let coordinates = anchor.getBoundingClientRect();
    switch(position){
      case "top":  
        elem.style.top = `${coordinates.top - elem.offsetHeight}px`;
        elem.style.left = `${coordinates.left}px`;  
        break;  
      case "right":  
        elem.style.top = `${coordinates.top}px`;
        elem.style.left = `${coordinates.right}px` 
        break;  
      case "bottom":
        elem.style.top = `${coordinates.top + anchor.offsetHeight}px`
        elem.style.left = `${coordinates.left}px`;
        break;
    }
}*/
//5
/*function getCoordinates(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
}
function positionAt(anchor, position, elem) {
    let coordinates = anchor.getBoundingClientRect();
    switch(position){
      case "top":  
        elem.style.top = `${coordinates.top - elem.offsetHeight}px`;
        elem.style.left = `${coordinates.left}px`;  
        break;  
      case "right":  
        elem.style.top = `${coordinates.top}px`;
        elem.style.left = `${coordinates.right}px` 
        break;  
      case "bottom":
        elem.style.top = `${coordinates.top + anchor.offsetHeight}px`
        elem.style.left = `${coordinates.left}px`;
        break;
    }
}*/
//6
/*function getCoordinates(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
}
function positionAt(anchor, position, elem) {
  let coordinates = anchor.getBoundingClientRect();
  switch(position){
    case "top-out":
      elem.style.top = `${coordinates.top - elem.offsetHeight}px`;
      elem.style.left = `${coordinates.left}px`;
      break;
    case "right-out":
      elem.style.top = `${coordinates.top}px`;
      elem.style.left = `${coordinates.right}px`;
      break;
    case "bottom-out":
      elem.style.top = `${coordinates.top + anchor.offsetHeight}px`;
      elem.style.left = `${coordinates.left}px`;
      break;
    case "top-in":
      elem.style.top = `${coordinates.top}px`;
      elem.style.left = `${coordinates.left}px`;
      break;
    case "right-in":
      elem.style.top = `${coordinates.top}px`;
      elem.style.left = `${coordinates.right - elem.offsetWidth}px`;
      break;
    case "bottom-in":
      elem.style.top = `${coordinates.top + anchor.offsetHeight - elem.offsetHeight}px`;
      elem.style.left = `${coordinates.left}px`;
      break;
    }
}*/
/**
* Показує нотатку із заданим вмістом на заданій позиції
* Щодо елемента anchor. */
/*function showNote(anchor, position, html) {
let note = document.createElement('div');
note.className = "note";
note.innerHTML = html;
document.body.append(note);

positionAt(anchor, position, note);
}
*/
// test it
//let blockquote = document.querySelector('blockquote');
/*6 showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "top-out", "note top-out");
showNote(blockquote, "right-out", "note right-out");
showNote(blockquote, "bottom-in", "note bottom-in");*/
/*4, 5 showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");*/

//7 Обидва обробники запустяться. Останній обробник запуститься в будь-якому випадку, а перший тому що він не видалиться за допомогою вказаного методу. 

//8
/*let field = document.getElementById('field');
let ball = document.getElementById('ball');
field.addEventListener('click', (event) =>{
  let h = field.clientHeight;
  let hN = field.offsetTop + field.clientTop;
  let w = field.clientWidth;
  let wN = field.offsetLeft + field.clientLeft;
  let y = event.clientY - hN - ball.offsetHeight / 2;
  let x = event.clientX - wN - ball.offsetWidth / 2;

  if(y < 0) y = 0;
  if(x < 0) x = 0;
  if(y > h - ball.offsetHeight) y = h - ball.offsetHeight;
  if(x > w - ball.offsetWidth) x = w - ball.offsetWidth;

  ball.style.top = y + 'px';
  ball.style.left = x + 'px';
});*/

//9
/*let menuElem = document.getElementById('candy');
let buttonElem = menuElem.querySelector('.button');
buttonElem.onclick = function() {
menuElem.classList.toggle('open');
};*/

//10
/*Array.from(document.querySelectorAll(".pane")).forEach((el) => (
el.insertAdjacentHTML("afterbegin",
'<button class="remove-button">[x]</button>'),
el.firstChild.addEventListener("click", () => el.remove())
)
);*/

//11
/*let select = document.getElementById('genres');
let selectedItem = Array.from(select.options).filter(item => item.selected)[0];
alert(`${selectedItem.value} ${selectedItem.text}`);
let option = new Option('Классика', 'classic');
select.append(option);
option.selected = true;*/


