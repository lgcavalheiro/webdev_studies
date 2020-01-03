module.exports = class TestClass {
    constructor() {
        this.literal = {
            sum: el => console.log(el+10),
            mul: el => el*2,
            min: el => el-5
        }
    }
}