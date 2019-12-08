const name = 'Joe'
const concatenation = 'Hi' + name + '!'
const template = `
    Hello
    ${name}!`

console.log(concatenation, template)

// expressions...

console.log(`1 + 1 - ${1 + 1}`)

const up = s => s.toUpperCase();

console.log(`Hey... ${up('be careful!')}`)
console.log(`Hey... ${'be really careful!'.toUpperCase()}`)