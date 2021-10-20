const express = require('express');
const app = express();

// NOTE: Official google-translate-api is broken!
const google_translate = require('@vitalets/google-translate-api');
const { application } = require('express');

const PORT = process.env.PORT || 9090;

app.use(express.static('public'));

app.use(express.json());

/*
 * Return translated string
 */
app.get('/api/translate/:language', (req, res) => {
  const phrase = req.query.phrase || "";
  const language = req.params.language;
  translate(phrase, language).then(arr => {
    res.status(arr[0]).json(arr[1]); // Spread [statuscode, object]
  })
});

/*
 * Use google translate API
 */
const translate = async (phrase, language) => {
  let statuscode = 200;
  const object = {
    from: phrase,
    language,
  };

  try {
    const res = await google_translate(phrase, { to: language });
    object.to = res.text;
  } catch (e) {
    statuscode = 400;
  }

  return [statuscode, object];

};

/*
 * Return list of supported languages 
 */
app.get('/api/languages', (req, res) => {
  res.status(200).json(google_translate.languages);
})


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

