$(document).ready(function() {
  $.extend(jQuery.fn.dataTableExt.oSort, {
    "date-pt-pre" : function(a) {
      var x;
      try {
        var dateA = a.trim().split("/");
        var day = parseInt(dateA[0], 10);
        var month = parseInt(dateA[1], 10);
        var year = parseInt(dateA[2], 10);
        var date = new Date(year, month - 1, day);
            //console.log("convertendo a data: " + date);
        x = date.getTime();
      }
      catch (err) {
        x = new Date().getTime();
      }
      return x;
    },

    "date-pt-asc" : function(a, b) {
      return a - b;
    },

    "date-pt-desc" : function(a, b) {
      return b - a;
    }
  });
  
  function convertDate(inputFormat) {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat);
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
  }  
    
  $('#table_email').dataTable({
    // "sPaginationType": "full_numbers",
    "aoColumns": [
      null,
      null,
      {"sType": "date-pt"}
    ],
    "order": [[ 2, 'asc' ]],
    "language": {
      "lengthMenu": "Mostrando _MENU_ itens por página",
      "zeroRecords": "Nenhum item encontrado",
      "info": "Mostrando _PAGE_ de _PAGES_ páginas",
      "infoEmpty": "Não há registros disponíveis",
      "infoFiltered": "(filtro utilizado em _MAX_ itens)",
      "search": "Filtro:",
      "paginate": {
          "first":      "Primeira",
          "last":       "Última",
          "next":       "Próxima",
          "previous":   "Anterior"
      }            
    },
    "lengthMenu" : [[10, 20, -1], [10, 20, "All"]],
    "createdRow": function ( row, data, index ) {
      if ( data[2] == convertDate(new Date()) ) {
          $('td', row).eq(2).html("Hoje às " + $('td', row).eq(2).attr("rel"));
          $('td', row).eq(2).parent("tr").addClass("hoje");
      }
    }
  });
});