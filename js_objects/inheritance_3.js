const father = { name: 'Peter', hairColor: 'Black'}
const son1 = Object.create(father);
son1.name = 'Derek'
console.log(son1.hairColor)

const son2 = Object.create(father, {
    name: { value: 'Jason', writable: false, enumerable: true}
})

console.log(son2.name)
son2.name = 'Ana'
console.log(son2.name)

console.log(Object.keys(son1))
console.log(Object.keys(son2))

for (let key in son2) {
    son2.hasOwnProperty(key) ?
        console.log(key) : console.log('Inheritance: ', key)
}