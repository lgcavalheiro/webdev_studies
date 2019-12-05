// no promise usage
const http = require('http')

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = ''
        
        res.on('data', data => {
            result += data
        })

        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = [];

getClass('A', students => {
    names = names.concat(students.map(a => `A: ${a.nome}`))

    getClass('B', students => {
        names = names.concat(students.map(b => `B: ${b.nome}`))
        
        getClass('C', students => {
            names = names.concat(students.map(c => `C: ${c.nome}`))
            console.log(names)
        })
    })
})
