
$("#Currencies").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/currencies.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr class="my-table-row">';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });

})

$("#indicesS").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/indices.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr class="my-table-row">';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });
})

$("#energy").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/energy.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });

})

$("#metals").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/metals.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });
})

$("#futureC").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/future.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr class="my-table-row">';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });
})

$("#futureI").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/futureI.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr class="my-table-row">';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });

})

$("#shares").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/shares.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });
})
$("#crypto").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/cryptos.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr class="my-table-row">';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });
})
$("#eib").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/EIB.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr class="my-table-row">';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#csv-display').html(table_data);
    }
  });
})

$.ajax({
  type: "GET",
  url: "/legal/currencies.csv",
  dataType: "text",
  success: function (data) {
    var _data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table  table-striped">';
    for (var count = 0; count < _data.length; count++) {
      var cell_data = _data[count].split(",");
      table_data += '<tr class="my-table-row">';
      for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
        if (count === 0) {
          table_data += '<th>' + cell_data[cell_count] + '</th>';
        }
        else {
          table_data += '<td>' + cell_data[cell_count] + '</td>';
        }
      }
      table_data += '</tr>';
    }
    table_data += '</table>';
    $('#csv-display').html(table_data);
  }
});


$.ajax({
  type: "GET",
  url: "/legal/spreads/forex.csv",
  dataType: "text",
  success: function (data) {
    var _data = data.split(/\r?\n|\r/);
    var table_data = '<table class="table  table-striped">';
    for (var count = 0; count < _data.length; count++) {
      var cell_data = _data[count].split(",");
      table_data += '<tr>';
      for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
        if (count === 0) {
          table_data += '<th>' + cell_data[cell_count] + '</th>';
        }
        else {
          table_data += '<td>' + cell_data[cell_count] + '</td>';
        }
      }
      table_data += '</tr>';
    }
    table_data += '</table>';
    $('#spread-table').html(table_data);
  }
});

$("#CurrenciesSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/forex.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });

})

$("#indicesSSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/indecs.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr >';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });
})

$("#energySpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/engrgy.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });

})

$("#metalsSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/metals.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });
})

$("#futureCSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/futureCom.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });
})

$("#futureISpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/futureInd.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });

})

$("#sharesSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/shares.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });
})
$("#cryptoSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/cryptos.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr >';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });
})
$("#eibSpread").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/legal/spreads/EIB.csv",
    dataType: "text",
    success: function (data) {
      var _data = data.split(/\r?\n|\r/);
      var table_data = '<table class="table  table-striped">';
      for (var count = 0; count < _data.length; count++) {
        var cell_data = _data[count].split(",");
        table_data += '<tr>';
        for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
          if (count === 0) {
            table_data += '<th>' + cell_data[cell_count] + '</th>';
          }
          else {
            table_data += '<td>' + cell_data[cell_count] + '</td>';
          }
        }
        table_data += '</tr>';
      }
      table_data += '</table>';
      $('#spread-table').html(table_data);
    }
  });
})