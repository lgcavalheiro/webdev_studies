console.log(typeof Array, typeof new Array, typeof []);

let approved = new Array('Mitchel', 'Carl', 'Ana');
console.log(approved);

approved = ['mitchel', 'carl', 'ana'];
console.log(approved);
console.log(approved[0]);
console.log(approved[3]);

approved[3] = 'Saul';
approved.push('Abel');
console.log(approved.length);

approved[9] = 'Yukiko';
console.log(approved.length);

console.log(approved);

approved.sort();
console.log(approved);

delete approved[1];
console.log(approved);

approved = ['Belle', 'Marcus', 'Arnold'];
approved.splice(0, 1, 'Mitchel', 'Adrian', 'Daniel');
console.log(approved);