const product1 = {
    name: 'Notebook',
    price: 499.99
}

//factory function = returns an object
function createPerson() {
    return {
        name: 'John',
        surname: 'Smith'
    }
}

console.log(createPerson())