// Notes taken as writting during application

// ----------------------------------------------------------------------------------------------------
// STEP 1: CODE
// console.log('sanity check');
/*
1. Setup and connect to api (api_key= e8015927)
Example use case: http://www.omdbapi.com/?i=tt3896198&apikey=e8015927
*/
const fetchData = async () => {
  // any network request is a async-request... takes time to await
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      // all the different string queries to pass along with the request
      apikey: 'e8015927',
      s: 'tangled' // 's' stands for movie title to search for (see documentation for all parameters)
      // url actually being searched through axios: http://www.omdbapi.com/?apikey=e8015927&s=tangled
    }
  });
  console.log(response); // the response of the data object and inside is the data object needed
  console.log(response.data); // the listings and data to be retrieved
};

fetchData();

// ----------------------------------------------------------------------------------------------------
/*
1B.
const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      // optional params:
      apikey: 'e8015927',
      // s: 'tangled'  // returns movie name
      // 'i' is in place for imbDB and contains all the informative data
      i: 'tt0398286'
    }
  });
  // console.log(response);
  console.log(response.data);
};
*/
// ----------------------------------------------------------------------------------------------------
/*
2. Start on autocomplete search
  // to prevent doing a fetch api request, for each key pressed, I need to wait some amount of time of 
  // no-activity before making a request ==>> Solution: SETTIMEOUT()
const input = document.querySelector('input'); // creating instance varaible to grab to
  // Event to Listen for 'input' which is user's search input
input.addEventListener('input', (e) => {
  // e.target.value; // user's data entered to be searched by calling fetchData on and passing in it's value.
let searchInput = e.target.value; // this will allow us to search and return results for each letter
fetchData(searchInput); // by passing in searchInput, need to make sure the function for fetchData can accept a parameter
  // fetchData('batman')
});
*/
// ----------------------------------------------------------------------------------------------------
/*
2b. replacing event listener with onInput and adding it as a function to be called
Replaced:
input.addEventListener('input', (e) => {
  let searchInput = e.target.value;
  fetchData(searchInput);
});
With:
const onInput = (e) => {
  let searchInput = e.target.value;
  fetchData(searchInput);
};
called:
input.addEventListener('input', onInput); listen for input and call onInput
*/

// ----------------------------------------------------------------------------------------------------
/*
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      // optional params:
      apikey: 'e8015927',
      // s: 'tangled'  // returns movie name from a search which is updated and referenced to as searchTerm
      // 'i' is in place for imbDB and contains all the informative data
      // i: 'tt0398286'
      i: searchTerm
    }
  });
  // console.log(response);
  console.log(response.data); // the search input being returned. VERY IMPORTANT!!!
};

// fetchData();

// 2. Start on autocomplete search
const input = document.querySelector('input');

let timeoutId; // defined but no value

// function for user's search input
const onInput = (e) => {
  // will be called several times.
  // on first search...
  if (timeoutId) {
    // won't be defined until the second iteration
    // check to see if timeoutId is defined; the first time it won't be so it will be skipped
    // on the user's SECOND search input, the timeoutId will be defined.
    clearTimeout(timeoutId);
    // when it's called stopped, the new timeoutId will have a new value below and then repeat the pattern
  }
  timeoutId = setTimeout(() => {
    fetchData(e.target.value);
  }, 1000);
};

input.addEventListener('input', onInput);

*/

// ----------------------------------------------------------------------------------------------------
/*

*/

// ----------------------------------------------------------------------------------------------------
/*

*/

// ----------------------------------------------------------------------------------------------------
/*

*/

// ----------------------------------------------------------------------------------------------------
/*

*/
