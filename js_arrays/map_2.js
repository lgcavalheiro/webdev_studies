const cart = [
    '{"name": "Eraser", "Price": 3.45}',
    '{"name": "Notebook", "Price": 1.35}',
    '{"name": "Pencil Case", "Price": 6.50}',
    '{"name": "Stapler", "Price": 8.15}'
];

//const toJSON = el => JSON.parse(el);
//const getPrice = el => el.Price;

let result = cart.map(el => JSON.parse(el))
                 .map(el => el.Price);

console.log(result);