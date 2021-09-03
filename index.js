// see docs at https://datatables.net/
$(document).ready(function() {
  $('#example').dataTable( {
    "ajax": "ajaxtest.json",
    buttons: [
      'copy', 'excel', 'pdf'
  ]

  } );
} );
table.buttons().container()
  .appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );


