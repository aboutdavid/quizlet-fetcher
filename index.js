const cheerio = require("cheerio");
class QuizletFetcher {
  /**
   * Create a Quizlet Parser
   * @param {string} html - The HTML string to parse.
   * @throws {Error} Will throw an error if the HTML is not a string.
   */
  constructor(html) {
    if (!html || typeof html !== "string") {
      throw new Error("Please provide a string of HTML!");
    }
    const $ = cheerio.load(html)
    this.$ = $
    var obj = {};
    obj.title = $("title").text().replace(" Flashcards | Quizlet", "").replace("Back ButtonSearch IconFilter Icon", "");
    if ($(".SetPageHeader-description")[0]) obj.description = $(".SetPageHeader-description")[0].children[0].data
    obj.author = $(".UserLink-username--typography-subheading-3").text()
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
    i = 0
    while (i < $(".SetPageTerm-image").length) {
      var term = $(".SetPageTerm-image")[i].attribs.alt.replace("Image: ", "")
      var src = $(".SetPageTerm-image")[i].attribs.src
      var card = cards.find(card => card.term === term);
      if (card) {
        card.image = src;
        card.sourceImage = src.replace(/^https:\/\/.*?\/(https?:\/\/.*)$/, "$1")
      }
      i++
    }

    obj.cards = cards;
    this.html = html

    this.json = obj
  }
   /**
 * Get the JSON of a Quizlet set
 * @return {{title: string, description: string, author: string, cards: {term: string, definition: string, image: string, sourceImage: string}[]}} The Quizlet data.
 */
  getJSON() {
    return this.json
  }

}


if (typeof window === "undefined") {
  module.exports = QuizletFetcher;
} else {
  window.QuizletFetcher = QuizletFetcher;
}