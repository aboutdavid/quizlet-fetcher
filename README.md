# quizlet-fetcher

Scrapper for [Quizlet](https://quizlet.com) sets (a.k.a flashcards) to download them or something else

## CLI

CLI Flags:
`-s, --slug`: The slug that will be fetched. For example, if you use `344590556/red-panda-diagram`, then the URL [quizlet.com/344590556/red-panda-diagram/](https://quizlet.com/344590556/red-panda-diagram/) will be fetched.
`-f, --format`: The format that will be outputted by quizlet-fetcher. Can either be `anki` or `json`
`-o, --output`: The Output file that quizlet-fetcher will save to.

Example:

```bash
quizlet-fetcher -s 344590556/red-panda-diagram -f anki -o flashcards.apkg
```

## API

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
