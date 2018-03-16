$(function(){

    var $window = $(window);

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


    //Slick slider
    $('.property-slider').slick({
          infinite:false,
          dots:false,
          arrows:true,
          nextArrow: $('.next_btn'),
          prevArrow: $('.prev_btn'),
          slidesToShow:2,
          slidesToScroll:2
    });

    $('.home-slider').slick({
          infinite:false,
          dots:false,
          arrows:true,
          nextArrow: $('.next_btn'),
          prevArrow: $('.prev_btn'),
          slidesToShow:1,
          slidesToScroll:1
    });


	
	
});


