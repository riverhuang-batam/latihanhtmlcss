var cars = ["saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

var cars = ["saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars[0];

var cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
document.getElementById("demo2").innerHTML = cars;

var persons = ["john", "blaster", 384];
document.getElementById("demo3").innerHTML = persons[2];

var persons = {firstName:"john", lastName:"blaster", age:"18"}
document.getElementById("demo4").innerHTML = persons["firstName"];

var fruit  = ["mango","apple","banana","starfruit"]
document.getElementById("demo5").innerHTML = fruit.length;

var fruit = ["mango", "apple", "banana","starfruit"];
var first = fruit[1];
document.getElementById("demo6").innerHTML = first;

var fruit = ["mango", "apple","banana", "starfruit"];
var last = fruit[fruit.length-1];
document.getElementById("demo7").innerHTML = last;

var fruit, text, fLen, i;
fruit = ["banana", "orange", "apple", "mango"];
fLen = fruit.length;

text = "<ul>";
for(i = 0; i < fLen; i++){
    text+="<li>" + fruit[i] +"</li>"
}
text+="";
document.getElementById("demo8").innerHTML = text;
var fruit, text;

fruit = ["banana", "orange", "apple", "mango"];
text = "<ul>";
fruit.forEach(myFunction);
text +="</ul>";
document.getElementById("demo9").innerHTML = text;
function myFunction(value){
    text+= "<li>"+ value + "</li>"
}

var fruits = ["banana", "orange", "apple", "mango"]
document.getElementById("demo10").innerHTML = fruit;

function myFunction(){
    fruit.push("lemon");
    document.getElementById("demo10").innerHTML = fruit;
}

var fruit = ["banana", "orange", "orange", "mango"]
document.getElementById("demo11").innerHTML = fruit;

function myFunction1(){
    fruit[fruit.length]= "lemons";
    document.getElementById("demo11").innerHTML =fruit  ;
}

var fruit, text, fLen, i;
fruit =["banana", "orange","apple","lemon"]
fruit[6]="mango";

fLen = fruit.length;
text ="";
for (i=0; i<fLen; i++){
    text += fruit[i] + "<br>";
}
document.getElementById("demo12").innerHTML = text;

var person = [];
person[0]="john";
person[1]="doe";
person[2]= 15;
document.getElementById("demo12").innerHTML =
person[0]+" "+person.length

var person = [];
person ["firstName"]="john";
person["lastName"]="doe"
person["age"]=18;
document.getElementById("demo13").innerHTML = person[0] + " "+ person.length;

var point = [15,235,523,43,63,634,643]
document.getElementById("demo14").innerHTML = point[0];

// var point = new Array (0)
// document.getElementById("15").innerHTML = point [0];

var fruit = ["banana","apple","mango","lemon"];
document.getElementById("demo16").innerHTML =typeof fruit;

var fruit = ["banana","apple", "mango", "lemon"]
document.getElementById("demo17").innerHTML = Array.isArray(fruit);

var fruit = ["banana", "apple", "mango", "lemon"];
document.getElementById("demo18").innerHTML = isArray(fruit);

function isArray(myArray){
    return myArray.constructor.toString().indexOf("Array")> -1;
}

var fruit =["banana","lemon","apple", "mango"];
document.getElementById("demo19").innerHTML =fruit instanceof Array;