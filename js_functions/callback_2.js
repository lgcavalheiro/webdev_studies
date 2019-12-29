const grades = [5.6, 7.8, 4.5, 8.9, 9.1];

//No callback

let lowerGrades = []
for (let i in grades) {
    if (grades[i] < 7) lowerGrades.push(grades[i]);
}

console.log(lowerGrades);

//With callback

lowerGrades = grades.filter(function(grade) {
    return grade < 7;
})

console.log(lowerGrades);

lowerGrades = grades.filter(grade => grade < 7);
console.log(lowerGrades);