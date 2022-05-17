(() => {
    const menuItems = document.querySelectorAll('.menu__item');

    for (const item of menuItems) {
        const button = item.querySelector('.menu__button');
        button.addEventListener('click', function(){
            menuItems.forEach((el) => {
                el.classList.remove('--js-active');
            })
            item.classList.add('--js-active');
        })
    }
})()