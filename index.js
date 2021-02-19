const request = require("sync-request");
const cheerio = require("cheerio");
function isEven(value) {
  if (value % 2 == 0) return true;
  else return false;
}

module.exports = function (slug, options) {
  if (!slug) {
    throw new Error("Please provide a slug.");
  }
  if (!options) {
    options = {
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      },
    };
  }
  var res = request("GET", `https://quizlet.com/${slug}`, options);
  if (res.statusCode >= 300) {
    throw new Error(
      `Failed to fetch the quizlet cards. Status code: ${res.statusCode}`
    );
  }
  return require("./parser.js")(res.getBody("utf8"));
};
