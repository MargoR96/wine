(() => {
    const teamUnits = document.querySelectorAll('.team__item');

    for (const teamUnit of teamUnits) {
        const name = teamUnit.querySelector('.name');
        name.addEventListener('click', function(){
            teamUnits.forEach((el) => {
                el.classList.remove('active');
            })
            teamUnit.classList.add('active');
    
        })
    }
})()