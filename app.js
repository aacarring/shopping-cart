document.addEventListener('DOMContentLoaded', function() {

    const addItemBtn = document.querySelectorAll('.content .drinks .beverage button');
    const cart= document.querySelector('.content .shopping-cart .cart-items');
    const total = document.querySelector('.content .shopping-cart .total p');
    const checkoutBtn = document.querySelector('.content .shopping-cart .checkout');
    let totalCount = 0;
    
    function addItem() {
        let item = this.parentElement;
        let nameSpan  = item.getElementsByClassName('drink-name');
        let priceSpan = item.getElementsByClassName('price');
        let itemName = nameSpan[0].textContent;
        let itemPrice = parseFloat(priceSpan[0].textContent.replace('$', ''));
        
    
        let order = document.createElement('div');
        order.classList.add('order');
        order.innerHTML = `
        <span class="order-item">${itemName}</span>
        <span class="order-price">$${itemPrice}</span>
        <button class="delete">Delete</button>
        `
        cart.appendChild(order);
        totalCount += itemPrice;
        total.textContent = `Total: $${totalCount.toFixed(2)}`;
        
        const deleteBtn = document.querySelectorAll('.content .shopping-cart .order .delete');
        deleteBtn.forEach(btn => btn.addEventListener('click', deleteItem));
    }

    function deleteItem(event) {
        event.preventDefault();
        let deleteClicked = event.target;
        let deletePrice = deleteClicked.parentElement.getElementsByClassName('order-price');
        let priceToSubtract = parseFloat(deletePrice[0].textContent.replace('$', ''));
        totalCount -= priceToSubtract;
        total.textContent = `Total: $${(totalCount).toFixed(2)}`; 
        deleteClicked.parentElement.remove();
    }
    
    function clearCart() {
        totalCount = 0;
        total.textContent = "Total: $0.00";
        cart.innerHTML = "";
    }
    
    function checkoutMsg() {
        if (totalCount < 1) return;
        alert("We have recieved your order and will begin preparing your delivery. Thanks for choosing Blaue Blume Bevery!");
        clearCart();
    }
    
    addItemBtn.forEach(btn => btn.addEventListener('click', addItem));
    checkoutBtn.addEventListener('click', checkoutMsg);

})