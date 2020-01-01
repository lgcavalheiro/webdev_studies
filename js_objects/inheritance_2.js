Object.prototype.at0 = 'Z' //don't do this IRL
const obj1 = { at1: 'A' }
const obj2 = { __proto__: obj1, at2: 'B'}
const obj3 = { __proto__: obj2, at3: 'C'}

console.log(obj3.at1)
console.log(obj3.at0)
console.log(obj3.at01)

const car = {
    currVel: 0,
    maxVel: 200,
    accelerate(delta) {
        if( this.currVel + delta <= this.maxVel) {
            this.currVel += delta
        } else {
            this.currVel = this.maxVel
        }
    },
    status() {
        return `${this.currVel} out of ${this.maxVel}`
    }
}

const ferrari = {
    model: 'F10',
    maxVel: 324
}

const volvo = {
    model: 'A40',
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car);
Object.setPrototypeOf(volvo, car);

console.log(ferrari)
console.log(volvo, volvo.maxVel)

volvo.accelerate(100)
console.log(volvo.status())

ferrari.accelerate(310)
console.log(ferrari.status())
