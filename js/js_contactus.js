function usrquery() {
    var Name = jQuery('[id$=ddlname]').val();
    var Email = jQuery('[id$=email]').val();
    var Message = jQuery('[id$=message]').val();
    $.ajax({
        type: "POST",
        url: "ContactUs.aspx/usrquery",
        data: "{ Name:'" + Name + "',Email:'" + Email + "',Message:'" + Message + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            setTimeout(function () {
                location.reload();
            }, 3000);
            toastr.error('Thanks For Writing Us We will contact you soon');
            return true;
        },
        error: function (data) {
        }
    });
}