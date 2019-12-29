let list = [
    {name: "Phone", price: 893.45, fragile: true},
    {name: "Notebook", price: 1229.35, fragile: true},
    {name: "Pencil Case", price: 6.50, fragile: true},
    {name: "Stapler", price: 8.15, fragile: false}
];

console.log(list.filter(function(p) {
    return p.price <= 900
}));

// const isExpensive = el => el.price >= 500;
// const isFragile = el => el.fragile;
// const isCheap = el => el.price <= 499;

const filters = {
    isExpensive: el => el.price >= 500,
    isFragile: el => el.fragile,
    isCheap: el => el.price <= 499,
    byPrice: (el, price) => el.price >= price
}

let filtersUsed = ['byPrice', 'isFragile'];

filtersUsed.forEach(filterName => {
    list = list.filter(el => filters[filterName](el, 9));
});

// console.log(list.filter(filters['isExpensive'])
//                 .filter(filters['isFragile']));

console.log(list);