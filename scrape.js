const fetchData = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); // fetch() returns a promise, so we need to wait for it
  
    const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()

  
    console.log(country.borders);  
  };
  fetchData();   

function test() {
    fetch("https://restcountries.eu/rest/v2/alpha/de")
  .then(function (response) {
    
    return response.json();
  })
  .then(function (data) {
    // The JSON data will arrive here
    console.log(data)
  })
  .catch(function (err) {
    // If an error occured, you will catch it here
    console.log("uf")
  });
}  
test();

