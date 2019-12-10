console.log(typeof Object);

class Produto {};
console.log(typeof Produto);
//---------------------------------------

function printSum(a, b) {
    console.log(a + b);
};

printSum(2, 3);
printSum(3);

function sum(a, b = 0) {
    return a + b;
}

console.log(sum(3, 4));
console.log(sum(2));

//----------------

const printSumV = function (a, b){
    console.log(a+b);
};

printSumV(2, 4);

const sumA = (a, b) => {
    return a + b;
};

console.log(sumA(4,5));

const subtract = (a, b) => a - b;

console.log(subtract(6,9));

const print2 = a => console.log(a)

print2('Cool brah!');