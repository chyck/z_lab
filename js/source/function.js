$( document ).ready(function() {
    $('.js-btn').click(function () {
        table = $('.js-about-hide');
        table.toggleClass('active-table');
        if (table.hasClass('active-table')){
            $('.js-btn .change-text').text('Свернуть');
            $('.js-ocon').css({
                transform: 'rotate(-90deg)'
            })
            table.animate({
                height: 736
            }, 800)
        }
        else {
            $('.js-ocon').css({
                transform: 'rotate(0deg)'
            })
            $('.js-btn .change-text').text('Узнать больше');
            table.animate({
                height: 0
            }, 800)
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
        }
        else {
            $('.js-header').removeClass('active-scroll');
        }
    });
    $('.js-vacansy').click(function () {
        $('.you-need').each(function () {
            $(this).css({
                display: 'none'
            })
        });
        $('.you-need').eq($(this).index()).css({
            display: 'table'
        })

    });
});
