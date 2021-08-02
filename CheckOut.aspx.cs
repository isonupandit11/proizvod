using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Configuration;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Reflection;
using System.Xml.Linq;
using System.Security.Cryptography;
using Newtonsoft.Json;

namespace proizvod
{
    public partial class CheckOut : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static bool addtocart(int id, string titile, float price, string image)
        {
            if (HttpContext.Current.Session["UserId"] == null)
            {
                return false;
            }
            else
            {
                SqlConnection con = new SqlConnection(WebConfigurationManager.ConnectionStrings["connectionString"].ConnectionString);
                con.Open();
                string insert = "insert into clm_cartdetails VALUES ('" + id + "','" + titile + "','" + price + "','" + image + "','" + HttpContext.Current.Session["UserId"] + "')";
                SqlCommand cmd = new SqlCommand(insert, con);
                int m = cmd.ExecuteNonQuery();
                con.Close();
                return true;
            }
        }
        [WebMethod]
        public static string showcart()
        {
            if (HttpContext.Current.Session["UserId"] != null){
                SqlConnection con = new SqlConnection(WebConfigurationManager.ConnectionStrings["connectionString"].ConnectionString);
                con.Open();
                DataTable dt = new DataTable();
                SqlDataAdapter adapt = new SqlDataAdapter("select * from clm_cartdetails WHERE id=" + HttpContext.Current.Session["UserId"] + "", con);
                adapt.Fill(dt);
                string JSONString = string.Empty;
                JSONString = JsonConvert.SerializeObject(dt); // Serialization
                return JSONString;
            }
            else
            {
                string JSONString = "0";
                return JSONString;
            }
        }

    }
}