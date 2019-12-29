function treatError(error) {
    //throw new Error('...');
    //throw 10;
    //throw true;
    //throw 'message';
    throw {
        name: error.name,
        msg: error.message,
        date: new Date()
    }
}

function printNameUpperCase(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!");
    } catch (e) {
        treatError(e);
    } finally {
        console.log('Final');
    }
}

const obj = { namae: 'Yukiko'};
printNameUpperCase(obj);