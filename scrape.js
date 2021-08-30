const fetchData = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/alpha/col"); 
  
    const country = await res.json(); 

  
    console.log(country.borders);  
  };
  fetchData();   

function test() {
    fetch("https://restcountries.eu/rest/v2/alpha/de")
  .then(function (response) {
    
    return response.json();
  })
  .then(function (data) {
    
    console.log(data)
  })
  .catch(function (err) {
    
    console.log("uf")
  });
}  
test();

