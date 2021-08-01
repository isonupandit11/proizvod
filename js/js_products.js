$(function () {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => showproducts(json))
});

function showproducts(res) {
    for (var i = 0; i < res.length; i++) {
        var row = '<div class="lg:w-1/4 md:w-1/2 p-4 w-full">';
        row += '<a class="block relative h-48 rounded overflow-hidden"><img alt="ecommerce" class="object-cover object-center w-full h-full block"  src="' + res[i].image + '"></a>';
        row += '<div class="mt-4">';
        row += '<h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">' + res[i].category + '</h3>';
        row += '<h2 class="text-gray-900 title-font text-lg font-small">' + res[i].title + '</h2>';
        row += '<div>'
        row += '<lable class="mt-1">$' + res[i].price + '</lable>';
        row += '<button  onclick="addtocart(\'' + res[i].image + '\',\'' + res[i].title + '\',\'' + res[i].price + '\')" class="inline-flex ml-40 items-center relative bg-green-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-white mt-4 md:mt-0">Add To Cart</Button>';
        row += '</div>'
        row += '</div>';
        row += '</div>';
        $("#lstproduts").append(row)
    }
}

function addtocart(image, titile ,price) {
    $.ajax({
        type: "POST",
        url: "CheckOut.aspx/usercartdata",
        data: "{ image:'" + image + "',titile:'" + titile + "',price:'" + price + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            toastr.info('Added To Cart Successfully');
            return false;
        },
        error: function (data) {
        }
    });
}