const fetchData = async () => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      // optional params:
      apikey: 'e8015927',
      s: 'tangled'
    }
  });
  console.log(response);
  console.log(response.data);
};

fetchData();
