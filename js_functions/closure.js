const x = 'Global';

function out() {
    const x = 'Local';
    function inside() {
        return x;
    }
    return inside
}

const myFunc = out();
console.log(myFunc())