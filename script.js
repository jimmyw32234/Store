var products= [];
var prices= [];


$(".addnewitem").click(function(){
    var newItems=$(".theimageurl").val();
    var newProduct=$(".product").val();
    var newPrice=$(".theprice").val();
$(".list").append("<div class='item'>" + "<img src=" + newItems + ">" + "</p>" +"<p>" + newProduct + "</p>" + "<p>" + "$" + newPrice + "</div>"  );


products.push(newProduct);
var numOfItems= products.length;
$(".items").text(numOfItems);



var addedcost=$(".theprice").val();
prices.push(addedcost);
var totalPrice= 0;
prices.forEach(function(price){
    var priceAsNumber=parseInt(price);
    totalPrice= totalPrice + priceAsNumber;
    $(".thetotalPrice").text("$" + totalPrice);   
   
$(".checkout").click(function(){
    alert("Thanks for purchasing "+newProduct+" and everything else in your cart! Your total is $"+totalPrice+".");   
});
});
});


