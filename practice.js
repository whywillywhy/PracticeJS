var age=prompt('4islo');
if (age<=90 && age>=14){
	alert('ok!!!!');
}
///////////////////////////////////////////////////
var year = prompt('Login');
if (year=='admin') {
	var pass = prompt('passw');
	if (pass=='qwer'){
		alert ('OK');
	}
	else {
		alert ('He OKAY');
	}
}
else if (escape){
	alert('canceled');
}
else  {
	alert('Access denied');
}
//////////////////////////////////////////////////Задание 1 (Повторять цикл, пока ввод неверен)
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввел другое число — попросить ввести еще раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введет число, большее 100, либо не нажмет кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа, предусматривать обработку нечисловых строк в этой задаче необязательно.
var number=prompt ('Try');
while (number<100) {
	number=prompt ('Try again');
}
//////////////////////////////////////////////////Задание 2 (Вывести простые числа)
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.

nextPrime:
for (var i = 2; i < 10; i++) {

	for (var j = 2; j < i; j++) {
		if (i % j == 0) continue nextPrime;
	}
    console.log(i); // простое
  }
///////////////////////////////////////////////////Задание 4 (FizzBuzz 2)
Исправьте предыдущую задачу FizzBuzz так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на3, и на 5.

for (i=1; i<100; i++) {
	if (i%3==0 || i%5==0) {
		console.log('FizzBuzz')
	}
	else
		console.log(i)
}
/////////////////////////////////////////////////////Задание 5 (Шахматная доска)
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо \#. В результате должна получиться шахматная доска.

var result = "\n";
for (var row = 1; row <= 8; row++) {
	for (var cell = 1; cell <= 8; cell++) {
    result += (row % 2 == cell % 2) ? "#" : " "; //Можно еще побитово - (row & 1 == cell & 1)
  }
  result += "\n";
}
console.log(result);
///////////////////////////////////////////////////////Задание 6 (pow)
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x,n) {
	var b=x;
	for (var j=1; j<n;j++){
		b*=x;
	}
	return b; 
}
var test=pow(2,5);
console.log(test);
///////////////////////////////////////////////////////
Перевод числа в отрицательное

function makeNegative(num) {
	if (num >=0 ) {
		return "0" - num;
	} else {
		return num;
	}
}
///////////////////////////////////////////////////////
Сравнение на парность/непарность
1)
function lovefunc(flower1, flower2){
	if (flower1%2 == 0 && !(flower2%2 == 0)){
		return true;
	} else if (flower2%2 == 0 && !(flower1%2 == 0)){
		return true;
	} else {
		return false;
	}
}
2)
function lovefunc(flower1, flower2){ 
	return (flower1%2 == 0 && !(flower2%2 == 0)) ? true : 
	(flower2%2 == 0 && !(flower1%2 == 0)) ? true : false;

}
///////////////////////////////////////////////////////
True or False

function boolToWord( bool ){
	return (bool == true) ? 'Yes' : 'No';
}
///////////////////////////////////////////////////////
Рекурсия

function sumTo(n) {
	if (n != 1){
		return n + sumTo(n-1); 

	}else {
		return n;
	}
}
console.log(sumTo(4));
///////////////////////////////////////////////////////   
Проверка на СПАМ

function checkSpam(str) {
	var lowerStr = str.toLowerCase();

	return !!(~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
///////////////////////////////////////////////////////   
Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
function chekStr(str){
	return (str.substr(20,4)) ? str.substr(0,20)+".." : str;
}
console.log(chekStr('free xxxgfdgdfgdfdgfdgfdfdxfdd'));
///////////////////////////////////////////////   \
// return a function that returns n
function always (n) {
	return () => n;
}
/////////////////////////////////////////////// 
Объект

var menu= {
	name:'Sergey',
	surname:'Petrov'
}
menu['name']='Andrey';
menu.age=30;
delete menu.name;
console.log(menu);
/////////////////////////////////////////////// 
Объекты. Есть ли внутри они?

function isEmpty(obj) {
	for (var key in obj ){
		return true;
	}
	return false;
}
var todolist ={};
console.log(isEmpty(todolist));
todolist['homework']='lesson5';
console.log(isEmpty(todolist));
/////////////////////////////////////////////// 
функция - Посчиать суму в Объекте

function suma(obj){
	result=0;
	for (var key in obj){
		result += obj[key];
	}
	return result;
}
var salaries ={
	'junior':1000,
	'midle':2500,
	'senior':3500,
	'lead':5000
};
console.log(suma(salaries));
/////////////////////////////////////////////// 
функция которая принимает на вход массив, а на выходе после элемент

function suma(mas){
  return mas[mas.length-1];
}
var mas=[2,5,7,8];
console.log(suma(mas));
/////////////////////////////////////////////// 
функция которая принимает на вход массив и параметр, а на выходе массив

function suma(mas){
  mas.push(x);
  return mas;
}
var mas=[2,5,7,8];
var x=30;
console.log(suma(mas));
/////////////////////////////////////////////// 
Создайте массив fruits с элементами «apple», «orange».
2. Добавьте в конец значение «kiwi»
3. Замените предпоследнее значение с конца на «pear». Код
замены предпоследнего значения должен работать для
массивов любой длины.
4. Удалите первое значение массива и выведите его console.
5. Добавьте в начало значения «apricot» и «peach».

var fruits=["apple","orange"];
fruits.push("kiwi");
fruits[fruits.length-2]="pear";
console.log(fruits);
console.log(fruits.shift());
fruits.unshift("apricot","peach");
console.log(fruits);
/////////////////////////////////////////////// 
function suma(mas){
  var rand=mas[0]+ Math.floor(Math.random()* (mas[mas.length-1] + 1 -mas[0])) ;
  return rand;
}
var mas=[2,5,7,8];
console.log(suma(mas));
/////////////////////////////////////////////// 
 Добавить в classname новое значение

var obj = {
  classname: 'open menu'
};

function addclass(obj,cls){
 var classes = obj.classname.split(' '); 
  if (classes.indexOf(cls) == -1){
    classes.push(cls);
  }
  obj.classname = classes.join(' ');
}

addclass(obj, 'new');
console.log(obj.classname);
/////////////////////////////////////////////// 
функция, котороя преобразует строки вида 'my-short-string' в 'myShortString'

function toCamelCase(str) {
	var arr = str.split('-');

	for (var i = 1; i < arr.length; i++){
		//Преобразовать: первый символ с большой буквы
		arr[i] = arr[i].chart(0).toUpperCase() + arr[i].slice(1); 
	}
	return arr.join('');
}
/////////////////////////////////////////////// 
Напиште код который выведет сотрудника который выполнил больше всех задач.

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};

var max = 0;
var maxName = "";
for (var key in tasksCompleted) {
  if (max < tasksCompleted[key]) {
    max = tasksCompleted[key];
    maxName = key;
  }
}
console.log( maxName || "нет сотрудников" );
/////////////////////////////////////////////// 
Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.

var image = {
	width: 200,    
	title: 'Cool image',
	height: 800
};
var clone ={};
function multiplyNumeric(clone) {

	for (var key in image){
		clone[key] = image[key]*2;
	}return clone;
}
console.log(multiplyNumeric(clone));
/////////////////////////////////////////////// 
Создайте калькулятор для введённых значений
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива


var numbers = [];
while (true) {
  var value = prompt("Введите число", 0);
  if (value === "" || value === null || isNaN(value)) break;
  numbers.push(+value);
}

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

alert( sum );
/////////////////////////////////////////////// 
Если нужно именно скопировать массив, то это можно сделать, например, так:

var arr2 = [];
for (var i = 0; i < arr.length; i++) arr2[i] = arr[i];
/////////////////////////////////////////////// 
Фильтр диапазона

function filterRange(arr, a, b) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      result.push(arr[i]);                    // заполнение второго массива
    }
  }

  return result;
}

var arr = [5, 4, 3, 8, 0];

var filtered = filterRange(arr, 3, 5);
alert( filtered );
/////////////////////////////////////////////// 
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

var obj = {
	className: 'open menu bla'
};

function removeClass(obj,cls) {
	var classes = obj.className.split(' '); 

	for (var i=0; i<classes.length; i++){
		if (classes[i] == cls){
			classes.splice(i,1);
			i--;
		}
	}	
	obj.className = classes.join(' ');

}

removeClass(obj, 'open'); 
console.log(obj.className); 
//////////////////////////////////////////////////////////////////////
Сортировка массива строк

var arr = ['HTML', 'JavaScript', 'CSS'];

var arrSorted = arr.slice();
arrSorted.sort();

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
//////////////////////////////////////////////////////////////////////
(Random sort)
Необходимо отсортировать массив в случайном порядке используя метод sort.


var arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() -0.5 ;
}

arr.sort(compareRandom);

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
//////////////////////////////////////////////////////////////////////

function leo(oscar){
  return oscar==88 ? "Leo finally won the oscar! Leo is happy" :
         oscar==86 ? "Not even for Wolf of wallstreet?!" :
         oscar<88 ?  "When will you give Leo an Oscar?" :
                     "Leo got one already!"
}
//////////////////////////////////////////////////////////////////////
Сравнить время

var start = new Date; // засекли время

// что-то сделать
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date; // конец измерения

alert( "Цикл занял " + (end - start) + " ms" );
//////////////////////////////////////////////////////////////////////

var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
  for (var key in arr) arr[key]++;
}

function walkLength(arr) {
  for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
  var date = new Date();
  for (var i = 0; i < 10000; i++) f(arr);
  return new Date() - date;
}

alert( 'Время walkIn: ' + bench(walkIn) + 'мс' );
alert( 'Время walkLength: ' + bench(walkLength) + 'мс' );
//////////////////////////////////////////////////////////////////////
Впихнуть в  массив новый параметр
//write your code here 
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
questions.forEach(function(q) {
  q.usersAnswer = null;
});

console.log(questions);
//////////////////////////////////////////////////////////////////////

function addf(x) {
 return function(y) {
 	return x+y;
 	};
}

console.log(addf(3)(4));
//////////////////////////////////////////////////////////////////////
Методы объектов

var calc = {
  a: null,
  b: null,
read: function(){
  this.a = +prompt('a');
  this.b = +prompt('b');
  
},
sum: function (){
  return (this.a+this.b);
},
mul: function (){
  return (this.a*this.b);
}
};
calc.read();
console.log(calc.sum());
console.log(calc.mul());
//////////////////////////////////////////////////////////////////////
Rock, paper or scissors?

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2) {
  if(choice1 === choice2) {
    return("The result is a tie!");
  } else if(choice1 === "rock") {
    if(choice2 === "scissors") {
      return("rock wins");
    } else {
      return "paper wins";
    }
  } else if(choice1 ==="paper") {
    if(choice2 ==="rock") {
      return("paper wins");
    } else {
      return"scissors wins";
    }
  } else if(choice1 === "scissors"){
    if (choice2 === "rock"){
        return "rock wins";
    }else {
      return "scissors wins"
    }
   }
}
compare(userChoice,computerChoice);
//////////////////////////////////////////////////////////////////////

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};
var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++){       
        if( lastName == contacts[i].lastName){
            printPerson(contacts[i]);
            };
        };
    };
search('Jones');

function add(firstName, lastName, email, phoneNumber) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber  
    };
   };
add('vasya', 'vasyaa', 'y@com', 5664564);
list();
//////////////////////////////////////////////////////////////////////