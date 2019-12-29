function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min];
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(rand([50, 40]));
console.log(rand([993]));
console.log(rand([ , 15]));
console.log(rand([]));