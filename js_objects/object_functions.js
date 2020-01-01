const person = {
    name: 'Vincent',
    age: 3,
    weight: 14
}

console.log(Object.keys(person));
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(([k, v]) => {
    console.log(`${k} -- ${v}`)
});

Object.defineProperty(person, 'dateOfBirth', {
    enumerable: true,
    writable: false,
    value: '02/07/1999'
})

console.log(Object.entries(person))

const dest = { a: 1}
const o1 = { b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2);

console.log(obj, dest)

Object.freeze(obj)
obj.c = 1234
console.log(obj)