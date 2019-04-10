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

console.log(person)

var person1= students.map(students=> students +"gender:male")
console.log(person1)

var person3 = "";
students.forEach(element => {
    person3 = person3 + element + students[0].grade ;
    
});
console.log(person3)
function myFunction(){
    students.sort(function(a,b){return a.grade-b.grade})
}

console.log(students.sort(myFunction));
function myFunction(){
    students.sort()
}

console.log(students.sort(myFunction));