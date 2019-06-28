'use strickt';

let link = document.querySelector('.address-btn');
let modal = document.querySelector('.modal');
let closeLink = modal.querySelector('.modal-close');

link.addEventListener('click',function(e){
   e.preventDefault();
    modal.classList.add('modal-show');
});

closeLink.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.remove('modal-show');
})

window.addEventListener('keydown',function(e){
    e.keyCode===27 && modal.classList.contains('modal-show') && modal.classList.remove('modal-show');
})