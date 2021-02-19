const fs = require("fs");
const AnkiExport = require("anki-apkg-export").default;
const path = require("path");
module.exports = function (opts) {
  try {
    var data = require("./index.js")(`https://quizlet.com/${opts.slug}`);
  } catch (e) {
    console.error(
      "Something went wrong while fetching the Quizlet set. Error:",
      e
    );
    return;
  }

  if (opts.format.toLowerCase() == "json") {
    if (!opts.output) {
      opts.output = "flashcards.json";
    }
    console.log(`Saving to ${opts.output}`);
    fs.writeFileSync(path.resolve(opts.output), JSON.stringify(data));
  } else if (opts.format.toLowerCase() == "anki") {
    if (!opts.output) {
      opts.output = "flashcards.apkg";
    }
    console.log(`Saving to ${opts.output}`);

    const apkg = new AnkiExport(data.title);
    var i = 0;
    while (i < data.cards.length) {
      var card = data.cards[i];
      apkg.addCard(card.term, card.definition);
      i++;
    }
    apkg
      .save()
      .then((zip) => {
        fs.writeFileSync(path.resolve(opts.output), zip, "binary");
        console.log(`Package has been generated: output.pkg`);
      })
      .catch((err) => console.log(err.stack || err));
  }
};
