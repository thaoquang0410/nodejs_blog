function Person() {
    this.message = "Hello NodeJS3"
    this.sayHello = function() {
        console.log(this.message)
    }
}
module.exports = new Person()