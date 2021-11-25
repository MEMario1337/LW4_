let a = 2;
let b = 2;
let c = a + b;
var age = 18;
console.log(c);
c = a - b;
console.log(c);
c = a / b;
console.log(c);
c = a * b;
console.log(c);
console.log(`Мені ${age} років`);
let time = 50; 
let transmission = 25; 
for(let i = ''; i <= 3; i++ ){
let message = (time >= transmission ? "Дані передвються у вадповідності за вказаним значенням передачі сигналу" : "Час передачі перевищено");
transmission = transmission + 25;
alert(message);
break;
} 
let time = 50; 
let transmission = 65; 
let message = (time >= transmission ? "Дані передвються у вадповідності за вказаним значенням передачі сигналу" : "Час передачі перевищено");
alert(message)