const school = [{
    name: 'Class M1',
    students: [{
        name: 'Gustav',
        grade: 6.7
    },{
        name: 'Alice',
        grade: 5.6
    }]
},{
    name: 'Class M2',
    students: [{
        name: 'Dalton',
        grade: 9
    },{
        name: 'Willow',
        grade: 8.6
    },{
        name: 'Jeremy',
        grade: 7.1
    }]
}]

const getStudentGrade = a => a.grade;
const getClassGrade = c => c.students.map(getStudentGrade);

const grades1 = school.map(getClassGrade);
console.log(grades1);

console.log([].concat([ 6.7, 5.6 ], [ 9, 8.6, 7.1 ]));

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const grades2 = school.flatMap(getClassGrade);
console.log(grades2);