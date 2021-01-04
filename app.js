const addItemBtn = document.querySelectorAll('.content .drinks .beverage button');
const cart = document.querySelector('.content .shopping-cart .cart-items');
const total = document.querySelector('.content .shopping-cart .total p');
const checkoutBtn = document.querySelector('.content .shopping-cart .checkout');
let totalCount = 0;

//need to add functionality to remove items from list by clicking delete btn

function addItem() {
    let item = this.parentElement;
    let nameSpan  = item.getElementsByClassName('drink-name');
    let priceSpan = item.getElementsByClassName('price');
    let itemName = nameSpan[0].textContent;
    let itemPrice = parseFloat(priceSpan[0].textContent.replace('$', ''));
    totalCount += itemPrice;

    let orderHTML = `
    <div class="order">
    <span class="order-item">${itemName}</span>
    <span class="order-price">$${itemPrice}</span>
    <button class="delete">Delete</button>
    </div>
    `
    cart.innerHTML += orderHTML;

    total.textContent = `Total: $${totalCount.toFixed(2)}`;

    function deleteItem() {
        ////////////////
    }

    let deleteBtn = document.querySelector('.content .shopping-cart .order .delete');
    deleteBtn.addEventListener('click', deleteItem);
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