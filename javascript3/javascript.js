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

var fruit = ["banana", "mango", "orange", "apple"]

document.getElementById("demo20").innerHTML = fruit;
function myFunction2(){
fruit.sort();
document.getElementById("demo20").innerHTML = fruit
}

var fruit = ["banana", "mango", "orange", "apple"];
document.getElementById("demo21").innerHTML = fruit;
function myFunction3(){
    fruit.sort();
    fruit.reverse()
    document.getElementById("demo21").innerHTML = fruit;
}

var points =[423,324,35,35,332];
document.getElementById("demo22").innerHTML = points;
function myFunction4(){
    points.sort(function(a,b){return a-b});
    document.getElementById("demo22").innerHTML = points;

}

var points = [21,34,465,64,36];
document.getElementById("demo23").innerHTML = points
function myFunction5(){
    points.sort(function(a,b){return b-a})
    document.getElementById("demo23").innerHTML = point;
}

var points1 = [40,100,1,5,25,10];
document.getElementById("demo24").innerHTML = points1;

function myFunction6(){
    points1.sort();
    document.getElementById("demo24").innerHTML = points1;
}
function myFunction7(){
    points1.sort(function(a,b){return a-b})
    document.getElementById("demo24").innerHTML = points1;
}

var points= [12,32,54,45,36,67]
document.getElementById("demo25").innerHTML = points;

function myFunction8(){
    points.sort(function(a,b){return 0.5 - Math.random()})
    document.getElementById("demo25").innerHTML = points;
}

var poin = [32,43,5,1,15,3];
poin.sort(function(a,b){return a-b})
document.getElementById("demo26").innerHTML = poin[0];

var poin1 = [ 123,234,343,25,235,1];
poin1.sort(function(a,b){return b-a})
document.getElementById("demo27").innerHTML = poin1[0]

var point2 = [2,3,53,5,356,6432];
document.getElementById("demo28").innerHTML = myArrayMax(point2);

function myArrayMax(arr){
    return Math.max.apply(null, arr);
}

var point3 = [43,324,43543,5432];
document.getElementById("demo29").innerHTML = myArrayMin(point3);

function myArrayMin(arr){
    return Math.min.apply(null,arr);
}

var car = [
    {type:"Volvo", year:"2016"},
    {type:"saab", year:"2001"},
    {type:"BMW", year:"2010"}
];

displaysCars();
function myFunction9(){
    car.sort(function (a,b){return a.year-b.year});
    displaysCars();
}
function displaysCars(){
    document.getElementById("demo30").innerHTML =
    car[0].type + " " + car[0].year +"<br>"+
    car[1].type + " " + car[1].year +"<br>"+
    car[2].type + " " + car[2].year +"<br>";
}

var cars = [
    {type:"Volvo", year:"2016"},
    {type:"Saab", year:"2001"},
    {type:"BMW", year:"2010"}
];
function myFunction10(){
    cars.sort(function(a,b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if ( x<y){return -1;}
        if (x>y){return 1;}
        return 0;
    });
    displaysCars();
}
function displaysCars(){
    document.getElementById("demo31").innerHTML =
    cars[0].type + " " + cars[0].year + "<br>"+
    cars[1].type + " " + cars[1].year + "<br>"+
    cars[2].type + " " + cars[2].year;
}

var text = "";
var numbers = [32,343,5,3,234,];
numbers.forEach(myFunction11);
document.getElementById("demo32").innerHTML = text;

function myFunction11(value,index,array){
    text= text+value+"<br>";
}

var text1 = "";
var numbers =[23,355,46,64,654];
numbers.forEach(myFunction12);
document.getElementById("demo33").innerHTML = text1;

function myFunction12(value){
    text1 = text1 + value +"<br>"
}

var numbers1 = [23,53,45,64,2,54];
var numbers2 = numbers1.map(myFunction13);
document.getElementById("demo34").innerHTML = numbers2;

function myFunction13(value,index,array){
    return value *2;
}
var numbers3 = [23,43,4,54,6,46];
var numbers4 = numbers.map(myFunction13)
document.getElementById("demo35").innerHTML = numbers4;
function myFunction13(value){
    return value *2
}

var numbers5 = [234,54,35,646,];

var over50 = numbers5.filter(myFunction14)
document.getElementById("demo36").innerHTML = over50;
function myFunction14(value,index,array){
    return value >50
}
var numbers6 = [324,545,6,64,6,64];
var over30 = numbers6.filter(myFunction15)
document.getElementById("demo37").innerHTML = over30;
function myFunction15(value){
    return value>30;
}
var numbers7 = [32,35,3,64,64];
var sum= numbers7.reduce(myFunction16);
document.getElementById("demo38").innerHTML ="the sum is"+sum;
function myFunction16(total,value,index,array){
    return total + value;
}
var numbers8 = [324,35,3,64,45];
var sum1 = numbers8.reduce(myFunction17);
document.getElementById("demo39").innerHTML = "the sum is" + sum;
function myFunction17(total, value){
    return total + value;
}
var numbers9 = [23,53,54,6,46];
var sum2 = numbers9.reduceRight(myFunction18);
document.getElementById("demo40").innerHTML = "the sum is" +sum;
function myFunction18(total, value){
    return total + value;
}
var numbers10 = [234,53,35,423,64,43];
var first = numbers10.find(myFunction19);
document.getElementById("demo41").innerHTML ="first number over 18 is"+first;
function myFunction19(value,index,array){
    return value>18
}