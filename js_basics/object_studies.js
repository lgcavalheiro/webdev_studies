const prod1 = {};

prod1.name = 'Master Phone';
prod1.price = 499.99;
prod1['Discount'] = 1.99;
prod1.showData = () => {
    for (let prop in prod1) {
        if (Object.prototype.hasOwnProperty.call(prod1, prop)
            && typeof prod1[prop] != 'function') {
            console.log(prop, " : ", prod1[prop]);
        }   
    }
}

const prod2 = {
    name : 'Polo Shirt',
    price : 79.99,
    discount : 2.56,
    showData : () => {
        for (let prop in prod2) {
        if (Object.prototype.hasOwnProperty.call(prod2, prop)
            && typeof prod2[prop] != 'function') {
            console.log(prop, " : ", prod2[prop]);
        }   
    }
    }
}

prod1.showData()
prod2.showData()