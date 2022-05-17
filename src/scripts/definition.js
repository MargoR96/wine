
(() => {
    const buttonFoto = document.querySelectorAll('.foto__button');

    for (const foto of buttonFoto) {
        foto.addEventListener('click', function (e) {
            e.preventDefault();
            const modal = document.querySelector('.modal__initialisation');
            modal.classList.add('--js-submit');
    }
    ) 
    }

    const buttonClose = document.querySelector('.x__button');

    buttonClose.addEventListener('click', function(e) {
        e.preventDefault();
        const modal = document.querySelector('.modal__initialisation');
        modal.classList.remove('--js-submit');
    })
})()




