// 1. Create a variable to keep track of how many items are in the cart
let cartCount = 0;

// 2. Find the HTML elements using their "name tags" (IDs)
const addToCartButton = document.getElementById('add-to-cart-btn');
const cartCounterDisplay = document.getElementById('cart-counter');

// 3. Tell the button to listen for a click event
addToCartButton.addEventListener('click', function() {
    // This code runs EVERY time the button is clicked!
    
    // Add 1 to our total count
    cartCount = cartCount + 1;
    
    // Change the text inside the HTML counter to match our new total
    cartCounterDisplay.innerText = cartCount;
    
    // Optional: Pop up a little alert box just to prove it works
    alert("Item added to cart!");
});
