const result = grade => grade >= 7 ? 'Pass' : 'Not Pass';

console.log(result(7.1));
console.log(result(6.5));

let a = 3;
global.b = 4;
this.c = 345;
this.d = true;
this.e = 'text';
console.log(this.a);
console.log(global.a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

abc = 123; //don't do this...
console.log(global.abc);