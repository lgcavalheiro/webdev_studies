const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios');

axios.get(url).then(response => {
    const employees = response.data;

    let filt = employees.filter(emp => {
        if (emp.genero === 'F' && emp.pais === 'China') return true;
    });

    let filtFinal = filt.sort((a, b) => { return b.salario - a.salario});

    console.log(filtFinal.pop());
});

