
let num1 = Number(prompt("Бірінші санды енгізіңіз:"));
let num2 = Number(prompt("Екінші санды енгізіңіз:"));
let num3 = Number(prompt("Үшінші санды енгізіңіз:"));

var max = Math.max(num1, num2, num3);
var min = Math.min(num1, num2, num3);
var alymy = '';
alymy = max - min;
alert("Ең үлкен және ең кішкентай санның айырмасы: " + alymy )


