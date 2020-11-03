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


});
