const [a] = [10];
console.log(a);

const [n1, , n3, ,n5, n6 = 0] = [10, 7, 9, 8];
console.log(n1, n3, n5, n6);

const [, [, note]] = [[, 1, 2], [5, 6, 7]];
console.log(note);