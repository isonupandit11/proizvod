function usersignup() {
    debugger;
    
    var Name = jQuery('[id$=ddlname]').val();
    var Email = jQuery('[id$=ddlemail]').val();
    var Mobile = jQuery('[id$=ddlmobile]').val();
    var Password = jQuery('[id$=ddlpsswd]').val();
    $.ajax({
        type: "POST",
        url: "Signup.aspx/usrsignup",
        data: "{ Name:'" + Name + "',Email:'" + Email + "',Mobile:'" + Mobile + "',Password:'" + Password + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            setTimeout(function () {
                location.reload();
            }, 2000);
            toastr.info('SignedUp Successfully Please Login To Continue');
        },
        error: function (data) {
            toastr.error('Something Went Wrong');
            return false;
        }
    });
}
function validation() {
    $("#ddlsignup").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            fullname: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            number: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            Password: {
                required: true,
                minlength: 5
            },
            Confirm_Password: {
                required: true,
                equalTo: '#ddlpsswd'
            }
        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your Name",
            number: {
                required: "Please enter mobile Number",
                minlength: "Please enter a valid mobile Number",
                maxlength: "Please enter a valid mobile Number"
            },
            Password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            Confirm_Password: {
                required: "Please Enter Same Password",
                equalTo: "Please Enter Same Password"
            },
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            usersignup();
        }
    });

}
