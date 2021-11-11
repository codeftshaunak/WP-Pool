const navClick = () => {
        const burger = document.querySelector('.humbargar');
        const navlink = document.querySelector('.nav__items');
        console.log(navlink);
        burger.addEventListener('click', () => {
                navlink.classList.toggle('nav__active');
                burger.classList.toggle('toggle');
        })
}

const allFunction = () => {
        navClick();
}

allFunction();