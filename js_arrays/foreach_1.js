const approved = ['Mitch', 'Michael', 'Mia', 'Manuel'];

approved.forEach(function(name, index, array) {
    console.log(`${index+1} - ${name}`);
    console.log(array);
});

approved.forEach(name => console.log(name));

const showApproved = approved => console.log('- ', approved);
approved.forEach(showApproved);

