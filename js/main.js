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



    //carousel
    //  /* этот код помечает картинки, для удобства разработки */
    //  let i = 1;
    //  for(let li of carousel.querySelectorAll('li')) {
    //    li.style.position = 'relative';
    //    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    //    i++;
    //  }

    //  /* конфигурация */
    //  let width = 130; // ширина картинки
    //  let count = 3; // видимое количество изображений

    //  let list = carousel.querySelector('ul');
    //  let listElems = carousel.querySelectorAll('li');

    //  let position = 0; // положение ленты прокрутки

    //  carousel.querySelector('.prev').onclick = function() {
    //    // сдвиг влево
    //    position += width * count;
    //    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
    //    position = Math.min(position, 0)
    //    list.style.marginLeft = position + 'px';
    //  };

    //  carousel.querySelector('.next').onclick = function() {
    //    // сдвиг вправо
    //    position -= width * count;
    //    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
    //    position = Math.max(position, -width * (listElems.length - count));
    //    list.style.marginLeft = position + 'px';
    //  };