const product = new Object
product.name = 'Chair'
product['brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['brand']

console.log(product)

const car = {
    model: 'A4',
    price: 89000,
    owner: {
        name: 'Paul',
        age: 56,
        address: {
            name: 'Elm Str.',
            number: 233
        }
    },
    drivers: [
        {
            name: 'Jenny',
            age: 23
        },
        {
            name: 'Dorothy',
            age: 59
        }
    ]
}

car.owner.address.number = 455;
console.log(car)