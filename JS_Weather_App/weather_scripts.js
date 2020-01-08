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

// 5. Create a function to fetch the weather report
function fetchWeatherReport(apiKey, latitude, longitude) {
  // this will bring a CORS ERROR; to avoid, run through a proxy or make the call server side; This was provided to me
  // DarkSky doesn't like being ran in just javasript only
  let DsProxyLink = `https://cors-anywhere.herokuapp.com/`;
  let DsApiLink = `${DsProxyLink}https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}?exclude=minutely,alerts,flags`;
  // 5b.
  fetch(DsApiLink)
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      // currently: the temperature this very minute; daily: next 18 days and hourly: next 8 hours
      // work with the data (data is the object that we have that comes back from the repsonse. Let's look inside it.)
      let resultsHTML = '';
      let tableHTML = '';
      let summary = data.currently.summary;
      let temperature = data.currently.temperature;
      let icon = data.currently.icon;
      let precipProbability = data.currently.precipProbability;
      let humidity = data.currently.humidity;
      let windSpeed = data.currently.windSpeed;
      // ts is the time coming back in what's called 'unix' time so we mulitiple it by a thousand to get a timestamp which will give us a day out of it as well. the day will be 1-7
      let ts = new Date(data.currently.time * 1000);
      let forecastDate = `${wDay[ts.getDay()]} ${wMonth[ts.getMonth()]} ${ts.getDate()}`;
      // ts.getDay will return a number, 1-7, month: 1-12
      console.log(temperature);

      // 6B
      // Set values for the current conditions:
      document.getElementById('dayTime').innerHTML = forecastDate;
      document.getElementById('summary').innerHTML = summary;
      document.getElementById('currentTemp').innerHTML = `${Math.round(temperature)}&deg`;
      // document.getElementById("weatherIcon").src = getICON(icon);
      document.getElementById(
        'perciptation'
      ).innerHTML = `Preciptitaion ${precipProbability * 100}%`;
      document.getElementById('humidty').innerHTML = `Humidity is at ${Math.round(
        humidity * 100
      )}%`;
      document.getElementById('wind').innerHTML = `Winds are at ${Math.round(
        windSpeed
      )} mph`;

      // render the forcast tabs (daily and weekly)
      document.getElementById('dailyForecast').innerHTML = renderWeeklyForecast(
        data.daily
      );
      document.getElementById('weeklyForecast').innerHTML = renderWeeklyForecast(
        data.hourly
      );
    })
    .catch((err) => {
      throw `Sorry we had an error that occured, error: ${err}`;
    });
}

// 3. Fetch User's Location/Address from the 'success function' created in step 2
function fetchLocation(apiKey, latitude, longitude) {
  let googleApiLink = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  fetch(googleApiLink)
    .then((response) => {
      // console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // work with the json and actually make a call
      document.getElementById('location').innerHTML = data.results[5].formatted_address; // could have used [5]
    })
    .catch((err) => {
      // on first run, I received an error saying my billing to my google api wasn't enabled. This was very helpful in diagonising the error
      throw `Sorry, there was an error occured. Please refer to ${err}`;
    });
}

// 7. Render the Weekly Forecast: Keep in mind it will be placed inside a table:
function renderWeeklyForecast(fcData) {
  // return an html layout to go within the table
  let resultsHTML = `<tr><th>Day:</th><th>Conditions:</th><th>High:</th><th>Low:</th></tr>`;
  // next, need to loop over the data and get the rows that I need.
  // also need to get a row count... on return, it will actually show more days than we need so we modify it to work accordingly
  rowCount = fcData.data.length;
  if (rowCount > 8) {
    rowCount = 8;
  }
  // rowCount.map(row => { })
  for (i = 0; i < rowCount; i++) {
    let ts = new Date(fcData.data[i].time * 1000);
    let dayTime = wDay[ts.getDay()];
    let summary = fcData.data[i].summary;
    let tempHigh = `${Math.round(fcData.data[i].temperatureHigh)}&deg`;
    let tempLow = `${Math.round(fcData.data[i].temperatureLow)}&deg`;

    resultsHTML += renderRow(dayTime, summary, tempHigh, tempLow);
  }
  return resultsHTML;
}

// 8. render grid columns using a template literal
function renderRow(dayTime, summary, tempHigh, colVal4) {
  return `<tr><td>${dayTime}</td><td>${summary}</td><td>${tempHigh}</td><td>${colVal4}</td></tr>`;
}

// 1. initialize the geolocation request (need lat and long of the users location)
function initGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  } else {
    alert("Sorry, Your browser doesn't support geolocations services.");
  }
}

// 2(A). Create our success functions if we do get our position(fetch googleApi and darkskyApi)
function success(position) {
  // const googleApiKey = in keys
  // const dkSky = in keys

  fetchLocation(googleApiKey, position.coords.latitude, position.coords.longitude);
  // 4. (after confirming we can fetchLocation, work on darksky api)
  fetchWeatherReport(dsKey, position.coords.latitude, position.coords.longitude);
}
// 2(B) Create the fail function if we are unable to get geolocation services
function fail() {
  // alert user of failure to load their location
  alert("Sorry, Your browser doesn't support geolocations services.");
}
