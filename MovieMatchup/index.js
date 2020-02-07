// 1. Fetch the data
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e8015927',
      s: searchTerm
    }
  });

  console.log(response.data);
};

// 2. Start on autocomplete search by using the DEBOUNCE APPROACH: I did not know this previously
const input = document.querySelector('input');

const onInput = (event) => {
  fetchData(event.target.value);
};
input.addEventListener('input', debounce(onInput, 800));
