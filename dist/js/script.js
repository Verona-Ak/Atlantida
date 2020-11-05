'use strict';
window.addEventListener('DOMContentLoaded', ()=> {
    $('.carousel').carousel({
        interval: false,
        ride: false,
        touch: true,
        keyboard: false,
        wrap: true
    });

    // Расскрытие и скрытие информации о конкретном человеке в секции "ourteam"
    let parent = document.querySelector('.ourteam__photo'),
        item = document.querySelectorAll('.ourteam__item');

    parent.addEventListener('mouseover', function(e) {
        for (let i = 0; i < item.length; i++) {
            let img = item[i].querySelector('img'),
                inf = item[i].querySelector('.ourteam__inf');
            if(e.target && e.target == img) {
                let inf = item[i].querySelector('.ourteam__inf');
                inf.classList.toggle('ourteam__inf_active');
            }
        }
    });
    parent.addEventListener('mouseout', function(e) {
        for (let i = 0; i < item.length; i++) {
            let img = item[i].querySelector('img'),
                inf = item[i].querySelector('.ourteam__inf');
            if(e.target && e.target == img) {
                let inf = item[i].querySelector('.ourteam__inf');
                inf.classList.toggle('ourteam__inf_active');
            }
        }
    });

    // Портфолио
    let buttons = document.querySelectorAll('.portfolio__btn'),
        fog = document.querySelectorAll('.portfolio__fog');
    buttons[0].classList.add('portfolio__btn_click');
    buttons.forEach(function(item) {
        item.addEventListener('click', function(e) {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('portfolio__btn_click');
            }
            this.classList.add('portfolio__btn_click');
            for (let i = 0; i < fog.length; i++) {
                fog[i].classList.remove('portfolio__fog_active');
            }
            let value = item.value;
            if (value != 'all') {
                let portfolioItems = document.querySelectorAll('[data-theme]');
                for (let i = 0; i < portfolioItems.length; i++) {
                    if (portfolioItems[i].getAttribute('data-theme') != value) {
                        let fog = portfolioItems[i].querySelector('.portfolio__fog');
                        fog.classList.add('portfolio__fog_active');
                    }
                }
            } else {
                return;
            }
        });
    });

    

});
