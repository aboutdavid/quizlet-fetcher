#!/usr/bin/env node
// require a bunch of stuff

const { Command } = require("commander");
const fs = require("fs");
const path = require("path");

const program = new Command();
// used to help with overiding default settings. it removes undefined/null objects.
const removeEmptyOrNull = (obj) => {
  Object.keys(obj).forEach(
    (k) =>
      (obj[k] && typeof obj[k] === "object" && removeEmptyOrNull(obj[k])) ||
      (!obj[k] && obj[k] !== undefined && delete obj[k])
  );
  return obj;
};
// create a new commander program with the package.json file.
program.version(require(__dirname + "/package.json").version);

program
  .option(
    "-s, --slug [slug]",
    "The slug for the quizlet. Example: 64068932/a-long-way-gone-flash-cards)"
  )
  .option("-f, --format [format]", "The format. Can be either 'anki' or 'json'")
  .option(
    "-o, --output [output]",
    "The file that quizlet-exporter will output to."
  );
// process cli arguments passed from node
program.parse(process.argv);
// get options
var opts = program.opts();
if (!opts.slug) {
  console.error(
    "Please provide a slug! Examples: 64068932/a-long-way-gone-flash-cards"
  );
  process.exit(0);
}
var defoptions = {
  format: "json",
};
var options = { ...defoptions, ...removeEmptyOrNull(program.opts()) };
require("./generator.js")(options);
