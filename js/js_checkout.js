$(document).ready(function () {
    shwocartdata();
    showtotal();
});

function showtotal() {
    $.ajax({
        type: "POST",
        url: "CheckOut.aspx/showcart",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var _data = JSON.parse(data.d);
            total = 0;
            if (_data != "") {
                for (var i = 0; i < _data.length; i++) {
                    total += _data[i].product_price;
                }
                var row = "";
                row += '<div ><span class="md:text-md ml-96 font-small text-red-900">Total: $' + total + ' </span>';
                row += '</div>';
                $("#total").append(row);
            }
        },
        error: function (data) {
        }
    });
}

function shwocartdata() {
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
                    total += _data[i].product_price;
                    var row = '<div class="flex items-center mb-6">';
                    row += '<img src="' + _data[i].product_image + '" width="60" class="rounded-full "></a>';
                    row += '<div class="flex flex-col ml-3"><span class="md:text-md font-medium">' + _data[i].product_title + '</span> </div>';
                    row += '<div class="flex justify-center items-center">';
                    row += '<div class="pr-8 flex ">';
                    row += '</div>';
                    row += '<div class="pr-8 ml-80"><span class="text-xs font-medium"><Button class="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:text-red-600 rounded text-red mt-4 md:mt-0" onclick="deleteitem(' + _data[i].product_id + ')">Remove item </Button>Price:$' + _data[i].product_price + '</span></div>';
                    row += ' <div><i class="fa fa-close text-xs font-medium"></i></div>';
                    row += '</div>';
                    row += '</div>';
                    $("#product").append(row);
                }
            }
            else {
                var row = "";
                row += '<div ><span class="md:text-md text-3xl m-36 font-small text-blue-900">Your cart is empty </span>';
                row += '</div>';
                $("#product").append(row)
            }

        },
        error: function (data) {
        }
    });
}

function usrrdctshp() {
    window.location = "Shippingdetails.aspx";
}
function rdcthmpg() {
    debugger;
    var Name = jQuery('[id$=ddlname]').val();
    var Address = jQuery('[id$=ddladdress]').val();
    var City = jQuery('[id$=ddlcity]').val();
    var State = jQuery('[id$=ddlstate]').val();
    var Zip = jQuery('[id$=ddlzip]').val();
    var Phone = jQuery('[id$=ddlphone]').val();
    var Country = jQuery('[id$=ddlcountry]').val();
    $.ajax({
        type: "POST",
        url: "Shippingdetails.aspx/shippingdetails",
        data: "{ Name:'" + Name + "',Address:'" + Address + "',City:'" + City + "',State:'" + State + "',Zip:'" + Zip + "', Phone:'" + Phone + "',Country:'" + Country + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            setTimeout(function () {
                window.location = "Home.aspx";
            }, 2000);
            toastr.info('Ordered Successfully');
        },
        error: function (data) {
            toastr.error('Something Went Wrong');
            return false;
        }
    });
}
function gotocrt() {
    window.location = "checkout.aspx";
}
function valid() {
    debugger;
    $("#ddlform").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            Name: "required",
            Address: "required",
            Phone_number: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            Zipcode: {
                required: true
            },
            City: {
                required: true
            },
            State: {
                required: true

            },
            Country: {
                required: true

            }
        },
        // Specify validation error messages
        messages: {
            Name: "Please enter your name",
            Address: "Please enter your address",
            Zipcode: {
                required: "required"
            },
            Phone_number: {
                required: "required",
                minlength: "Please enter correct phone number",
                maxlength: "Please enter correct phone number"
            },
            City: {
                required: "required"
            },
            State: {
                required: "required"

            },
            Country: {
                required: "required"

            }
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            rdcthmpg();
        }
    });
}
function deleteitem(id) {
    $.ajax({
        type: "POST",
        url: "checkout.aspx/deletecartitem",
        data: "{ id:'" + id + "' }",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            setTimeout(function () {
                location.reload();
            }, 1000);
            toastr.success('item removed');
        },
        error: function (data) {
            toastr.error('Something Went Wrong');
            return false;
        }
    });
}
