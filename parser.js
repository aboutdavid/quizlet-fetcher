module.exports = function (html) {
  if (!html || typeof html !== "string") {
    throw new Error("Please provide a string of HTML!");
  }
  const cheerio = require("cheerio");
  function isEven(value) {
    if (value % 2 == 0) return true;
    else return false;
  }
  const $ = cheerio.load(html);

  var obj = {};
  obj.title = $(".UIHeading--one")[0].children[0].data;
  if ($(".SetPageHeader-description")[0]) {
    obj.description = $(".SetPageHeader-description")[0].children[0].data;
  }
  var cards = [];
  var i = 0;
  var y = 0;
  while (i < $(".TermText").length) {
    if (isEven(i)) {
      cards.push({ term: $(".TermText")[i].children[0].data });
    } else {
      cards[y].definition = $(".TermText")[i].children[0].data;
      y++;
    }
    i++;
  }
  obj.cards = cards;
  return obj;
};
