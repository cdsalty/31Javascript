// 1. Fetch the data
const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e8015927',
      s: searchTerm
    }
  });
  if (response.data.Error) {
    // not actual error but an error thrown due to the way the api was designed
    return []; // no movies to show, return empty array
  }
  // console.log(response.data); // inside this, I can see I need to be inside Search... let's return it.
  return response.data.Search;
};

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <label><b>Search for a Movie</b></label>
  <input class = "input" />
  <div class = "dropdown">
    <div class = "dropdown-menu"> 
      <div class = "dropdown-content results"></div>
    </div>
  </div>
  `;
// creating a link to the classes being rendered above
const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const resultsWrapper = document.querySelector('.results'); // will hold the results returned

const onInput = async (e) => {
  // fetchData(e.target.value); ---> remember fetchdata is called with async so follow it up with await.
  const movies = await fetchData(e.target.value);
  resultsWrapper.innerHTML = ''; // by doing this, the search value will reset after initial search
  // console.log(movies);
  dropdown.classList.add('is-active'); // adding 'is-active' to a class already created.
  for (let movie of movies) {
    // first, create the div to hold the content
    // const div = document.createElement('div');
    const option = document.createElement('a');
    // IF results don't include an image, they return N/A. So IF N/A, then return nothing, ' '
    const imgSrc = movie.Poster === 'N/A' ? '' : movie.Poster; // if no poster, ?THEN? display nothing :else: postr

    //from bulma below
    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src = "${imgSrc}" />
      <h4>${movie.Title}</h4>
    `; // margin class is temporary

    // document.querySelector('#target').appendChild(option);
    resultsWrapper.appendChild(option);
  }
};
input.addEventListener('input', debounce(onInput, 800));
