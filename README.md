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
   "author": "user123456",
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
         "definition":"Excuse me",
         "image": "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=100,onerror=redirect,w=120/https://example.com/3826462.jpg",
         "sourceImage": "https://example.com/3826462.jpg"
      },
      {
         "term":"わたし と いっしょ に きて ください",
         "definition":"Come with me.",
         "image": "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=100,onerror=redirect,w=120/https://example.com/381937.jpg",
         "sourceImage": "https://example.com/381937.jpg"
      },
      {
         "term":"あなた は えいご/にほんご を はなします か",
         "definition":"Do you speak English/Japanese?",
         "image": "https://quizlet.com/cdn-cgi/image/f=auto,fit=cover,h=100,onerror=redirect,w=120/https://example.com/1767281.jpg",
         "sourceImage": "https://example.com/1767281.jpg"
      }
   ]
}
```
Note: the `image` field is a proxy image, usually from the CDN. `sourceImage` is the real image. You'll most likely want to use `sourceImage`

### Browser

There is a folder named `dist`. It contains a browserified version of the parser. You can follow the above example, replacing "require" with `window.QuizletFetcher`.

You can compile it yourself using this command
```
npx browserify index.js -o dist/index.js
npx uglify-js --compress -o dist/index.min.js -- dist/index.js
```

Example:
```html
<script src="dist/index.min.js"></script>
<script>
var html = document.body.innerHTML
console.log(QuizletFetcher(html)) // prints JSON, see example above
</script>
```

### Projects using this

Feel free to add your project here if you are using it.

- [quizlet2anki](https://github.com/aboutdavid/quizlet2anki) ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/quizlet-to-anki/), Chrome coming soon), an in-browser Quizlet flashcard deck to Anki flashcard deck converter.

### Changelog


- `1.0.0` - Inital version
- `1.0.1 to 1.0.3` - Small bug fixes
- `1.1.0` - Dropped CLI and automatic fetching due to Cloudflare issues
- `2.0.0` - Moved to a class based system + did refactoring
- `2.1.0` - \[Current\] Added image + author metadata. Added JSDoc types as well.