/*Hello World*/
/*Переменные и операции с ним*/
//Типы переменных
var a = 5;//Целое число
var b = 2.5;//дробное
var str = "Hello";//Строчные
var key = true;//Булевые
//Операции с ними
document.write("Переменная а ровна: "+a);// Вывод значения
document.write("<br/>Сумма 2х переменнх равна "+ (a+b));
document.write("<br>"+str+" "+"World!");

var new_str=str+" "+"World!";
document.write("<br/>"+new_str.split(" ")[0]+" "+ new_str.split(' ')[1]);
//Посчет количества символов
alert(new_str.length)