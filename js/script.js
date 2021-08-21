// memory price update function
function memory(price) {
    const getMemoryPrice = price;
    document.getElementById('memoryPrice').innerText = getMemoryPrice;
    total()     //update total
}

// storage price update function
function storage(price) {
    const getstoragePrice = price;
    document.getElementById('storagePrice').innerText = getstoragePrice;
    total()     //update total
}

// delivery price update function
function delivery(price) {
    const getdeliveryPrice = price;
    document.getElementById('deliveryPrice').innerText = getdeliveryPrice;
    total()     //update total
}

//update total
function total() {
    const bestPrice = document.getElementById('bestPrice').innerText;
    const memoryPrice = document.getElementById('memoryPrice').innerText;
    const storagePrice = document.getElementById('storagePrice').innerText;
    const deliveryPrice = document.getElementById('deliveryPrice').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    document.getElementById('totalPrice').innerText = totalPrice;
    document.getElementById('finalPrice').innerText = totalPrice;
}



//memory price update even listener
document.getElementById('memory8gb').addEventListener('click', function () {
    memory(0);
});
document.getElementById('memory16gb').addEventListener('click', function () {
    memory(180);
});

//storage price update even listener
document.getElementById('storage256gb').addEventListener('click', function () {
    storage(0);
});
document.getElementById('storage512gb').addEventListener('click', function () {
    storage(100);
});
document.getElementById('storage1tb').addEventListener('click', function () {
    storage(180);
});

//delivery price update even listener
document.getElementById('deliveryFree').addEventListener('click', function () {
    delivery(0);
});
document.getElementById('deliveryCost').addEventListener('click', function () {
    delivery(20);
});

//apply promo code
document.getElementById('applyCode').addEventListener('click', function () {

    const promoCode = 'stevekaku';
    const inputCode = document.getElementById('inputCode').value;

    if (inputCode.toLowerCase() == promoCode) {
        const getTotalprice = document.getElementById('totalPrice').innerText
        const finalPrice = (getTotalprice / 100) * 80;
        document.getElementById('finalPrice').innerText = finalPrice;
    }
})
