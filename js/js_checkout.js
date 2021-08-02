$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: "CheckOut.aspx/showcart",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var _data = JSON.parse(data.d);
            if (_data != "") {
                for (var i = 0; i < _data.length; i++) {
                    var row = '<div class="flex items-center mb-6">';
                    row += '<img src="' + _data[i].product_image + '" width="60" class="rounded-full "></a>';
                    row += '<div class="flex flex-col ml-3"><span class="md:text-md font-medium">' + _data[i].product_title + '</span> </div>';
                    row += '<div class="flex justify-center items-center">';
                    row += '<div class="pr-8 flex ">';
                    row += '</div>';
                    row += '<div class="pr-8 ml-80"><span class="text-xs font-medium">$' + _data[i].product_price + '</span> </div>';
                    row += ' <div><i class="fa fa-close text-xs font-medium"></i></div>';
                    row += '</div>';
                    row += '</div>';
                    $("#product").append(row);
                }
            }
            else
                window.location = "Login.aspx";
        },
        error: function (data) {
        }
    });
});