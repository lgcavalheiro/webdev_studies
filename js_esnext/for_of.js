for (let letter of 'Cod3r') console.log(letter)

const topics = ['Map', 'Set', 'Promise'];

for (let topic of topics) {
    console.log(topic)
}

const topicsMap = new Map([
    ['Map', { viewed: true }],
    ['Set', { viewed: true }],
    ['Promise', { viewed: false }]
])

for (let topic of topicsMap) {
    console.log(topic)
}

for (let key of topicsMap.keys()) {
    console.log(key)
}

for (let value of topicsMap.values()) {
    console.log(value)
}

for (let [key, val] of topicsMap.entries()) {
    console.log(key, val)
}