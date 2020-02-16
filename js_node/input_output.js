const anon = process.argv.indexOf('-a') !== -1;
console.log(anon);

if(anon) {
    process.stdout.write('Hi anon!\n');
    process.exit();
} else {
    process.stdout.write('Tell me thy name: ');
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '');
        process.stdout.write(`Hi ${name}!\n`);
        process.exit();
    })
}