/**
 * Created by Jerry on 3/13/2016.
 */

d3.json("js/fdg.json", function(error, json) {
    if (error) throw error;
    var tblcontainerID = ".table-container";
    var tblID = "#table-fdg";

    drawTable();
    drawHeader(json.links[0]);
    drawRows(json.links);

    function drawTable() {
        $(tblcontainerID).append("<table id='table-fdg' class='table'  />");
    }

    function drawHeader(data) {
        var htr = $("<tr />");
        for (var key in data) {
            htr.append($('<th/>').html(key));
        }
        $(tblID).append(htr);
    }

    function drawRows(data) {
        for (var i = 0; i < data.length; i++) {
            drawRow(data[i]);
        }
    }

    function drawRow(rowData) {
        var row = $("<tr />");

        $(tblID).append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
        row.append($("<td>" + json.nodes[rowData.source].name + "</td>"));
        row.append($("<td>" + json.nodes[rowData.target].name + "</td>"));
        row.append($("<td>" + rowData.strength + "</td>"));
        row.append($("<td>" + rowData.relation + "</td>"));
    }
});

