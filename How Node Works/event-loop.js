const fs = require("fs");

setTimeout(() => {
  console.log("setTimeout finished");
}, 0);

setImmediate(() => {
  console.log("setImmediate finished");
});

fs.readFile("event-loop.txt", () => {
  console.log("I/O finished");
});

console.log("hello from top-level code");
