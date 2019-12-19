// ES2015
const person = {
    name: 'Josie',
    age: 8,
    address: {
        name: 'Alabama Str.',
        number: 232
    }
}

const { name, age } = person;
console.log(name, age);

const { name: n, age: a} = person;
console.log(a, n);

const { surname, mood: m = 'neutral' } = person;
console.log(surname, m);

const { address: { name: a_name, number } } = person;
console.log(a_name, number);