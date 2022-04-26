var EventEmitter = require("events")

var util = require("util")

function Dialog(){
    this.message = "Hello world";
}

util.inherits(Dialog, EventEmitter)

Dialog.prototype.sayHello = function(){
    console.log(this.message)
    this.emit("hello");
}
var dialog = new Dialog();

dialog.on("hello", function(){
    console.log("Một lời chào")
})
dialog.sayHello = ("Mai Hoa")