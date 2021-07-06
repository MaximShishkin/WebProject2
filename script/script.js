// Вызов слайдера в секции - основной контент сайта
$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
});

// Вызов слайдера в секции - команда
$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        controls: false,
    });
});

// Вызов слайдера в секции - партнёры
$(document).ready(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 300,
        itemMargin: 25,
        touch: true
    });
});

// Вызов плагина для открытия карты
$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:'',
    });
});

// Вызов плагина для отображения портфолио
$(function() {
    let filterList = {
        init: function() {
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
            });
        },
    };
    filterList.init();
});

// Скрипты для меню
// Плавное перемещение к секции
$(document).ready(function(){
    $(".primary-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
  });

// Сворачивание полосы меню
$(document).ready(function($){
    var headerHeight = $(".topheader").height();
    $(window).on('scroll',
    {
        previousTop: 0
    },
    function(){
        var currentTop = $(window).scrollTop();
        if(currentTop < this.previousTop){//человек прокручивает в верх
            if(currentTop > 0 && $(".topheader").hasClass("is-fixed")){
                //пользователь прокрутил страницу и шапку уже сжали
                $(".topheader").addClass("is-visible");
            }else{
                $(".topheader").removeClass("is-fixed");
            }
        }else{//человек прокручивет вниз
            if(currentTop > headerHeight && !$(".topheader").hasClass("is-fixed")){
                $(".topheader").addClass("is-fixed");
            }
        }
        this.previousTop = currentTop;
    });

// Открытие полноэкранного меню
$('.primary-nav-trigger').on('click', function(){
	$('.menu-icon').toggleClass('is-clicked'); 
	$('.header').toggleClass('menu-is-open');
		
	if( $('.primary-nav').hasClass('is-visible') ) {
		$('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
			$('body').removeClass('overflow-hidden');
		});
	} else {
		$('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',function(){
			$('body').addClass('overflow-hidden');
		});	
	}
});
});

// отправку данных в файл send.php
$(document).ready(function() {
    $(".submit").on("click", function() {
        // Проверка полей на заполненность
        if($('#name').val() != '' && $('#email').val() != '')
        {
            fetch('send.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: $("#send_form").serialize(),
            }).then((response) => response.json())
            .then((data) => {
                if(data.status === 'ok') {
                    // если передача успешна
                    // добавим зелёную рамку
                    $("#send_form").addClass("send_success");
                    // плавное исчезновение
                    setTimeout(() => $("#send_form").removeClass("send_success"),4000);
                }
                if(data.status === 'error') {
                    // если передача не удалась
                    // добавим красную рамку
                    $("#send_form").addClass("send_fail");
                    // плавное исчезновение
                    setTimeout(() => $("#send_form").removeClass("send_fail"),4000);
                }
            });   
        } else {
            alert("Заполните обязательные поля!")
        }
    });
});