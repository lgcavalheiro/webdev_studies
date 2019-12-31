//literal notation
const obj1 = {}
console.log(obj1)

//object js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

const obj3 = new Product('Chair', 299);
console.log(obj3);

//factory function
function createEmployee(name, wage) {
    return {
        name,
        wage
    }
}

const obj4 = createEmployee('John Doe', 2500);
console.log(obj4)

//Object.create
const obj5 = Object.create(null);
obj5.name = 'Mick'
console.log(obj5)

//JSON.parse()
const fromJSON = JSON.parse('{"info": "JSON FORMAT"}');
console.log(fromJSON.info)