// see docs at https://datatables.net/
$(document).ready(function() {
  $('#example').dataTable( {
    "processing": true,
        "serverSide": false,
    "ajax": {
      "url": "grab.js"
    },
    "columns": [
      { "data": "name" },
      { "data": "url" },
      { "data": "isin" },
      { "data": "Position" },
      { "data": "ArtdesInsruments" }
      
  ],
    dom: 'Bfrtip',
    buttons: [
        'copy', 'excel', 'pdf'
    ]

  } );
} );



