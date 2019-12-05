// async await usage
const http = require('http')

const getClass = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject ) => {
        http.get(url, res => {
            let result = ''
            
            res.on('data', data => {
                result += data
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let getStudents = async () => {
    const ca = await getClass('A')
    const cb = await getClass('B')
    const cc = await getClass('C')
    return [].concat(ca, cb, cc)
} // return obj async function

getStudents()
    .then(students => students.map(a => a.nome))
    .then(names => console.log(names))