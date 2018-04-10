$(function(){

    var $window       = $(window),    
        fsImg         = $('.img-fs'),
        startwidth    = 640, 
        startheight   = 360,
        ratio         = startheight/startwidth,
        imagewidth    = $(this).width(),
        imageheight   = $(this).height(),
        browserwidth  = $window.width(),
        browserheight = $window.height();

    $window.on('resize', function(){ 
        
        imagewidth    = $(this).width();
        imageheight   = $(this).height();
        browserwidth  = $window.width();
        browserheight = $window.height();
                    
        fsImage();  
                        
    });

    function fsImage(){
     
        if ((browserheight/browserwidth) > ratio){
            fsImg.height(browserheight);
            fsImg.width(browserheight / ratio);
        } else {
            fsImg.width(browserwidth);
            fsImg.height(browserwidth * ratio);
        };
        fsImg.css('left', (browserwidth - fsImg.width())/2);
        fsImg.css('top', (browserheight - fsImg.height())/2);

    };
    fsImage();  

    $window.on('load', function(){
        $('body').css({ opacity:'1' });
    });


    var raf           = requestAnimationFrame;
    var lastScrollTop = $window.scrollTop();

    if (raf) {
        loop();
    }

    function loop() {

        var scrollTop = $window.scrollTop();
        var y         = (scrollTop > lastScrollTop) ? 'down' : ((scrollTop === lastScrollTop) ? 'none' : 'up');
        var bottom    = $window.height() + scrollTop == $(document).height();

        if (lastScrollTop === scrollTop) {
            raf(loop);
            return;
        } else {
            lastScrollTop = scrollTop;
            raf(loop);
        }
        
        if( scrollTop > 130 ){
            //$('header').addClass('bg');
        }
        if( y == 'up' && scrollTop < 130 ){
            //$('header').removeClass('bg');
        }
        if( y == 'down' && scrollTop > 0 ){
            //$('header').addClass('hide');
        } else{
            //$('header').removeClass('hide');
        }
        lastScrollTop = scrollTop;
        /*
        if ( bottom ){
            $('header').removeClass('hide');
        }
        */
        
    }

    if( lastScrollTop > 200 ){
        //$('header').addClass('bg');
    }

	// Scrolling animation stuff
    var scrollTime = 1.5;
    var scrollDistance = 250;

    function smoothScroll(event){

        event.preventDefault();

        var delta       = event.originalEvent.wheelDelta/120;
        var scrollTop   = $window.scrollTop();
        var finalScroll = scrollTop - parseInt(delta*scrollDistance) * 3;
        var plax        = $('.plax');
        var plax2       = $('.plax2');
        var plax3       = $('.plax3');
        var plax4       = $('.plax4');

        TweenMax.to($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
            ease: Power3.easeOut,
            overwrite: 5                         
        }); 
        
    }
    $window.on("mousewheel", smoothScroll);

    $('.menu_btn').on('click', function(){

        $(this).toggleClass('active');
        $('nav').fadeToggle();

        if( $(this).hasClass('active') ){

            TweenMax.staggerFromTo($('nav li'), 1.2, {opacity:0, y:120}, {opacity:1, y:0, delay:0.2, ease:Expo.easeOut, overwrite:'all'}, 0.07);
            $('body').css({ overflow:'hidden'});
            $window.off("mousewheel");

        } else{

            $('body').css({ overflow:'visible'});
            $window.on("mousewheel", smoothScroll);

        } 

    });

    $('.team-thumb').on('click', function(){

        $(this).parent().find('.bio').fadeIn();
        $('body').css({ overflow:'hidden' });
        $window.off("mousewheel", smoothScroll);

    });
    $('.modal-close').on('click', function(){

        $(this).parent().fadeOut();
        $('body').css({ overflow:'scroll' });
        $window.on("mousewheel", smoothScroll);

    });


    //Slick slider

    if( $('.property-slider').length > 0 ){
        $('.property-slider').slick({
              infinite:false,
              dots:false,
              arrows:true,
              nextArrow: $('.next_btn'),
              prevArrow: $('.prev_btn'),
              slidesToShow:2,
              slidesToScroll:2
        });
    }
    
    if( $('.home-slider').length > 0 ){
        $('.home-slider').slick({
              infinite:false,
              dots:false,
              arrows:true,
              nextArrow: $('.next_btn'),
              prevArrow: $('.prev_btn'),
              slidesToShow:1,
              slidesToScroll:1
        });
    }
    if( $('.about-images-slider').length > 0 ){
        $('.about-images-slider').slick({
              dots:false,
              arrows:false,
              infinite: true,
              speed: 2000,
              fade: true,
              cssEase: 'linear',
              autoplay:true,
              autoplaySpeed: 4000,
        });
    }





    
/*
    function fadeLi(elem) {
        var delay = 11000;
        elem.fadeIn().delay(delay).fadeOut(1000, function () {
            if (elem.next().length > 0) {
                fadeLi(elem.next());
            } else {
                fadeLi(elem.siblings(':first'));
            }
        });
    }

    $(function () {
        $('.hero-copy-headlines li').hide();
        fadeLi($('.hero-copy-headlines li:first'));
    });
*/

/*
    function headlineFade(){

        $('.hero-copy-headlines li:first').fadeIn(1000).delay(5000).fadeOut(1000,function(){

            $('.hero-copy-headlines li:nth-child(2)').fadeIn(1000).delay(4000).fadeOut(1000,function(){

                $('.hero-copy-headlines li:nth-child(3)').fadeIn(1000).delay(9000).fadeOut(1000,function(){

                     $('.hero-copy-headlines li:last').fadeIn(1000).delay(1500).fadeOut(1000,function(){headlineFade();});

                });

            });

        })

    }
    headlineFade();
    
*/
   

	
	
});


