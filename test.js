// i searched up "long quizlet", 93 terms!
var a = require("./index.js")(
  "https://quizlet.com/64068932/a-long-way-gone-flash-cards/"
);
console.log(`Name of set: ${a.title}`);
console.log(`Description of set: ${a.description || "None."}`);
console.log(`Cards in set: ${a.cards.length}`);

console.log(`Terms covered in this set:\n`);
console.log("==================================");
a.cards.forEach((t, i) => console.log(`${i + 1}. ${t.term}`));
console.log("==================================");
