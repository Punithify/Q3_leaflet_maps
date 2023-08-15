//get location;
let isLoader = true;
const alertMessage = document.getElementById('alert');
const loader = document.getElementById('loader');

let getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      alertMessage.innerHTML = `Your Coordinates are latitude : ${lat}, longitude : ${long}`;
      alertMessage.removeAttribute('hidden');
      resolve({ latitude: lat, longitude: long });
    });
  } else {
    reject("your browser doesn't support geolocation API");
  }
});

getLocationPromise
  .then((location) => {
    // console.log(location.latitude);
    isLoader = false;
    loader.setAttribute('hidden', '');
    var map = L.map('map').setView([location.latitude, location.longitude], 13);
    var marker = L.marker([location.latitude, location.longitude]).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(map);
    marker.bindPopup('<p>Hope you found your location</p>').openPopup();
    // Get the canvas element
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Draw on the canvas
    // ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
    // ctx.fillRect(50, 50, 100, 100);
  })
  .catch((err) => {
    console.log(err);
  });

const reloadPage = () => {
  location.reload();
};

if (typeof functionName === 'function') {
  alert('loaded');
}
