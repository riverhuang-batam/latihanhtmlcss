var text ="abcdefghijklmnopqrstuvwxyz"
document.getElementById("demo").innerHTML = text.length;

var str = "please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
document.getElementById("demo2").innerHTML= pos;

var str = "please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");
document.getElementById("demo3").innerHTML=pos;

var str = "please locate where 'locate' occurs!"
var pos = str.lastIndexOf("john");
document.getElementById("demo4").innerHTML= pos;

var str = "please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate", 15);
document.getElementById("demo5").innerHTML=pos;

var str = "please locate where 'locate' occurs!";
var pos = str.search("locate");
document.getElementById("demo6").innerHTML=pos;

var str = "apple, banana, kiwi";
var pos = str.slice(7,13);
document.getElementById("demo7").innerHTML = pos;

var str = "apple, banana, kiwi";
var res = str.slice(-12,-6);
document.getElementById("demo8").innerHTML = res;

var str = "apple, banana, kiwi";
var res = str.slice(7);
document.getElementById("demo9").innerHTML = res;

var str = "apple, banana, kiwi";
var res = str.slice(-12);
document.getElementById("demo10").innerHTML = res;

var str = "apple, banana, kiwi";
var res = str.substring(7, 13);
document.getElementById("demo11").innerHTML = res;

var str = "apple, banana, kiwi";
var res = str.substr(7, 6);
document.getElementById("demo12").innerHTML = res;

var str = "apple, banana, kiwi";
var res = str.substr(7);
document.getElementById("demo13").innerHTML = res;

var str = "apple, banana, kiwi";
var res = str.substr(-4);
document.getElementById("demo14").innerHTML = res;

function myFunction() {
    var str = document.getElementById("demo15").innerHTML;
    var txt = str.replace("Microsoft","W3schools");
    document.getElementById("demo15").innerHTML = txt;
}

function myFunction1(){
    var str = document.getElementById("demo16").innerHTML;
    var txt = str.replace("Microsoft","w3school");
    document.getElementById("demo16").innerHTML=txt;
}
function myFunction2(){
    var str = document.getElementById("demo17").innerHTML;
    var txt = str.replace(/MICROSOFT/i,"W3schools");
    document.getElementById("demo17").innerHTML= txt;
}

function myFunction3(){
    var str = document.getElementById("demo18").innerHTML;
    var txt = str.replace(/Microsoft/g,"w3schools");
    document.getElementById("demo18").innerHTML= txt;
}

function myFunction4(){
    var text = document.getElementById("demo19").innerHTML;
    document.getElementById("demo19").innerHTML =text.toUpperCase();
}

function myFunction5(){
    var text = document.getElementById("demo20").innerHTML;
    document.getElementById("demo20").innerHTML = text.toLowerCase();
}

var text1 = "hello"
var text2 = "world"
var text3 = text1.concat(" ",text2)
document.getElementById("demo21").innerHTML = text3

// function myFunction6(){
//     var str = " hello world! ";
//     alert(str.trim());
    
// }

// var str = " hello world ";
// alert(str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''));

// if (!String.prototype.trim){
//     String.prototype.trim = function (){
//         return this. replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
//     };
// };
// var str = " hello world ";
// alert(str.trim());


var str ="hello world";
document.getElementById("demo21").innerHTML = str.charAt(0);

var str ="HELLO WORLD"; 
document.getElementById("demo22").innerHTML = str.charCodeAt(0)
var str ="hello world";
document.getElementById("demo23").innerHTML = str[0];

function myFunction7(){
    var str = "a,b,c,d,e,f"
    var arr = str.split(",");
    document.getElementById("demo24").innerHTML=arr[0]
}

var str = "hello"
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++){
    text += arr [i]+ "<br>"
}
document.getElementById("demo25").innerHTML = text;
