# quizlet-fetcher

Scrapper for [Quizlet](https://quizlet.com) sets (a.k.a flashcards) to download them or something else

## CLI

CLI Flags:

- `-s, --slug`: The slug that will be fetched. For example, if you use `344590556/red-panda-diagram`, then the URL [quizlet.com/344590556/red-panda-diagram/](https://quizlet.com/344590556/red-panda-diagram/) will be fetched.
- `-f, --format`: The format that will be outputted by quizlet-fetcher. Can either be `anki` or `json`
- `-o, --output`: The Output file that quizlet-fetcher will save to.

Example:

```bash
quizlet-fetcher -s 344590556/red-panda-diagram -f anki -o flashcards.apkg
```

## API

### Node.js

There is a API for quizlet-fetcher if you want to download Quizlet cards programmatically.

```js
require("quizlet-fetcher")("344590556/red-panda-diagram");
```

It's that simple. It should output something like this:

```json
{
  "title": "red panda",
  "cards": [
    {
      "term": "Nose",
      "definition": "Snifter"
    },
    {
      "term": "Eyes",
      "definition": "Cute Dots"
    },
    {
      "term": "Tongue",
      "definition": "Lick Lick"
    },
    {
      "term": "WUTTT",
      "definition": "humannnnnn?????????"
    },
    {
      "term": "Ears",
      "definition": "listener"
    },
    {
      "term": "Fur",
      "definition": "FLUFFY!"
    }
  ]
}
```

### Browser

You can use this in the browser too, you just need to run it through a bundler like [webpack](https://webpack.js.org/) or [browserify](https://github.com/browserify/browserify). If you need it as a CDN, use [browserify-as-a-service](https://wzrd.in/)

**Note:** You can't use the index.js file as it uses a http request module only available in node.js. You will need to use `parser.js`, but implement the browser fetch API manually.

```js
window
  .fetch("https://quizlet.com/344590556/red-panda-diagram/")
  .then((response) => response.text())
  .then((data) => console.log(window.QuizletFetcher(data)));
```
