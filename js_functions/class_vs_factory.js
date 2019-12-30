class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`I am ${this.name}`);
    }
}

const p1 = new Person('Jeremy');
p1.speak();

const person = name => {
    return {
        speak: () => console.log(`I am ${name}`)
    }
}

const p2 = person('Mick');
p2.speak()