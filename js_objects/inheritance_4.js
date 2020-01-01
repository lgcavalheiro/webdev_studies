function myObj() {}
console.log(myObj.prototype)

const obj1 = new myObj
const obj2 = new myObj

console.log(obj1.__proto__ === obj2.__proto__)
console.log(myObj.prototype === obj1.__proto__)

myObj.prototype.name = 'Anon'
myObj.prototype.speak = function () {
    console.log('I am', this.name)
}

obj1.speak()
obj2.name = 'Ralph'
obj2.speak()

const obj3 = {}
obj3.__proto__ = myObj.prototype
obj3.name = 'Dave'
obj3.speak()