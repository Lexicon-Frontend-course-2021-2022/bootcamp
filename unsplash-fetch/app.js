/*

  NOTE: this code needs access to object in this form:

  let API = {
    unsplash: {
      baseUrl: "https://api.unsplash.com/"
      accessKey: String
      [...]
    },
    [...]
  };

*/

const images = document.querySelector('#images');
const form = document.querySelector('form');
const search = document.querySelector('#unsplash-search');

// Form submit
form.addEventListener('submit', e => {
  e.preventDefault();

  images.innerHTML = '';

  getData(search.value);
});

// Get data from Unsplash API
const getData = async query => {

  // This is the endpoint we want to use
  const endPoint = "search/photos";

  // Get data from unspash
  const response = await fetch(`${API.unsplash.baseUrl}/${endPoint}?query=${query}`, {
    headers: {
      'authorization': `Client-ID ${API.unsplash.accessKey}`
    }
  });

  const data = await response.json();

  displayImages(data.results);
};

// Populate #images element
const displayImages = items => {
  items.forEach(item => {

    // <a href="[page for image]" target="_new"><img src="[thumb url]></a>

    // Create thumbnail
    const thumb = document.createElement('img');
    thumb.src = item.urls.thumb;

    // Create link
    const link = document.createElement('a');
    link.href = item.links.html;
    link.target = '_new';
    link.appendChild(thumb);

    // Add link to element
    images.appendChild(link);
  })

};