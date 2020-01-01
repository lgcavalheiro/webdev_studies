const ferrari = {
    model: 'F10',
    maxVel: 340
}

const volvo = {
    model: 'V40',
    maxVel: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function myObj() {}

console.log(typeof Object, typeof myObj)
console.log(Object.prototype, myObj.prototype)