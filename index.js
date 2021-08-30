new gridjs.Grid({
  sort: true,
  pagination: true,
  search: {
    server: {
      url: (prev, keyword) => `${prev}?search=${keyword}`
    }
  },
  columns: ['Title', 'Director', 'Producer', ],
  server: {
    url: 'https://swapi.dev/api/films/',
    then: data => data.results.map(baul => [baul.title, baul.director, baul.producer])
  }  
}).render(document.getElementById("wrapper"));



new gridjs.Grid({
  sort: true,
  pagination: true,
  search: {
    server: {
      url: (prev, keyword) => `${prev}?search=${keyword}`
    }
  },
  columns: ['Title', 'demonym' ],
  server: {
    url: 'https://restcountries.eu/rest/v2/alpha/de',
    then: data => [data].map(baul => [baul.borders, baul.demonym])
  }  
}).render(document.getElementById("wrapper2"));