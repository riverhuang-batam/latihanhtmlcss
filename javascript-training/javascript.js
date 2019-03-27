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