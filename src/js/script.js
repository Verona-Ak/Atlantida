'use strict';
// Страница Home
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

    function increase_padding_wrapper(){
        if(currentURL=='post-one.html' || currentURL=='post-two.html' || currentURL=='post-three.html' || currentURL=='post-four.html' || currentURL=='post-five.html') {
            let wrapper = document.querySelector('.wrapper');
            wrapper.style.paddingBottom = '151px';
        }
    }
    increase_padding_wrapper();

});

// Страница Blog
window.addEventListener('DOMContentLoaded', ()=> {
    // Переключение страниц с блогами на второй странице сайт "Blog with slidebar"
    let parentForPages = document.querySelector('.main-blog__switch'),
        pagesAll = document.querySelectorAll('.main-blog__page'),
        next = document.querySelector('.main-blog__next'),
        prev = document.querySelector('.main-blog__prev'),
        wrappers = document.querySelectorAll('.main-blog__wrapper');

    // Создаём переключатели для wrappers-ов и скрываем
    let quantity_for_addition = wrappers.length - pagesAll.length;
    for (let i = 0; i < quantity_for_addition; i++) {
        let page = document.createElement('div');
        page.classList.add('main-blog__page');
        page.textContent = pagesAll.length+1;
        parentForPages.insertBefore(page, next);
        pagesAll = document.querySelectorAll('.main-blog__page');
        page.style.display = 'none';
    }

    function nullation() {
        // Удаление класса active у всех кнопок-переключателей страниц
        pagesAll.forEach(function(item) {
            item.classList.remove('main-blog__page_active');
        });
    }
    function wrapper_toBlock() {
        // Все wrappers-ы none
        wrappers.forEach(function(item){
            item.style.display = 'none';
        });
        // Block тот wrappwrs, кот. соответсвует индексу активной кнопки
        pagesAll.forEach(function(item, i) {
            if (item.classList.contains('main-blog__page_active')){
                wrappers[i].style.display = 'block';
            }
        });
    }

    parentForPages.addEventListener('click', (e)=> {
        if (e.target && e.target.classList.contains('main-blog__page')) {
            nullation();
            // Добавление класса active выбранной кнопке
            e.target.classList.add('main-blog__page_active');
            wrapper_toBlock();
        }
    });

    next.addEventListener('click', ()=> {
        let index; // индекс активного на данный момент эл-а(кнопки)
        pagesAll.forEach(function(item, i) {
            if (item.classList.contains('main-blog__page_active')){
                item.classList.remove('main-blog__page_active');
                index = i;
                return index;
            }
        });
        console.log(index);
        if(index < 2) {
            pagesAll[index+1].classList.add('main-blog__page_active');
            wrapper_toBlock();
        } else if (index >= 2 && index < pagesAll.length-1) {
            prev.style.display = 'block';
            pagesAll[index+1].classList.add('main-blog__page_active');
            pagesAll.forEach(function(item, i) {
                if(i <= ((index+1)-3)) {
                    item.style.display = 'none';
                } else if (i == (index+1)) {
                    item.style.display = 'block';
                }
            });
            wrapper_toBlock();
        } else if (index >= pagesAll.length-1) {
            pagesAll[index].classList.add('main-blog__page_active');
        }

    
    });

    prev.addEventListener('click', ()=> {
        let index; // индекс активного на данный момент эл-а(кнопки)
        pagesAll.forEach(function(item, i) {
            if (item.classList.contains('main-blog__page_active')){
                item.classList.remove('main-blog__page_active');
                index = i;
                return index;
            }
        });
        console.log(index);
        if (index > (pagesAll.length-1)-3) {
            pagesAll[index-1].classList.add('main-blog__page_active');
            wrapper_toBlock();
        } else if (index <= (pagesAll.length-1)-3) {
            pagesAll[index-1].classList.add('main-blog__page_active'); 
            pagesAll.forEach(function(item, i) {
                if(i <= ((index+1)-3)) {
                    item.style.display = 'none';
                } else if (i == (index+1)) {
                    item.style.display = 'block';
                }
            });
        }
    });
    
});