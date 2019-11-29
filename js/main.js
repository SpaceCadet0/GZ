    //menu scroll
    const anchors = document.querySelectorAll('a[href*="#m-"]')

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
    function ScrollUp() {
        var t, s;
        s = document.body.scrollTop || window.pageYOffset;
        t = setInterval(function () {
            if (s > 0) window.scroll(1, s -= 50);
            else clearInterval(t)
        }, 1);
    }



    //appear
    var div = document.getElementById('up__btn');
    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            div.classList.add('visible');
        } else if (window.pageYOffset < 100) {
            div.classList.remove('visible');
        }
    };

    //menu    
    let hamburger = document.querySelector('.menu__toggle');
    let menu = document.querySelector('.menu__items');

    const toggleMenu = () => {
        menu.classList.toggle('d-block');
    }

    hamburger.addEventListener('click', e => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', e => {
        let target = e.target;
        let its_menu = target == menu || menu.contains(target);
        let its_hamburger = target == hamburger;
        let menu_is_active = menu.classList.contains('d-block');

        if (!its_menu && !its_hamburger && menu_is_active) {
            toggleMenu();
        }
    })

    //callback
    $("#submit").click(function() { 
        var name = $('input[name=text]').val(); 
        var tel = $('input[name=phone]').val();
        var otpravka = true;
        if(name==""){ 
        otpravka = false;
        }
        if(tel==""){ 
        otpravka = false;
        }
        if(otpravka) 
        {
       
        dannie = {'polz_name':name, 'polz_tel':tel};
        $.post('senda.php', dannie, function(otvet){ 
        rezultat = '<div style="color:#D80018;">'+otvet.text+'</div>';
        $("#form_result").hide().html(rezultat).slideDown();
        }, 'json'); 
        }
        });



    //tabs
    var tab; // заголовок вкладки
    var tabContent; // блок содержащий контент вкладки


    window.onload = function () {
        tabContent = document.getElementsByClassName('tab__panel');
        tab = document.getElementsByClassName('tab__title');
        hideTabsContent(1);
    }

    document.getElementById('tabs').onclick = function (event) {
        let target = event.target;
        if (target.className == 'tab__title') {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }

    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add("hide");
            tab[i].classList.remove('tab__title--active');
        }
    }

    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('tab__title--active');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    //preloader

    $(window).on('load', function () {
        var $preloader = $('#p_prldr'),
            $svg_anm   = $preloader.find('.svg_anm');
        $svg_anm.fadeOut();
        $preloader.delay(500).fadeOut('slow');
    });