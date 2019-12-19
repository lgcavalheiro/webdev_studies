const greeting = 'Hey!'; //lexical context 1

function exec() {
    const greeting = 'Yo dawg!'; //lexical context 2
    return greeting;
};

// Objects are nested groups of pairs key/value

const client = {
    name: 'Peter',
    age: 32,
    weight: 98.2,
    address: {
        type: 'Street',
        name: 'Elm',
        number: '123'
    }
}

console.log(greeting, " | ", exec());
console.log(client);

console.log(client.address.number //dot notation
    , client.address.name
    , client.address.type);