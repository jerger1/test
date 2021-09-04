// see docs at https://datatables.net/
$(document).ready(function() {
  $('#example').dataTable( {
    "ajax": "ajaxtest.json",
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



