const teams = new Set();
teams.add('Blue Devils')
teams.add('Lakers').add('Tar Heels')

console.log(teams)
console.log(teams.size)
console.log(teams.has('blue devils'))
console.log(teams.has('Blue Devils'))
console.log(teams.delete('Tar Heels'))
console.log(teams.has('Tar Heels'))

const names = ['John', 'Jack', 'Mitch', 'John']
const newNames = new Set(names)
console.log(newNames)