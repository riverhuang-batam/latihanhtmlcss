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

var person= students.filter(student => student.grade >50)

console.log(person)//filter

var person1= students.map(student => {

    student.gender = 'male';
    return student
})
console.log(person1)//map

students.forEach(student => {
    const message = `hi i'm ${student.name}, i'm in ${student.grade} grade` ;
    console.log(message)    
});
function myFunction(){
    students.sort(function(a,b){return b.grade-a.grade})
} //sort highest
console.log(students.sort(myFunction));

function myFunction1(){
    students.sort(function(a,b){return a.name-b.name})
}

console.log(students.sort(myFunction1));//sort name

students.push({name:"julie", grade:70, gender:"female"})
console.log(students)


    function myFunction3(items){
        const result = items.filter(item => item.grade<60) 
        return result;
    }
console.log(myFunction3(students))