function createProduct(name, price) {
    return {
        name,
        price
    }
}

console.log(createProduct('Book', 4.99))
console.log(createProduct('Backpack', 18.49))