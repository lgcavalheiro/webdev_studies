Array.prototype.map2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const cart = [
    '{"name": "Eraser", "Price": 3.45}',
    '{"name": "Notebook", "Price": 1.35}',
    '{"name": "Pencil Case", "Price": 6.50}',
    '{"name": "Stapler", "Price": 8.15}'
];

//const toJSON = el => JSON.parse(el);
//const getPrice = el => el.Price;

let result = cart.map2(el => JSON.parse(el))
                 .map2(el => el.Price);

console.log(result);