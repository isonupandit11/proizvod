function usrlogout() {
    $.ajax({
        type: "POST",
        url: "Login.aspx/usrlogout",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            toastr.success('Logged Out Successfully');
            window.location = "Home.aspx";
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