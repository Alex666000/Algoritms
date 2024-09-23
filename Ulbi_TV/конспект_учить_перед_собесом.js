function greet(info) {
  console.log("Hello", this.name, info);
}

const user1 = { name: "Elena" };
const user2 = { name: "Ruby" };

// greet.call(user2, "Good morning!");
// greet.apply(user1, ["Good morning!"]);

// greet(user2);
const greetElena = greet.bind(user1);
greetElena('ffff')
