function moneyParse(parts, ...values) {
    const result = [];
    values.forEach((value, index) => {
        value = isNaN(value) ? value : `$${value.toFixed(2)}`
        result.push(parts[index], value);
    })
    return result.join('');
}

const price = 29.99
const payment = 11
console.log(moneyParse `1 payment of ${price} or 3 EASY payments of ${payment}!!`);
