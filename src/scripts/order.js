(() => {

const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const modal = document.querySelector('.modal__order');
    modal.classList.add('--js-submit');
})

const buttonClose = document.querySelector('.close__button');

buttonClose.addEventListener('click', function(e) {
    e.preventDefault();
    const modal = document.querySelector('.modal__order');
    modal.classList.remove('--js-submit');
})

})()