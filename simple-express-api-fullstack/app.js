/* ============================================================================
 * Configuration
 * ========================================================================= */
const PORT = process.env.PORT || 9090;


/* ============================================================================
 * App
 * ========================================================================= */
const express = require('express');
const app = express();

// NOTE: Official google-translate-api is broken! Use this fork instead
const google_translate = require('@vitalets/google-translate-api');


/* ============================================================================
 * Endpoints
 * ========================================================================= */

// Return translated string
app.get('/api/translate/:language', (req, res) => {
  const phrase = req.query.phrase || "";
  const language = req.params.language;
  translate(phrase, language).then(r => {
    res.status(r.statuscode).json(r);
  })
});

// Return list of supported languages 
app.get('/api/languages', (req, res) => {
  res.status(200).json(google_translate.languages);
})

/* ============================================================================
 * Support functions
 * ========================================================================= */

// Use google translate API
const translate = async (phrase, language) => {
  const object = {
    statuscode: 200,
    from: phrase,
    language,
  };

  try {
    const res = await google_translate(phrase, { to: language });
    object.to = res.text;
  } catch (e) {
    object.statuscode = 400;
  }

  return object;

};

/* ============================================================================
 * Red tape
 * ========================================================================= */

app.use(express.static('public'));
app.use(express.json());

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

