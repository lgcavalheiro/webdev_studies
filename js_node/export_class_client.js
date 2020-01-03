//import TestClass from "./export_class";
const TestClass = require('./export_class')

let db = [1,2,3,4,5]
const testclass = new TestClass()

db.forEach(testclass.literal.sum)