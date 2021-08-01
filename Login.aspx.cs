using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace proizvod
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static bool Usrlogin(string Email, string Password)
        {
            SqlConnection con = new SqlConnection(WebConfigurationManager.ConnectionStrings["connectionString"].ConnectionString);
            con.Open();
            DataTable dt = new DataTable();
            SqlDataAdapter adapt = new SqlDataAdapter("select * from clm_userdata where Email='" + Email + "' and password='" + Password + "'", con);
            adapt.Fill(dt);
            con.Close();
            if (dt.Rows.Count != 0)
            {
                HttpContext.Current.Session["UserId"] = dt.Rows[0].Field<int>(0);
                HttpContext.Current.Session["UserName"] = dt.Rows[0].Field<string>(1);
                return true;
            }
            else
            {
                return false;
            }

        }
        [WebMethod]
        public static void usrlogout()
        {
            HttpContext.Current.Session.Remove("UserId");
            HttpContext.Current.Session.Remove("UserName");
        }
        [WebMethod]
        public static bool usrchklgn()
        {
            if(HttpContext.Current.Session["UserId"] == null)
            {
                return false;
            }
            return true;
        }
    }
}