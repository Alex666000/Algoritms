// this
// function greet(info) {
//   console.log("Hello", this.name, info);
// }
//
// const user1 = { name: "Elena" };
// const user2 = { name: "Ruby" };
//
// // greet.call(user2, "Good morning!");
// // greet.apply(user1, ["Good morning!"]);
//
// // greet(user2);
// greet.bind(user1);

// замыкание:
const makeCounter = () => {
  let count = 0

  return function () {
    return ++count
  }
}

const count = makeCounter()
console.log('counter', count())
console.log('counter', count())
console.log('counter', count())
console.log('counter', count())

// hoisting
console.log(typeof f1)
console.log(typeof f2)
console.log(typeof f3)

function f1() {
}

var f2 = function () {
}
let f3 = function () {

}

