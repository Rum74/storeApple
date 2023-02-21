//-------------Slider--------
const btnRight = document.querySelector('.fa-angle-right')
const btnLeft = document.querySelector('.fa-angle-left')
const imgNumber = document.querySelectorAll('.slider-content-lefl-top img')
let index = 0

btnRight.addEventListener("click", function () {
    index = index + 1
    if (index > imgNumber.length - 1) {
        index = 0
    }
    document.querySelector('.slider-content-lefl-top').style.right = index * 100 + '%'
})

btnLeft.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumber.length - 1
    }
    document.querySelector('.slider-content-lefl-top').style.right = index * 100 + '%'
})

//-------------Slider 1--------
const imgNumberLi = document.querySelectorAll('.slider-content-lefl-bottom li')
imgNumberLi.forEach(function (image, index) {
    image.addEventListener("click", function () {
        removeActive()
        document.querySelector('.slider-content-lefl-top').style.right = index * 100 + '%'
        image.classList.add('actives')
    })
})

function removeActive() {
    let imgActive = document.querySelector('.actives')
    imgActive.classList.remove('actives')
}
//-------------Slider ImgAuto--------
function imgAuto() {
    index = index + 1
    if (index > imgNumber.length - 1) {
        index = 0
    }
    removeActive()
    imgNumberLi[index].classList.add('actives')
    document.querySelector('.slider-content-lefl-top').style.right = index * 100 + '%'
}
setInterval(imgAuto, 3000)

//-------------Slider Product--------

const btnRightProduct = document.querySelector('.fa-angle-right-product')
const btnLeftProduct = document.querySelector('.fa-angle-left-product')
const imgNumberProduct = document.querySelectorAll('.product-items')
// let index = 0

btnRightProduct.addEventListener("click", function () {
    index = index + 1
    if (index > imgNumberProduct.length - 1) {
        index = 0
    }
    document.querySelector('.product-items-container-content').style.right = index * 100 + '%'
})

btnLeftProduct.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumberProduct.length - 1
    }
    document.querySelector('.product-items-container-content').style.right = index * 100 + '%'
})

// -------------Cart-----------------
let popup_card = document.getElementById('popup_card');
let popup = document.querySelector('.popup_shopping');
let overlay = document.querySelector('.overlay');
let button = document.querySelector('button.button');
popup_card.addEventListener("click", () => {
    popup.classList.add('active');
    overlay.classList.add('active');
});
overlay.addEventListener("click", () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});
button.addEventListener("click", () => {
    popup.classList.remove('active');
    overlay.classList.remove('active');
});

// Thêm vào giỏ hàng
const btn = document.querySelectorAll('.cart-shopping')
btn.forEach(function(button, index) {
    // console.log(button, index)
    button.addEventListener("click", function(event) {
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productName = product.querySelector(".name").innerText
        var productPrice = product.querySelector(".price").innerText
        addcart(productName, productPrice)
    })
})

function addcart(productName, productPrice) {
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td>' + productName + '</td><td class="price">' + productPrice + '</td><td><input type="number" value="1" min="0"></td><td><a href="">Delete</a></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    cartTotal()
}
function cartTotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem.length)
    for(var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input").value
        console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        console.log(productPrice)
        totalA = inputValue * productPrice*1000000
        tolalB = totalA.toLocaleString('de-DE')
        console.log(tolalB)

    }
}