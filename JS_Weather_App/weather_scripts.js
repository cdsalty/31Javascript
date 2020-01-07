console.log('sanity-check');

/*
- will be using the dark sky api along with reverse geolocation api
- responsive via bootstrap
- nice ui 
*/

const wDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const wMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const iconValue = {
  CLEARDAY: 'clear-day',
  CLEARNIGHT: 'clear-night',
  RAIN: 'rain',
  SNOW: 'snow',
  SLEET: 'sleet',
  WIND: 'wind',
  FOG: 'fog',
  CLOUDY: 'cloudy',
  PARTLY_CLOUDY_DAY: 'partly-cloudy-day',
  PARTLY_CLOUDY_NIGHT: 'partly-cloudy-night'
};

// 3. Fetch User's Location from the 'success function' created in step 2
function fetchLocation(apiKey, latitude, longitude) {
  let googleApiLink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  fetch(googleApiLink)
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // work with the json
      document.getElementById('location').innerHTML = data.results[4].formatted_address;
    })
    .catch((err) => {
      throw `Sorry, there was an error occured. Please refer to ${err}`;
    });
}

// 1. initialize geolocation in the body (need lat and long of the users location)
function initGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  } else {
    alert("Sorry, Your browser doesn't support geolocations services.");
  }
}

// 2. Create our success and fail functions (fetch googleApi and darkskyApi)
function success(position) {
  // const googleApiKey =
  // const dkSky =
  // let googleApiKey;
  // let dkSky;
  fetchLocation(googleApiKey, position.coords.latitude, position.coords.longitude);
}

function fail() {
  // alert user of failure to load their location
  alert("Sorry, Your browser doesn't support geolocations services.");
}
