window.addEventListener('DOMContentLoaded', () => {
    //Hamburger
    const hamburger = document.querySelector('.main_hamburger');
    const close = document.querySelector('.main_menu-close');
    const menu = document.querySelector('.main_menu');
    const list = document.querySelectorAll('.main_menu-list');
    const link = document.querySelectorAll('.main_menu-link');

    function openMenu() {
        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
        })
    }
    openMenu();
    function closeMenu() {
        close.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    }
    closeMenu();

    for (i = 0; i < link.length; i++) {
        link[i].addEventListener('click', () => {
            menu.classList.remove('active');
        })
    }
});


