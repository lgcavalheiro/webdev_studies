function Person(name) {
    this.name = name;

    this.speak = () => console.log(`I am ${this.name}`)
} 

const p1 = new Person('Gabe');
p1.speak();