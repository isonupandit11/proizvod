function usrlogin() {
    var Email = jQuery('[id$=ddlemail]').val();
    var Password = jQuery('[id$=ddlpsswd]').val();
    $.ajax({
        type: "POST",
        url: "Login.aspx/Usrlogin",
        data: "{ Email:'" + Email + "',Password:'" + Password + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.d)
                window.location = "Home.aspx";
            else
                toastr.error('Please Check Your Email and Password');
        },
        error: function (data) {
            
        }
    });
}