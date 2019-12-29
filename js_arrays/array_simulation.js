const almostArray = { 0: 'Ralph', 1: 'Ana', 2: 'Mia'};
console.log(almostArray);

Object.defineProperty(almostArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

console.log(almostArray[0]);

const myArray = ['Rudolf', 'Ana', 'Mick'];
console.log(almostArray.toString(), myArray);