$( document ).ready(function() {


    $('.js-btn').click(function () {
        $topPart = $('.about-hide__top__right').outerHeight(true),
        $bottPart = $('.about-hide__bott__right').outerHeight(true),
        table = $('.js-about-hide');
        table.toggleClass('active-table');
        if (table.hasClass('active-table')){
            table.animate({
                height: $topPart + $bottPart
            }, 800)
            if($('html').attr('lang') == 'ru'){
                $('.js-btn .change-text').text('Свернуть');
            }
            else if($('html').attr('lang') == 'ua'){
                $('.js-btn .change-text').text('Згорнути');
            }
            else if($('html').attr('lang') == 'en'){
                $('.js-btn .change-text').text('Hide');
            }
            $('.js-ocon').css({
                transform: 'rotate(-90deg)'
            })
        }
        else {
            table.animate({
                height: 0
            }, 800)
            $('.js-ocon').css({
                transform: 'rotate(0deg)'
            })
            if($('html').attr('lang') == 'ru'){
                $('.js-btn .change-text').text('Узнать больше');
            }
            else if($('html').attr('lang') == 'ua'){
                $('.js-btn .change-text').text('Дізнатись більше');
            }
            else if($('html').attr('lang') == 'en'){
                $('.js-btn .change-text').text('Learn more');
            }
        }
    })
    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href'),
            link = $('.top__header__list__item a');
        link.each(function () {
            $(this).removeClass('active-link')
        });
        $(this).addClass('active-link');
        $('body').animate({
            scrollTop: $(el).offset().top - 60
        }, 1000);
        return false;
    });
    $('.js-mega-link').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top - 60
        }, 1000);
        return false;
    });
    $(window).scroll(function()
    {
        if($(window).scrollTop() > 100){
            $('.js-header').addClass('active-scroll');
            $('.js-logo').attr('src', 'images/logo-scroll.png');
            $('.header-btn').css({
                display: 'inline-block'
            });
        }
        else {
            $('.js-header').removeClass('active-scroll');
            $('.js-logo').attr('src', 'images/logo.png');
            $('.header-btn').css({
                display: 'none'
            });
        }
    });
    $('.js-vacansy').click(function () {
        $('.icon-choovak').each(function () {
            $(this).removeClass('active-choovak');
        });
        $(this).find('.icon-choovak').addClass('active-choovak');
        $('.you-need').each(function () {
            $(this).css({
                display: 'none'
            })
        });
        $('.you-need').eq($(this).index()).css({
            display: 'table'
        })

    });
    $(window).scroll(function(){
        $('.js-header').css('left', 0 - $(this).scrollLeft());
    });
});
