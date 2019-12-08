const values = [7.7, 9.8, 4.5, 4.1];

console.log(values[0], values[3])

console.log(values.length)

values.push(44, false, null, 'test', {id: 3})

console.log(values)

console.log(values.pop())
delete values[0]
console.log(values)

console.log(typeof values)