/* ============================================================================
 * Elements
 * ========================================================================= */
const button = document.querySelector('#translate');
const input = document.querySelector('#input-search');
const output = document.querySelector('#translated-text');
const languages = document.querySelector('#languages');
const flag = document.querySelector('#flag');

/* ============================================================================
 * Event listeners
 * ========================================================================= */

// Update flag next to language on changes in dropdown
languages.addEventListener('input', e => setFlag(e.target.value));

// Enable/disable button based on if we have anything to translate on input
input.addEventListener('input', e => button.disabled = e.target.value ? false : true);

// Translate text when button clicked
button.addEventListener('click', e => {
  document.body.classList.add('waiting');
  output.innerText = "Väntar på svar från API..."
  translate(input.value, languages.value).then(res => {
    output.innerText = res.to;
    document.body.classList.remove('waiting');
  });
});

/* ============================================================================
 * Support functions
 * ========================================================================= */

// Ask backend to translate
const translate = async (phrase, language) => {
  const res = await fetch(`api/translate/${language}?phrase=${phrase}`);
  const json = await res.json();
  return json;
};

// Get languages from backend
const getLanguages = async () => {
  const res = await fetch("api/languages");
  const json = await res.json();
  return json;
};

// Change country flag
// (This is really stupid, as language != country. But still...)
//
// This will show a LOT of wrong flags, but let's implement a simple
// map from known language => country to fix at least SOME of the flags...
const setFlag = language => {
  const noFlagUrl = `no-flag.png`;

  const langToFlag = {
    en: 'gb',
    sv: 'se',
  };

  // Map language to flag, if defined in langToFlag
  const flagUrl = language in langToFlag
    ? `https://flagcdn.com/32x24/${langToFlag[language]}.png`
    : `https://flagcdn.com/32x24/${language}.png`;

  // Get flag, or use transparent image if flag can't be fetched
  fetch(flagUrl)
    .then(() => flag.src = flagUrl)
    .catch(() => flag.src = noFlagUrl);

};


/* ============================================================================
 * Initialize app
 * ========================================================================= */

// Populate list of languages
getLanguages().then(e => {
  for (key in e) {
    if (key !== 'auto') {
      const option = document.createElement('option');
      option.value = key;
      option.innerText = e[key];
      languages.appendChild(option);
      if (key === 'en') {
        languages.value = 'en';
        setFlag('en');
      }
    }
  }
});

