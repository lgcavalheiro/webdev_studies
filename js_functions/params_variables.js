function sum() {
    let sum = 0;
    for (i in arguments) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3,4,5,6))
console.log(sum(1))
console.log(sum(2.3,4,5.6).toFixed(2))
console.log(sum(3,5.3,'test'))