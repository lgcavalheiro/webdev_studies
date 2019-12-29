//literal form
function fun1() {

}

//keep in a variable
const fun2 = function() { }

//keep in an array
const array1 = [
    function(a,b) { return a + b},
    fun1,
    fun2
]

console.log(array1[0](2,3))

//keep in object attributes
const obj = {}
obj.speak = function() { return 'Hey!' }
console.log(obj.speak());

//Passing function as parameter
function run(fun) {
    fun()
}

run(function() {console.log('Exec!')});

//Functions can return/contain other functions
function sum(a, b) {
    return function(c) {
        console.log(a + b + c);
    } 
}

sum(2,3)(5);