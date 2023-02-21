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