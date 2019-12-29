const brands = ['Mercedes', 'BMW', 'Ford'];

function print(name, index) {
    console.log(`${index+1} - ${name}`);
}

brands.forEach(print);
brands.forEach(function(a) {
    console.log(a)
})