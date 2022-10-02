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
      this.http.get('https://jacktechtw.com/back.php?TABLE=TEST&USER=STEVE').subscribe(data => {
        var obj = JSON.parse(data);
        alert(obj.USER);
      })

      // console.log("GET");
      // let url = `${'https://jacktechtw.com/back.php'}/get`;
      // let search = new URLSearchParams();
      // search.set('TABLE', 'TEST');
      // search.set('USER', 'steve');
      // this.http.get(url, {search: search}).subscribe(res => {
      //   console.log(res.json())
      //   alert(res.json());
      // }
      // ); (1)


    // $.getJSON("back.php/TEST",function(data){
    //   var obj = JSON.parse(data);
    //   alert(obj.);
    });


    // var mysql  = require('mysql');  
 
    // var connection = mysql.createConnection({     
    //   host     : 'localhost',       
    //   // user     : 'jacktec1_jacktechtw',              
    //   // password : 'Xx2243601@',    
    //   user     : 'root',              
    //   password : '123456',     
    //   port: '3306',                   
    //   database: 'jacktec1_helloworld2' 
    // }); 
    
    // connection.connect();
    
    // // var  sql = "INSERT INTO TEST (DATE, TIME, USER, ORDERNO, TYPE) "+
    // //            " VALUES ('20220921', '12:13:14', 'DAVID', '00456', 'BLACK') ";

    // connection.query('select * from TEST', function(err, rows, fields) {
    //   if (err) throw err;
    //   console.log('The solution is: ', rows);
    // });

    // var  sql = "SELECT * FROM TEST ";
    // //查
    // // connection.query(sql,function (err, result) {
    // //         if(err){
    // //           console.log('[INSERT INTO ERROR] - ',err.message);
    // //           return;
    // //         }
    
    // //       console.log('--------------------------INSERT INTO----------------------------');
    // //       console.log(result);
    // //       console.log('------------------------------------------------------------\n\n');  
    // // });
    
    // connection.end();
  // });
  

});
