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

    //Background main

    const main = document.querySelector('.main');
    const backgrounds = [
        "url('img/bg/cleaning.jpeg')",
        "url('img/bg/edge.jpeg')",
        "url('img/bg/milk.jpeg')",
        "url('img/bg/tone.jpeg')"
    ];



    function changeBgMain() {
        let i = 0;
        if (window.screen.width > 992) {
            main.style.backgroundImage = "url('img/bg/milk.jpeg')";
            function changeBackgroundDesc() {
                main.style.backgroundImage = backgrounds[i];
                i = (i + 1) % backgrounds.length; // Переход к следующему фону
                main.style.webkitTransition = '0.6s';
            }
        } else {
            main.style.backgroundImage = "url('img/milk_blue.jpeg')";
        }
        setInterval(changeBackgroundDesc, 5000);
    }
    changeBgMain();


    //Proects

    const portfolioItem = document.querySelectorAll('[data-item]');
    const portfolioBtn = document.querySelector('.portfolio_btn-blue');
    let btnClose = false;
    
    portfolioBtn.addEventListener('click', () => {
    
        if (btnClose === false){
            portfolioItem.forEach((item) =>{
                item.classList.add('show');
                item.classList.remove('hide');
                btnClose = true;
            });
            portfolioBtn.innerText='Скрыть';
        }
        else{
            portfolioItem.forEach((item) =>{
                item.classList.add('hide');
                item.classList.remove('show');
                btnClose = false;
            });
            portfolioBtn.innerText='Показать ещё';
        }
    });


    //Guideline


    function changeGuidelineImg() {
        const guidelineImg = document.querySelector('.guideline_img');
        const itemImg = [
            "url('img/guideline.jpeg')",
            "url('img/guideline_2.jpeg')"
        ];
        let i = 0;
        function img() {
            guidelineImg.style.backgroundImage = itemImg[i];
            i = (i + 1) % itemImg.length;
            guidelineImg.style.webkitTransition = '0.6s';
        }
        setInterval(img, 5000);
    }
    changeGuidelineImg();
});




