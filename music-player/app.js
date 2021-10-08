const audio = document.querySelector('#audio-player');
const queryInput = document.querySelector('#query');
const searchForm = document.querySelector('#search-form');
const list = document.querySelector('#list');

let token = '';

const getToken = async () => {
  const response = await fetch('https://blooming-reef-63913.herokuapp.com/api/token');
  const data = await response.json();
  token = data.token;
  console.log(`Got token: ${token}`);
};

getToken();

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

  console.log(data);

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

    let element = document.createElement('div');
    element.classList.add(['tracks']);
    element.innerHTML = `
    <img src="${track.image}">
    <h1>${track.artist}</h1>
    <p>${track.name}</p>
    `;

    // Handle preview
    if (!track.previewUrl) {
      element.style.opacity = "40%";
      element.style.backgroundColor = "#800";
      element.style.color = "#888";
    } else {
      element.addEventListener('click', e => {
        playTrack(track.previewUrl);
      });
    }
    list.appendChild(element);
  };

  const buttons = document.querySelectorAll('.tracks');


}

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  getSongs(queryInput.value);

});

const playTrack = url => {

  if (!url) {
    audio.pause();
    alert('Unable to play song!');
  } else {
    audio.src = url;
    audio.play();
  }
};