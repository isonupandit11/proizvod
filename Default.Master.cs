using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace proizvod
{
    public partial class Default : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Session["UserId"] != null)
            {
                lgnhdr.Visible = false;
                usrname.InnerHtml = "Welcome " + Session["UserName"] + "";
            }
            else
            {
                usrlgt.Visible = false;
                usrname.Visible = false;
            }
        }
    }
}