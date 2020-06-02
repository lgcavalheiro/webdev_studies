// Require library
var excel = require('excel4node');
const zlib = require('zlib');
const fs = require('fs');

// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');
var worksheet2 = workbook.addWorksheet('Sheet 2');

// Create a reusable style
var style = workbook.createStyle({
  font: {
    color: '#FF0800',
    size: 12
  },
  numberFormat: '$#,##0.00; ($#,##0.00); -'
});

// Set value of cell A1 to 100 as a number type styled with paramaters of style
worksheet.cell(1,1).number(100).style(style);

// Set value of cell B1 to 300 as a number type styled with paramaters of style
worksheet.cell(1,2).number(200).style(style);

// Set value of cell C1 to a formula styled with paramaters of style
worksheet.cell(1,3).formula('A1 + B1').style(style);

// Set value of cell A2 to 'string' styled with paramaters of style
worksheet.cell(2,1).string('string').style(style);

// Set value of cell A3 to true as a boolean type styled with paramaters of style but with an adjustment to the font size.
worksheet.cell(3,1).bool(true).style(style).style({font: {size: 14}});

//const input = '.................................';
/* deflate(Buffer.from(workbook, 'base64'), (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
}); */
var cache = [];
let testdecode = JSON.stringify(workbook, (key, value) => {
  if (typeof value === 'object' && value !== null) {
    // Duplicate reference found, discard key
    if (cache.includes(value)) return;

    // Store value in our collection
    cache.push(value);
  }
  return value;
});
cache = null;
let test = Buffer.from(testdecode).toString('base64')
//console.log(test)

/* let blob = new Blob([new Buffer(test, 'base64')], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}); */

let deflatedFiles = [zlib.deflateSync(test), zlib.deflateSync(test)]
fs.writeFileSync('./testcomp.gz', deflatedFiles, function(err) {
    console.log(err)
})

console.log(deflatedFiles)

let inflatedFiles = zlib.inflateSync(zlib.deflateSync(test)).toString()
console.log(inflatedFiles)

//workbook.write('Excel.xlsx');