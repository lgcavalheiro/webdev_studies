const value = 'Global';

function myFunc() {
    console.log(value)
}

myFunc()

function exec() {
    const value = 'Local';
    myFunc()
}

exec()