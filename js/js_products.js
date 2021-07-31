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
        row += '<h2 class="text-gray-900 title-font text-lg font-medium">' + res[i].title + '</h2>';
        row += '<p class="mt-1">$' + res[i].price + '</p>';
        row += '</div>';
        row += '</div>';
        $("#lstproduts").append(row)
    }
}
