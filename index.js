// see docs at https://gridjs.io/

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



