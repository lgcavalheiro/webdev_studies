const JSZip = require('jszip')
const fs = require('fs');
const Blob = require('cross-blob');

let zip = new JSZip();

let data = ''


let blob = new Blob([new ArrayBuffer(JSON.parse(data))], {
    type: 'application/octet-stream'
})

zip.file('teststuff.zip', new Buffer(data))

console.log(zip)

fs.writeFileSync('./teststuff.zip', zip, function(err) {
    console.log(err)
})