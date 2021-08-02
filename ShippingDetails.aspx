<%@ Page Title="" Language="C#" MasterPageFile="~/Default.Master" AutoEventWireup="true" CodeBehind="ShippingDetails.aspx.cs" Inherits="proizvod.ShippingDetails" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="js/js_checkout.js"></script>
    <script src="Scripts/jquery.validate.min.js"></script>
     <style>
        .error{
            color:red;
            font-style:italic;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <form id="ddlform" runat="server">
        <div class="bg-gray-300">
            <div class="py-12">
                <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg md:max-w-xl mx-2">
                    <div class="md:flex ">
                        <div class="w-full p-4 px-5 py-5">
                            <div class="flex flex-row">
                                <h2 class="text-3xl text-green-400 font-semibold">Proizvod</h2>
                            </div>
                            <span>Shipping Address</span>
                            <input type="text" name="Name" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" id="ddlname" placeholder="Full Name*">
                            <input type="text" name="Address" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" id="ddladdress" placeholder="Address*">
                            <div class="grid md:grid-cols-3 md:gap-2">
                                <input type="text" name="Zipcode" id="ddlzip" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*">
                                <input type="text" name="City" id="ddlcity" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*">
                                <input type="text" id="ddlstate" name="State" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*">
                            </div>
                            <input type="text" name="Country" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" id="ddlcountry" placeholder="Country*">
                            <input type="text" name="Phone_number" class="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" id="ddlphone" placeholder="Phone Number*">
                            <div class="flex justify-between items-center pt-2">
                                <a onclick="gotocrt()" class="h-12 w-24 text-blue-500 text-xs font-medium">Return to cart</a>
                                <button onclick="valid()" type="submit" class="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Confirm & Continue to Shopping </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</asp:Content>
