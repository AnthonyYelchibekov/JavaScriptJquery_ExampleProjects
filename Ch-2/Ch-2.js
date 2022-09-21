var greeting = 'Hello, and welcome ';
var personName = '';
var submit = document.getElementById('button');
var text = document.getElementById('p')

var userName = document.getElementById('userName');



document.getElementById('button').addEventListener('click', compute, false);



function compute() {
    personName = userName.value;
    // alert(greeting + personName);
    var cost = personName.length;

    text.innerHTML = greeting + personName + '!';

    document.getElementById('p2').innerHTML='the cost of your plates will be: ' + '$'+ (personName.length * 2);



}










