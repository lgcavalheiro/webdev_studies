Array.prototype.reduce2 = function(callback) {
    let acc = this[0];
    for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
};

let students = [
    {name: "Paul", grade: 8.7, scholarship: false},
    {name: "Nathan", grade: 7.2, scholarship: false},
    {name: "Pamela", grade: 6.1, scholarship: false},
    {name: "Stanley", grade: 8.15, scholarship: true}
];

let result = students.map(a => a.scholarship)
            .reduce2(function(acc, current) {
                return acc && current;
            });

console.log("Challenge 1 - All have scholarships? :", result);

result = students.map(a => a.scholarship)
            .reduce2(function(acc, current) {
                return acc || current;
            });

console.log("Challenge 2 - At least one has scholarship? :", result);