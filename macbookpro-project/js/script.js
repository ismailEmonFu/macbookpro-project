function getAmounts(givenId) {
    const getProduct = document.getElementById(givenId);
    const getProductPrice = parseFloat(getProduct.innerText);
    // console.log(typeof (getProductPrice));
    return getProductPrice;
}

function updateTotalPrice() {
    const memoryPrice = getAmounts('ex-memory');
    const storagePrice = getAmounts('ex-store');
    const deliveryCharge = getAmounts('delivery');
    const totalPrice = 1299 + memoryPrice + storagePrice + deliveryCharge;
    document.getElementById('subtotal').innerText = totalPrice;
    document.getElementById('total-cost').innerText = totalPrice;
}

function verifyPromoCode() {
    const getCode = document.getElementById('prome-code').value;
    if (getCode == "stevekaku") {
        const getTotalPrice = getAmounts('total-cost');
        const reducedPrice = getTotalPrice - (0.2 * getTotalPrice);
        document.getElementById('total-cost').innerText = reducedPrice;
    }
    document.getElementById('prome-code').value = '';
}

document.getElementById('m8GB-btn').addEventListener('click', function () {
    document.getElementById('ex-memory').innerText = 0;
    updateTotalPrice();
})


document.getElementById('m16GB-btn').addEventListener('click', function () {
    document.getElementById('ex-memory').innerText = 180;
    updateTotalPrice();
    // getAmounts('ex-memory');
    // const updatedPrice = parseFloat(price);
    // console.log(typeof (price));
    // console.log(typeof (updatedPrice));
})


document.getElementById('ssd256-btn').addEventListener('click', function () {
    document.getElementById('ex-store').innerText = 0;
    updateTotalPrice();
})


document.getElementById('ssd512-btn').addEventListener('click', function () {
    document.getElementById('ex-store').innerText = 100;
    updateTotalPrice();
})


document.getElementById('ssd1-btn').addEventListener('click', function () {
    document.getElementById('ex-store').innerText = 180;
    updateTotalPrice();
})


document.getElementById('free-btn').addEventListener('click', function () {
    document.getElementById('delivery').innerText = 0;
    updateTotalPrice();
})


document.getElementById('charge-btn').addEventListener('click', function () {
    document.getElementById('delivery').innerText = 20;
    updateTotalPrice();
})


document.getElementById('apply-promo').addEventListener('click', function () {

})
