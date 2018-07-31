$('.control').click( function(){
    $('body').addClass('search-active');
    $('.input-search').focus();
});

$('.icon-close').click( function(){
    $('body').removeClass('search-active');
});


    var search = $('#search'),
        sc = $('.search_container'),
        closebtn = $("#search").find('.icon').children(),
        sb = $('input[type="search"]');

    search.on('click', function(){
        if ( closebtn.hasClass('close') ) {
            sc.fadeOut(300);
            $('.rtoc').removeClass('close') && $('.rod').removeClass('close');
        } else{
            sc.fadeIn(300);
            $('.rtoc').addClass('close') && $('.rod').addClass('close')
        };
    });

    sc.keyup(function(event){
        if(event.keyCode == 13){
            window.open('https://google.com/?q=' + sb.val());
        }
    });
