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

// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------------------
