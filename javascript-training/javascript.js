function sayhello(){
    document.write("hello there");
    
}
function sayhello1(name,age){
    document.write(name+ " is " + age +" years old ");
}
function concatenate(first,last){
    var full;
    full= first + last;
    return full;
}
function secondfunction(){
    var result;
    result = concatenate('zara',' ali');
    document.write(result);
}

function sayhello2(){
    alert("sayhello")
}

function validate(e){
    // all validation goes here
    // .....................
    // return either true or false
    alert('validate')
}

function over(){
    document.write("mouse over")
}
function out(){
    document.write("mouse out")
}
var alpha = ["a", "b" ,"c"];
var numeric = [1,2,3];
var alphanumeric = alpha.concat(numeric);
document.write("alphanumeric:"+alphanumeric);

var arr = new Array("first","second","third");
var str = arr.join();
document.write('str'+ str);
var str = arr.join(" ");
document.write("<br/> str:"+ str)
var str = arr.join("+")
document.write("<br/> str"+ str)



    if (!Array.prototype.filter){
        Array.prototype.filter= function(fun/*, this*/){
            var len= this.length;
            if (typeof fun != "function")
            throw new TypeError();
            var res = newArray();
            var thisp = arguments[1];
            for ( i=0;i< len; i++){
                if (i in this){
                    var val= this[i]; //in case fun mutates this
                if (fun.call(thisp, val, i, this))
                res.push(val)
                
                }
            }
            return res;
        };
    }
    function isBigEnough(element,index,array){
        return(element>=10)
    }
    var filtered =  [12,5,8,130,44].filter(isBigEnough);
    document.write("Filtered Value:" +filtered);


if(!Array.prototype.map){
    Array.prototype.map = function (fun/*, thisp */){
        var len = this.length;
        if (typeof fun != "function")
        throw new TypeError();
        var res = new Array(len);
        var thisp= arguments[1];
        for(var i = 0; i <len; i++){
            if(i in this)
            res[i] = fun.call(thisp, this[i], i, this);
        }
        return res;
    };
}
var numbers = [1,4,9];
var roots= numbers.map(Math.sqrt);
document.write("root is:"+ roots);


var numbers= new Array(1,4,9);
var length = numbers.push(10);
document.write("<br/> new number is:" + numbers);

var numbers=[1,4,9];
var element = numbers.pop();
document.write("element is"+ element);
var element= numbers.pop()
document.write("<br/> element is:"+ element);

var arr = new Array("mangga","apel","banana", "gori");
var sorted = arr.sort();
document.write("<br/> the sort is"+ sorted);

var arr = [1,2,3].reverse();
document.write("<br/> reversed array is"+arr);
var arr = ["banana","mango","sugar","tea","milk"]
document.write("<br/> the first slice is"+ arr.slice(1,2));
document.write("<br/> the second slice is"+ arr.slice(1,5));

function Warn(){
    alert("this is a warning message!")
    document.write("this is a warning message!")
}

function getConfirmation(){
    var retVal= confirm("do you want to continue?");
    if (retVal== true){
        document.write("user wants to continue!");
        return true;
    } else{
        document.write("users does not want to continue!");
        return false;
    }
}

function getValue(){
    var retVal = prompt("enter your name:","your name here");
    document.write("you have entered:"+retVal);
}
function myFunction (p1,p2){
    return p1*p2;
}
document.getElementById("demo").innerHTML = myFunction(4, 3);


var x = myFunction(4,5);
    document.getElementById("demo2").innerHTML = x;
    function myFunction(a,b){
        return a*b;
    }
function toCelcius(f){
    return (5/9) * (f-32);
}
document.getElementById("demo3").innerHTML=toCelcius(77);

var x = toCelcius(77);
var text = "The temparature is "+ x+ "Celcius";
var text = "the temperature is"+ toCelcius(77)+"Celcius";

function myFunction(){
     var carName ="Volvo";
     document.getElementById("demo1").innerHTML =
     typeof carName + " " +carName;
}
var car= "fiat";
document.getElementById("demo4").innerHTML = car;

var car={type:"Fiat",model:"500", color:"white"}
document.getElementById("demo5").innerHTML = "the car type is" +  car.type;

var person={
    firstname:"river",
    lastname:"huang",
    age: 18,
    eyecolor:"black"
};
document.getElementById("demo8").innerHTML = person.firstname+ "years old.";
var person={
    firstname:"river",
    lastname: "huang",
    age:18,
    eyecolor:"black"
}
document.getElementById("demo9").innerHTML = person.firstname+ " " + person.lastname;
var person = {
    firstname:"river",
    lastname:"huang",
    age:18,
    eyecolor:"black"
}
document.getElementById("demo2").innerHTML = person.firstname+ " " + person["lastname"];

var person ={
    firstname:"river",
    lastname:"huang",
    age: 18,
    eyecolor: "black",
    id: 1831097,
    fullname: function(){
        return this.firstname+ " "+ this.lastname
    }
};
document.getElementById("demo6").innerHTML = person.fullname();
document.getElementById("demo7").innerHTML = person.fullname;
function displayDate(){
    document.getElementById("demo10").innerHTML = Date();
}