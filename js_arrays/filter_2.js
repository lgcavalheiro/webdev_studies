Array.prototype.filter2 = function(callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) newArray.push(this[i]);
    }
    return newArray;
}

let list = [
    {name: "Phone", price: 893.45, fragile: true},
    {name: "Notebook", price: 1229.35, fragile: true},
    {name: "Pencil Case", price: 6.50, fragile: true},
    {name: "Stapler", price: 8.15, fragile: false}
];

const filters = {
    isExpensive: el => el.price >= 500,
    isFragile: el => el.fragile,
    isCheap: el => el.price <= 499,
    byPrice: (el, price) => el.price >= price
}

let filtersUsed = ['byPrice', 'isFragile'];

filtersUsed.forEach(filterName => {
    list = list.filter2(el => filters[filterName](el, 9));
});

console.log(list);