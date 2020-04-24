var Adder = require("./Adder.js");

var props = {
    a: 2,
    b: 11
}

var sum = new Adder(props);

console.log(sum.render());