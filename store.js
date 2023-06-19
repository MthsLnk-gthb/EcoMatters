const storeItems = document.querySelectorAll(".cart")

 function addedToCart(){
    alert("You have added this product to cart")
}

storeItems.forEach(function(item) {
  item.addEventListener("click", addedToCart,);
})





