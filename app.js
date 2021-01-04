const addItemBtn = document.querySelectorAll('.content .drinks .beverage button');
const cart = document.querySelector('.content .shopping-cart .cart-items');
const total = document.querySelector('.content .shopping-cart .total p');
const checkoutBtn = document.querySelector('.content .shopping-cart .checkout');
let totalCount = 0;

// also need to add button to each cart item to remove

function addItem() {
    let item = this.parentElement;
    let nameSpan  = item.getElementsByClassName('drink-name');
    let priceSpan = item.getElementsByClassName('price');
    let itemName = nameSpan[0].textContent;
    let itemPrice = parseFloat(priceSpan[0].textContent.replace('$', ''));
    totalCount += itemPrice;

    cart.innerHTML += `
    <div class="order">
    <span class="order-item">${itemName}</span>
    <span class="order-price">$ ${itemPrice}</span>
    </div>
    `

    total.textContent = `Total: $${totalCount.toFixed(2)}`;
}

function clearCart() {
    totalCount = 0;
    total.textContent = "Total:";
    cart.innerHTML = "";
}

function checkoutMsg() {
    alert("We have recieved your order and will begin preparing your delivery. Thanks for choosing Blaue Blume Bevery! :)");
    clearCart();
}

addItemBtn.forEach(btn => btn.addEventListener('click', addItem));
checkoutBtn.addEventListener('click', checkoutMsg);