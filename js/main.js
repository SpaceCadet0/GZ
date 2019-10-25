    //menu scroll
        
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href')

            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
 
        
    // scrollup
    function ScrollUp(){
        var t,s;
        s=document.body.scrollTop||window.pageYOffset;
        t=setInterval(function(){if(s>0)window.scroll(1,s-=50);else clearInterval(t)},1);
    }



    //appear
    var div = document.getElementById('up__btn');
    window.onscroll = function() {
        if (window.pageYOffset > 100) {
            div.classList.add('visible');
        }
        else if (window.pageYOffset < 100) {
            div.classList.remove('visible');
        }
    };

    //menu    
    let hamburger = document.querySelector('.menu__toggle');
    let menu = document.querySelector('.menu__items');

    const toggleMenu = () => {
        menu.classList.toggle('active');
    }

    hamburger.addEventListener('click', e => {
        e.stopPropagation();

        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target == menu || menu.contains(target);
        let its_hamburger = target == hamburger;
        let menu_is_active = menu.classList.contains('active');

        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenu();
        }
    })