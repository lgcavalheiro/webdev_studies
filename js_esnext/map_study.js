const techs = new Map();
techs.set('react', { framework: false});
techs.set('angular', { framework: true});

console.log(techs.get('react'));
console.log(techs.get('react').framework);

const variedKeys = new Map([
    [function () {}, 'Function'],
    [{}, 'Object'],
    [123, 'Number']
])

variedKeys.forEach((val, key) => {
    console.log(key, val)
})

console.log(variedKeys.has(123));
console.log(variedKeys.delete(123));
console.log(variedKeys.has(123));
console.log(variedKeys.size);

variedKeys.set(123, 'a')
variedKeys.set(123, 'b')
console.log(variedKeys) //NO REPETITIONS!