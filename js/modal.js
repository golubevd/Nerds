'use strickt';

let link = document.querySelector('.address-btn');
let modal = document.querySelector('.modal');
let closeModal = modal.querySelector('.modal-close');

link.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.add('modal-show');
});

closeModal.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.remove('modal-show');
});

window.addEventListener('keydown', function (e) {
    e.keyCode === 27 && modal.classList.contains('modal-show') && modal.classList.remove('modal-show');
});