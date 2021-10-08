const audio = document.querySelector('#audio-player');
const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const list = document.querySelector('#list');

let token = '';

const getToken = async () => {
  const response = await fetch('https://blooming-reef-63913.herokuapp.com/api/token');
  const data = await response.json();
  token = data.token;
};


// Search for songs
const getSongs = async query => {
  const baseUrl = "https://api.spotify.com/v1"
  const endPoint = "search";
  const response = await fetch(`${baseUrl}/${endPoint}?q=${query}&type=track`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();

  list.innerHTML = '';

  for (let i = 0; i < data.tracks.items.length; i++) {
    // aliasing
    const item = data.tracks.items[i];

    const track = {
      name: item.name,
      image: item.album.images[0].url,
      artist: item.artists[0].name,
      duration: new Date(item.duration_ms).toISOString().slice(14, 19),
      previewUrl: item.preview_url,
    };

    const element = document.createElement('div');
    element.classList.add(['track']);

    // Album image
    const image = document.createElement('img');
    image.src = track.image;

    const artist = document.createElement('h1');
    artist.innerText = track.artist;

    const name = document.createElement('p');
    name.innerText = track.name;

    // handle preview_url available / unavailable
    if (!track.previewUrl) {
      element.classList.add(['disabled']);
    } else {
      element.classList.add(['clickable']);
      element.addEventListener('click', e => {
        playTrack(track.previewUrl);
      });
    }

    // Build element and add to list
    element.appendChild(image);
    element.appendChild(artist);
    element.appendChild(name);
    list.appendChild(element);
  };

}

// Search for tracks
searchForm.addEventListener('submit', e => {
  e.preventDefault();

  getSongs(queryInput.value);

});

// Play preview url
const playTrack = url => {

  if (!url) {
    audio.pause();
    alert('Unable to play song!');
  } else {
    audio.src = url;
    audio.play();
  }

};

// Initialize app
getToken();
