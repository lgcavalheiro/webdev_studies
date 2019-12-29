let compareThis = function (param) {
    console.log(this === param);
}

compareThis(global);

const obj = {}
compareThis = compareThis.bind(obj);
compareThis(global);
compareThis(obj);

let compareArrow = param => console.log(this === param);
compareArrow(global);
compareArrow(module.exports);

compareArrow = compareArrow.bind(obj);
compareArrow(obj);
compareArrow(module.exports);