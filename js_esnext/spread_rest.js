//spread with object

const employee = { name: 'Joe', wage: '2000.00'};
const clone = { active: true, ...employee };
console.log(employee, clone);

//spread with array

const groupA = ['John', 'Mitch', 'Derrick'];
const finalGroup = ['Jack', 'Daniel', ...groupA];
console.log(finalGroup);