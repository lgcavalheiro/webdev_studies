function tag(parts, ...values) {
    console.log(parts);
    console.log(values);
    return 'another string'
}

const student = 'John';
const approval = 'Aproved';
console.log(tag `${student} is ${approval}`);