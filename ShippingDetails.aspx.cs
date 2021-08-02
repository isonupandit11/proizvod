using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace proizvod
{
    public partial class ShippingDetails : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static void shippingdetails(string Name, string Address, string City, string State, int Zip, string Phone, string Country)
        {
            SqlConnection con = new SqlConnection(WebConfigurationManager.ConnectionStrings["connectionString"].ConnectionString);
            con.Open();
            string insert = "insert into clm_shippingdetails VALUES ("+HttpContext.Current.Session["UserId"]+",'" + Name + "','" + Address + "','" + Zip + "','" + City + "','" +State+ "','" + Country + "','" + Phone + "','')";
            SqlCommand cmd = new SqlCommand(insert, con);
            int m = cmd.ExecuteNonQuery();
            con.Close();
        }

    }
}