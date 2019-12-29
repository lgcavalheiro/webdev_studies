let students = [
    {name: "Paul", grade: 8.7, scholarship: false},
    {name: "Nathan", grade: 7.2, scholarship: false},
    {name: "Pamela", grade: 6.1, scholarship: false},
    {name: "Stanley", grade: 8.15, scholarship: true}
];

// Imperative
let total = 0;
for (let i = 0; i < students.length; i++) total += students[i].grade;
console.log((total/students.length).toFixed(2));

//Declarative
const getGrade = student => student.grade;
const sum = (total, curr) => total + curr;
const total2 = students.map(getGrade).reduce(sum);
console.log((total2/students.length).toFixed(2));