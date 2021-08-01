<%@ Page Title="" Language="C#" MasterPageFile="~/Default.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="proizvod.Home" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">  
    <script src="Scripts/jquery-3.6.0.min.js"></script>
    <title>Home</title>
</asp:Content>  
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">  
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div id="lstproduts" class="flex flex-wrap -m-4">
    </div>
  </div>
</section>
    <script src="js/js_products.js"></script>
</asp:Content>  