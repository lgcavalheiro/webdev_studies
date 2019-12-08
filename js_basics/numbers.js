const weight1 = 1.0;
const weight2 = Number('2.1');

console.log(weight1, weight2);
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const av1 = 9.831;
const av2 = 6.787;

const total = av1 * weight1 + av2 * weight2;
const media = total / (weight2 + weight1);

console.log(media.toFixed(2));
console.log(media)
console.log(media.toString())
console.log(media.toString(2)) //to binary
console.log(typeof Number)

//-------------------weird things with numbers-------

console.log(4/0.01)
console.log(4/0)

console.log("10"/2)
console.log("10,4"/5)

console.log(0.1 + 0.7)

console.log((10.345).toFixed(2))
console.log((0.1 + 0.7).toFixed(1))