const students = [{
    id: 1,
    name: 'Budi',
    grade: 90
},{
    id: 2,
    name: 'Gorge',
    grade: 74
}, {
    id: 3,
    name: 'Shiva',
    grade: 24
}, {
    id: 4,
    name: 'James',
    grade: 50
}]

var person= students.filter(students =>students.grade >50)

console.log(person)//filter

var person1= students.map(students=> students +"gender:male")
console.log(person1)//map

// var person3 = "";
// students.forEach(element => {
//     person3 = person3 + element + students.grade ;
    
// });
// console.log(person3)


function myFunction(){
    students.sort(function(a,b){return b.grade-a.grade})
} //sort highest
console.log(students.sort(myFunction));

function myFunction1(){
    students.sort(function(a,b){return a.name-b.name})
}

console.log(students.sort(myFunction1));//sort name

function myFunction2(){
    students.push({name:"julie", grade:70, gender:"female"})
}
console.log(students.push(myFunction2))


//     function myFunction3(){
//         students.pop(students=> students.grade<60)
//     }
// console.log(students.pop(myFunction3))