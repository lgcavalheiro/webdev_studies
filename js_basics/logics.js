function buy (work1, work2) {
    const buyIceCream = work1 || work2;
    const buyTV = work1 && work2;
    //const buyRadio = !!(work1 ^ work2); //bit by bit xor (bitwise xor)
    const buyRadio = work1 != work2;
    const keepHealthy = !buyIceCream;

    return { buyIceCream, buyTV, buyRadio, keepHealthy };
}

console.log(buy(true, true));
console.log(buy(true, false));
console.log(buy(false, true));
console.log(buy(false, false));