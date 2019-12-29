function area(x, y) {
    const area = x * y;
    if (area > 20) {
        console.log(`Value above permitted ${area}m2`);
    } else {
        return area;
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,14,5))
console.log(area(5,5))