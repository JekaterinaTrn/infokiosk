
$(function() {
    $.getJSON('https://x2.tk.ee/vesinfo/', function(data) {
        method: "GET",
        $.each(data, function(key, value) {
            if (value.issuance) {
                $("<tr>" + "<td class='main-ship-data'>" + value.arrival + "</td>" +
                    "<td class='main-ship-data'>" + value.name + "</td>" +
                    "<td class='main-ship-data'>" + value.line + "</td>" +
                    "<td class='main-ship-data'>" + value.issuance + "</td>" + "</tr>").appendTo('.main-ship-table');
            }


        });
        
        
    });
});
