const addToCartbutton = document.querySelectorAll(".addToCartbtn")


addToCartbutton.forEach(button => {
    button.addToCartbutton("click", () => {
        window.location.href = "../checkout/checkOut.html"
        alert("item added to cart")
    })
});

