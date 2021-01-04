const addItemBtn = document.querySelectorAll('.content .drinks .beverage button');

function addItem() {
    let item = this.parentElement;
    let nameSpan  = item.getElementsByClassName('drink-name');
    let priceSpan = item.getElementsByClassName('price');
    let itemName = nameSpan[0].textContent;
    let itemPrice = parseFloat(priceSpan[0].textContent.replace('$', ''));

   

}

addItemBtn.forEach(btn => btn.addEventListener('click', addItem));