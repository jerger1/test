// see docs at https://datatables.net/
$(document).ready(function() {
  $('#example').dataTable( {
    "ajax": "ajaxtest.json",
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
  ]
  } );
} );



