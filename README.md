# quizlet-fetcher

Scraper for [Quizlet](https://quizlet.com) sets (flashcards) to download them

## API

### Node.js

There is a API for quizlet-fetcher if you want to download Quizlet cards programmatically.
```
npm install quizlet-fetcher
```
```js
var quizlet = require("quizlet-fetcher")
quizlet("649192341/basic-japanese-phrases-flash-cards");
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
