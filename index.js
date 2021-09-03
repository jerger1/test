// see docs at https://datatables.net/
$(document).ready(function() {
  $('#example').dataTable( {
    "ajax": "ajaxtest.json",
    dom: 'Bfrtip',
    buttons: [
        'copy', 'excel', 'pdf'
    ]

  } );
} );



