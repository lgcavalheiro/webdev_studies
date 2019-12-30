function Car(maxSpeed = 200, delta = 5) {
    //private attribute
    let currentSpeed = 0;

    //public method
    this.accelerate = function() {
        if (currentSpeed + delta <= maxSpeed) {
            currentSpeed += delta
        } else {
            currentSpeed = maxSpeed
        }
    }

    this.getCurrentSpeed = function() {
        return currentSpeed;
    }
}

const uno = new Car;
uno.accelerate();
console.log(uno.getCurrentSpeed());

const ferrari = new Car(350, 20);
ferrari.accelerate();
ferrari.accelerate();
ferrari.accelerate();
console.log(ferrari.getCurrentSpeed())