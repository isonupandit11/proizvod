function usrlogout() {
    $.ajax({
        type: "POST",
        url: "Login.aspx/usrlogout",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            setTimeout(function () {
                window.location = "Home.aspx";
            }, 2000);
            toastr.success('Logged Out Successfully');
        },
        error: function (data) {

        }
    });
}

function usrchklgn() {
    $.ajax({
        type: "POST",
        url: "Login.aspx/usrchklgn",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d) {
                window.location = "ContactUS.aspx";
            }
            else {
                setTimeout(function () {
                    window.location = "Login.aspx";
                }, 2000);
                toastr.error('Please Login To Continue');
            }
        },
        error: function (data) {

        }
    });
}