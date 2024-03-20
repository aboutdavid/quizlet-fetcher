# quizlet-fetcher

Scraper for [Quizlet](https://quizlet.com) sets (flashcards) to download them.

## API

### Node.js

Note: functionality to download cards **was removed** in 1.1.0. You'll need to provide the webpage yourself.

Note: As of now, you'll need to be authenticated to get all of the cards. This is because Quizlet will only provide the full set to authenticated users.

```bash
npm install quizlet-fetcher
# or
yarn add quizlet-fetcher
```
```js
const QuizletFetcher = require("quizlet-fetcher")
const quizlet = new QuizletFetcher(html) 

// Get the cards as JSON
// See below for format
quizlet.getJSON()
```

It's that simple. It should output something like this:

```json
{
   "title":"Basic Japanese Phrases",
   "description":"Basic phrases from romaji to English",
   "cards":[
      {
         "term":"お げんき です か",
         "definition":"How are you?"
      },
      {
         "term":"わたし は げんき です, ありがとう",
         "definition":"I'm fine, thanks."
      },
      {
         "term":"さいきん どう です か",
         "definition":"What's new?"
      },
      {
         "term":"かわらない です",
         "definition":"Nothing much."
      },
      {
         "term":"すみません",
         "definition":"Excuse me"
      },
      {
         "term":"わたし と いっしょ に きて ください",
         "definition":"Come with me."
      },
      {
         "term":"あなた は えいご/にほんご を はなします か",
         "definition":"Do you speak English/Japanese?"
      }
   ]
}
```

### Browser

There is a folder named `dist`. It contains a browserified version of the parser. Use the function `QuizletFetcher(html)` to parse in the browser after including one of the files from the `dist` folder.

You can compile it yourself using this command
```
browserify parser.js -o dist/parser.js
```

Example:
```html
<script src="dist/parser.min.js"></script>
<script>
var html = document.body.innerHTML
console.log(QuizletFetcher(html)) // prints JSON, see example above
</script>
```
