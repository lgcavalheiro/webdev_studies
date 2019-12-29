const person = {
    greet: 'Good morning!',
    speak() {
        console.log(this.greet);
    }
}

person.speak()

const speak = person.speak

speak()

const speakPerson = person.speak.bind(person);

speakPerson()