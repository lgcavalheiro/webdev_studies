function getPrice(tax = 0, currency = 'USD') {
    return `${currency} ${this.price * (1 - this.disc) * (1 - tax)}`
}

const product = {
    name: 'Notebook',
    price: 4500,
    disc: 0.15,
    getPrice
}

global.price = 28
global.disc = 0.1

console.log(getPrice())
console.log(product.getPrice(0.1, 'YEN'))

const car = {
    price: 28000,
    disc: 0.28
}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.6, 'WAN'))
console.log(getPrice.apply(car,[0.34, 'EURO']))