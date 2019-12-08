let isActive = false;
console.log(isActive)

isActive = true;
console.log(isActive)

isActive = 1
console.log(!!isActive)

isActive = 0
console.log(!!isActive)

console.log(isActive)

//other types for true...
console.log('True types...\n')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

//other types for false...
console.log('False types...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log("Ending...", !!('' || null || 0 || ' '))

let name = ''
console.log(name || 'Unknown')

name = "Roger"
console.log(name || 'Unknown')