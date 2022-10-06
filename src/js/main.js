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


  
  $("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
});




$(window).resize(function(e){
// window.addEventListener('resize',function(e){
  flipbook.style.width="";
  flipbook.style.height="";
  $(flipbook).turn("size", window.innerWidth*0.5,window.innerHeight*0.8);
});   
  

});




// var url = 'E:\軟體開發\Angular\helloworld2\src\pdf\DM_V1.pdf'; //你要放的pdf檔
// var url = 'https://jacktechtw.com/pdf/DM_V1.pdf'; //你要放的pdf檔
// var url = 'https://github.com/s3a432086/helloworld2/raw/master/src/pdf/DM_V1.pdf.pdf'; //你要放的pdf檔
var url = '../pdf/DM_V1.pdf'; //你要放的pdf檔
var flipbook = document.getElementById('flipbook');
var scale = 1.5; //可靠這個修改canvas解析度

// $(window).show(function(){
//     getpdf(url);
// });

window.onload = function(){
  getpdf(url);
};

function getpdf(url){

  var pdfjsLib = window['pdfjs-dist/build/pdf'];
  pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';  // 若是下載在自己的本端，這邊src為自己專案中worker.js的路徑

  var loadingTask = pdfjsLib.getDocument(url);
  
  loadingTask.promise.then(function(pdf) {   //根據總頁數新增固定的div和canvas
 
  console.log("總頁數",pdf.numPages);
  for (let i = 1; i <= pdf.numPages;i++) {
    let id = 'canvaspage' + i;
    let div = document.createElement('div');
    div.innerHTML = '<canvas id="' + id + '"></canvas>';
    flipbook.append(div);
    setcanvas(i,pdf,id);
  }
            
  //呼叫turn方法
    loadApp()					
  })
};

//將pdf新增到canvas裡面
function setcanvas(i,pdf,id){
  pdf.getPage(i).then(function(page) {
    var viewport = page.getViewport({scale: scale});
 
    let canvas = document.getElementById(id);
    let context = canvas.getContext('2d');

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    let renderContext = {
    canvasContext: context,
    viewport: viewport
    };

    page.render(renderContext);
  })
};
		
function loadApp() {
        $(flipbook).turn({
          autoCenter: true,//是否置中
          //display: 'single',//單頁顯示
        });
};

// $(window).resize(function(e){
window.addEventListener('resize',function(e){
  flipbook.style.width="";
  flipbook.style.height="";
  $(flipbook).turn("size", window.innerWidth*0.5,window.innerHeight*0.8);
});