const QuizletFetcher = require("./index.js")
const fs = require("fs")
const a = new QuizletFetcher(fs.readFileSync("./test.html", "utf8")).getJSON()
console.log(`Name of set: ${a.title}`);
console.log(`Description of set: ${a.description || "None."}`);
console.log(`Cards in set: ${a.cards.length}`);

console.log(`Terms covered in this set:\n`);
console.log("==================================");
a.cards.forEach((t, i) => console.log(`${i + 1}. ${t.term}`));
console.log("==================================");
