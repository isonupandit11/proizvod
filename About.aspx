<%@ Page Title="" Language="C#" MasterPageFile="~/Default.Master" AutoEventWireup="true" CodeBehind="About.aspx.cs" Inherits="proizvod.About" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
         <h1 class="title-font text-4xl font-medium text-gray-900 mt-6 mb-6">Founders</h1>
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1201x501">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Sonu Sharma</h2>
        <button onclick="location.href='https://www.instagram.com/isonupandit11/';" class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">View Profile</button>
      </div>
      <div class="sm:w-1/2 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1202x502">
        </div>
        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Deepti Chaudhary</h2>
        <button onclick="location.href='https://www.instagram.com/deepti_ml/';" class="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">View Profile</button>
      </div>
    </div
  </div>
</section>
</asp:Content>
