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
