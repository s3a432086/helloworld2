// import {URLSearchParams} from '@angular/http';
jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>") :
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  $(".carousel").swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      if (direction == 'left') $(this).carousel('next');
      if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll:"vertical"
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });



  //測試
  $('#submit2').on('click', () => {
    this.myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    });

    this.myModal.show();
  });

  //var x = document.getElementById("facts-btn-A").getAttribute("src");
  $('#btn-white-cap').on('click', () => {
    document.getElementById("facts-btn-A").src="../img/keyboard/btn/A.png";
  });

  $('#btn-black-cap').on('click', () => {
    document.getElementById("facts-btn-A").src="../img/keyboard/btn/B.png";
  });

  
  $('#btn-create-new-order').on('click', () => {

      const name = 'oxxo';
      const age = 18;
      // 有興趣的可以使用下方的網址測試
      const uri = 'https://jacktechtw.com/back.php?table=TEST&user=STEVE';

      fetch(uri, {method:'GET'})
      .then(res => {
          return res.text();   // 使用 text() 可以得到純文字 String
      }).then(result => {
          console.log(result); // 得到「你的名字是：oxxo，年紀：18 歲。」
          alert(result);
      });


  });


  



  //flipbook
  var flipbookEL = document.getElementById('flipbook');

  $(window).resize(function(){
    // $(flipbookEL).turn('size', window.innerHeight*1.15, window.innerHeight*0.85);
    var width  = $(window).width(),
        height = $(window).height();

    // if (Math.abs(height-width)>300){
      if (width >= height) {
        $(flipbookEL).turn('size', height*1.13, height*1.13*0.70706);
        // $(flipbookEL).turn('left', (width/2)-(height*1.13*0.70706));
        // $(flipbookEL).css({top: 20, left: (width/2)-(height*1.13*0.70706)});
      } else {
        $(flipbookEL).turn('size', width*0.5*1.414305, width*0.5);
        // $(flipbookEL).turn('left', (width/2)-(width*0.5));
        // $(flipbookEL).css({top: 20, left: (width/2)-(width*0.5)});
      };
    // }
    
    
  });

  $(function loadAPP() {
    for (let i = 1; i < 29;i++) {
      let id = i;
      let div = document.createElement('div');
      div.className = 'page';
      div.innerHTML = '<img id="img" src="img/dm/202211/' + id + '.jpg" draggable="false" alt="123" />';
      flipbook.append(div);
    }

    $(flipbookEL).turn({
        autoCenter: true
    });

    // $(flipbookEL).turn('size', window.innerHeight*1.15, window.innerHeight*0.85);



  });


  // $('#img').on('click', function () {
  //   alert('ok');
  //   // $('#img-box').find('img').attr('src', 'img/dm/202211/1.jpg');
  //   // $('#dialog-bg').show();//弹出层显示
  // });

  // //弹出层隐藏
  // $('#dialog-bg').on('click', function () {
  //   // $(this).hide();//
  // });


//聯絡我們
// $('#icon-ig').on('click', () => {
//   window.open("https://instagram.com/jacktechtw?igshid=YmMyMTA2M2Y=");
// });


//zoom
// Zoom.js

$('.magazine-viewport').zoom({
  flipbook: $('.magazine'),

  max: function() { 
    
    return largeMagazineWidth()/$('.magazine').width();

  }, 

  when: {

    swipeLeft: function() {

      $(this).zoom('flipbook').turn('next');

    },

    swipeRight: function() {
      
      $(this).zoom('flipbook').turn('previous');

    },

    resize: function(event, scale, page, pageElement) {

      if (scale==1)
        loadSmallPage(page, pageElement);
      else
        loadLargePage(page, pageElement);

    },

    zoomIn: function () {

      $('.thumbnails').hide();
      $('.made').hide();
      $('.magazine').removeClass('animated').addClass('zoom-in');
      $('.zoom-icon').removeClass('zoom-icon-in').addClass('zoom-icon-out');
      
      if (!window.escTip && !$.isTouch) {
        escTip = true;

        $('<div />', {'class': 'exit-message'}).
          html('<div>Press ESC to exit</div>').
            appendTo($('body')).
            delay(2000).
            animate({opacity:0}, 500, function() {
              $(this).remove();
            });
      }
    },

    zoomOut: function () {

      $('.exit-message').hide();
      $('.thumbnails').fadeIn();
      $('.made').fadeIn();
      $('.zoom-icon').removeClass('zoom-icon-out').addClass('zoom-icon-in');

      setTimeout(function(){
        $('.magazine').addClass('animated').removeClass('zoom-in');
        resizeViewport();
      }, 0);

    }
  }
});

// Zoom event

if ($.isTouch)
  $('.magazine-viewport').bind('zoom.doubleTap', zoomTo);
else
  $('.magazine-viewport').bind('zoom.tap', zoomTo);


// Using arrow keys to turn the page

$(document).keydown(function(e){

  var previous = 37, next = 39, esc = 27;

  switch (e.keyCode) {
    case previous:

      // left arrow
      $('.magazine').turn('previous');
      e.preventDefault();

    break;
    case next:

      //right arrow
      $('.magazine').turn('next');
      e.preventDefault();

    break;
    case esc:
      
      $('.magazine-viewport').zoom('zoomOut');	
      e.preventDefault();

    break;
  }
});
//zoom end

  


});



window.onload = function(){
  //
};

function loadApp() {
  // Regions

	if ($.isTouch) {
		$('.magazine').bind('touchstart', regionClick);
	} else {
		$('.magazine').click(regionClick);
	}

	// Events for the next button

	$('.next-button').bind($.mouseEvents.over, function() {
		
		$(this).addClass('next-button-hover');

	}).bind($.mouseEvents.out, function() {
		
		$(this).removeClass('next-button-hover');

	}).bind($.mouseEvents.down, function() {
		
		$(this).addClass('next-button-down');

	}).bind($.mouseEvents.up, function() {
		
		$(this).removeClass('next-button-down');

	}).click(function() {
		
		$('.magazine').turn('next');

	});

	// Events for the next button
	
	$('.previous-button').bind($.mouseEvents.over, function() {
		
		$(this).addClass('previous-button-hover');

	}).bind($.mouseEvents.out, function() {
		
		$(this).removeClass('previous-button-hover');

	}).bind($.mouseEvents.down, function() {
		
		$(this).addClass('previous-button-down');

	}).bind($.mouseEvents.up, function() {
		
		$(this).removeClass('previous-button-down');

	}).click(function() {
		
		$('.magazine').turn('previous');

	});


	resizeViewport();

	$('.magazine').addClass('animated');
};

// var flipbookEL = document.getElementById('flipbook');

// window.addEventListener('resize', function (e) {
// 	flipbookEL.style.width = '';
//   flipbookEL.style.height = '';
//   $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
// });

// $(flipbookEL).turn({
//     autoCenter: true
// });
