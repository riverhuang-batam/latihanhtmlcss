var student=[{
    id:1,
    name:'vudi',
    grade: 90
},{
    id:2,
    name:'budi',
    grade:75
},{
    id:3,
    name:'gorde',
    grade:34
},{
    id:4, 
    name:'vly',
    grade:45
}];

// answer no 1
let Grade = student.filter(student => student.grade<55);
console.log('grade > 50 are:',Grade );

// answer no 2
   const result = student.map( student => {
        student.gender = 'male';
        // console.log(student)
        return student
   });
   console.log(result)