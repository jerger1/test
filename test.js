const fetchData = async () => {
    const res = await fetch("https://parsehub.com/api/v2/projects/tF1VrLrwD12p?api_key=tVdieidOdjrx&offset=0&include_options=1"); // fetch() returns a promise, so we need to wait for it
  
    const country = await res.json(); // res is now only an HTTP response, so we need to call res.json()
  
    console.log(country); // Columbia's data will be logged to the dev console
   document.getElementById("test").innerHTML= JSON.stringify(country); 
};
  
  fetchData();