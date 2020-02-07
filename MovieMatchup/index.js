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
  console.log(response.data); // the search input being returned. I omited this by mistake and nothing would return.
};

// fetchData();

// 2. Autocomplete search using DEBOUNCE
const input = document.querySelector('input');

// function for user's search input
const debounce = (func) => {
  let timeoutId; // each setTimeout duration...
  return (...args) => {
    // return all arguements such as arg1, arg2, etc. the same thing...
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args); // each iteration will have a new value
    }, 800);
  };
};

const onInput = (e) => {
  fetchData(e.target.value);
};

input.addEventListener('input', debounce(onInput));
/* 
delaying the user's search input in order to make less calls to the api
- the key to making this start is by assigning a varaible to the setTimeout function so we can control
  when it's called. 

  timeoutId = setTimeout(() => {
    fetchData(e.target.value);
  }, 1000);
*/
