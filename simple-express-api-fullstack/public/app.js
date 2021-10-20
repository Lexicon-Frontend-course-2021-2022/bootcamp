const button = document.querySelector('#translate');
const input = document.querySelector('#input-search');
const output = document.querySelector('#translated-text');
const languages = document.querySelector('#languages');


button.addEventListener('click', e => {
  document.body.classList.add('waiting');
  output.innerText = "Väntar på svar från API..."
  translate(input.value, languages.value).then(res => {
    output.innerText = res.to;
    document.body.classList.remove('waiting');
  });

});

const translate = async (phrase, language) => {
  const res = await fetch(`api/translate/${language}?phrase=${phrase}`);
  const json = await res.json();
  return json;
};

const getLanguages = async () => {
  const res = await fetch("api/languages");
  const json = await res.json();
  return json;
};

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
      }
    }
  }
});

