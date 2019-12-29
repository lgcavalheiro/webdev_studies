const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilots.pop(); //removes from bottom
console.log(pilots);

pilots.push('Verstappen');
console.log(pilots);

pilots.shift(); // removes from top
console.log(pilots);

pilots.unshift('Hamilton');
console.log(pilots);

pilots.splice(2, 0, 'Bottas', 'Massa');
console.log(pilots);

pilots.splice(3, 1);
console.log(pilots);

const somePilots = pilots.slice(2);
console.log(somePilots);

const morePilots = pilots.slice(1, 4);
console.log(morePilots);