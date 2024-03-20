const cheerio = require("cheerio");
class QuizletFetcher {
  constructor(html) {
    if (!html || typeof html !== "string") {
      throw new Error("Please provide a string of HTML!");
    }
    const $ = cheerio.load(html)
    this.$ = $
    var obj = {};
    obj.title = $("title").text().replace(" Flashcards | Quizlet", "");
    console.log($("title").text())
    if ($(".SetPageHeader-description")[0]) {
      obj.description = $(".SetPageHeader-description")[0].children[0].data;
    }
    var cards = [];
    var i = 0;
    var y = 0;
    while (i < $(".TermText").length) {
      if (i % 2 == 0) {
        cards.push({ term: $(".TermText")[i].children[0].data });
      } else {
        cards[y].definition = $(".TermText")[i].children[0].data;
        y++;
      }
      i++;
    }
    obj.cards = cards;
    this.html = html
    
    this.json = obj
  }
  getJSON() {
    return this.json
  }

}


if (typeof window === "undefined") {
  module.exports = QuizletFetcher;
} else {
  window.QuizletFetcher = QuizletFetcher;
}
