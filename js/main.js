    //preloader

       $(window).on('load', function () {
        var $preloader = $('#page-preloader'),
            $spinner   = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut(500);
    });
   
   
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
    });

    //callback
    var p = $('.window_wrap');
    $('.telButton').click(function() {
     p.css({'display':'block'}).hide().fadeIn(1000);
    });
    
    $('.window_close').click(function() {
        p.css({'display':'none'});
       });
       
    p.click(function(event) {
    if(event.target == this) {
    $(this).css({'display':'none'});
    }
    });

    $('#telButton').click(function(event) {
 
        event.preventDefault();
       
        var tel = $('#telForm').val();
       
        $('#backPhone').fadeOut(500,function() {
       
       $('<p>Отправка!</p>').appendTo($('.window')).hide().fadeIn(300,function() {
       
       $.ajax({
       
       type: 'POST',
       url: 'srv.php',
       data: 'tel=' + tel,
       dataType: 'json',
       success : function (json) {
       if(json.error) {
       $('.window p').last().remove();
       $('#backPhone').fadeIn(300, function() {
       alert(json.error);
       });
       }
       else {
       $('.window p').last().fadeOut(300, function() {
       
       $(this).text('Заявка принята!').fadeIn(300, function () {
       
       $('.window_wrap').delay(1500).fadeOut(300);
       
       });
       
       });
       }
       }
       
       });
       
       });
       
        });
       
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
        var target = event.target;
        if (target.className == 'tab__title') {
            for (var i = 0; i < tab.length; i++) {
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

