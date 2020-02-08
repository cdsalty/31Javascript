// 1. Fetch the data
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e8015927',
      s: searchTerm
    }
  });

  // console.log(response.data); // inside this, I can see I need to be inside Search... let's return it.
  return response.data.Search;
};

// 2. Start on autocomplete search by using the DEBOUNCE APPROACH: I did not know this previously
const input = document.querySelector('input');

const onInput = async (e) => {
  // fetchData(e.target.value); ---> remember fetchdata is called with async so it needs to be addressed here too
  const movies = await fetchData(e.target.value);
  console.log(movies);
};
input.addEventListener('input', debounce(onInput, 800));
