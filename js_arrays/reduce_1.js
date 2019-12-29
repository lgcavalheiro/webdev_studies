let students = [
    {name: "Paul", grade: 8.7, scholarship: false},
    {name: "Nathan", grade: 7.2, scholarship: true},
    {name: "Pamela", grade: 6.1, scholarship: true},
    {name: "Stanley", grade: 8.15, scholarship: false}
];

const result = students.map(a => a.grade)
                       .reduce(function(acc, current) {
                            console.log(acc, current);
                            return acc + current;
                        });

console.log((result/students.length).toFixed(2));
