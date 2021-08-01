using System;
using System.Collections.Generic;
using System.Configuration;
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
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        [WebMethod]
        public static void usrsignup(string Name, string Email, string Mobile, string Password)
        {
            SqlConnection con = new SqlConnection(WebConfigurationManager.ConnectionStrings["connectionString"].ConnectionString);
            con.Open();
            string insert = "insert into clm_userdata VALUES ('" + Name + "','" + Email + "','" + Mobile + "','" + Password + "')";
            SqlCommand cmd = new SqlCommand(insert, con);
            int m = cmd.ExecuteNonQuery();
            con.Close();
        }


    }
}