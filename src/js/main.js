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


  
//   $("#flipbook").turn({
//     width: 800,
//     height: 600,
//     autoCenter: true
// });




// $(window).resize(function(e){
// // window.addEventListener('resize',function(e){
//   flipbook.style.width="";
//   flipbook.style.height="";
//   $(flipbook).turn("size", window.innerWidth*0.5,window.innerHeight*0.8);
// });   
  

});



function loadApp() {

  $('#canvas').fadeIn(1000);

  var flipbook = $('.magazine');

  // Check if the CSS was already loaded
 
 if (flipbook.width()==0 || flipbook.height()==0) {
   setTimeout(loadApp, 10);
   return;
 }
 
 // Create the flipbook

 flipbook.turn({
     
     // Magazine width

     width: 922,

     // Magazine height

     height: 600,

     // Duration in millisecond

     duration: 1000,

     // Hardware acceleration

     acceleration: !isChrome(),

     // Enables gradients

     gradients: true,
     
     // Auto center this flipbook

     autoCenter: true,

     // Elevation from the edge of the flipbook when turning a page

     elevation: 50,

     // The number of pages

     pages: 12,

     // Events

     when: {
       turning: function(event, page, view) {
         
         var book = $(this),
         currentPage = book.turn('page'),
         pages = book.turn('pages');
     
         // Update the current URI

         Hash.go('page/' + page).update();

         // Show and hide navigation buttons

         disableControls(page);
         

         $('.thumbnails .page-'+currentPage).
           parent().
           removeClass('current');

         $('.thumbnails .page-'+page).
           parent().
           addClass('current');



       },

       turned: function(event, page, view) {

         disableControls(page);

         $(this).turn('center');

         if (page==1) { 
           $(this).turn('peel', 'br');
         }

       },

       missing: function (event, pages) {

         // Add pages that aren't in the magazine

         for (var i = 0; i < pages.length; i++)
           addPage(pages[i], $(this));

       }
     }

 });

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

 // URIs - Format #/page/1 

 Hash.on('^page\/([0-9]*)$', {
   yep: function(path, parts) {
     var page = parts[1];

     if (page!==undefined) {
       if ($('.magazine').turn('is'))
         $('.magazine').turn('page', page);
     }

   },
   nop: function(path) {

     if ($('.magazine').turn('is'))
       $('.magazine').turn('page', 1);
   }
 });


 $(window).resize(function() {
   resizeViewport();
 }).bind('orientationchange', function() {
   resizeViewport();
 });

 // Events for thumbnails

 $('.thumbnails').click(function(event) {
   
   var page;

   if (event.target && (page=/page-([0-9]+)/.exec($(event.target).attr('class'))) ) {
   
     $('.magazine').turn('page', page[1]);
   }
 });

 $('.thumbnails li').
   bind($.mouseEvents.over, function() {
     
     $(this).addClass('thumb-hover');

   }).bind($.mouseEvents.out, function() {
     
     $(this).removeClass('thumb-hover');

   });

 if ($.isTouch) {
 
   $('.thumbnails').
     addClass('thumbanils-touch').
     bind($.mouseEvents.move, function(event) {
       event.preventDefault();
     });

 } else {

   $('.thumbnails ul').mouseover(function() {

     $('.thumbnails').addClass('thumbnails-hover');

   }).mousedown(function() {

     return false;

   }).mouseout(function() {

     $('.thumbnails').removeClass('thumbnails-hover');

   });

 }


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

}

// Zoom icon

$('.zoom-icon').bind('mouseover', function() { 
  
  if ($(this).hasClass('zoom-icon-in'))
    $(this).addClass('zoom-icon-in-hover');

  if ($(this).hasClass('zoom-icon-out'))
    $(this).addClass('zoom-icon-out-hover');

}).bind('mouseout', function() { 
  
   if ($(this).hasClass('zoom-icon-in'))
    $(this).removeClass('zoom-icon-in-hover');
  
  if ($(this).hasClass('zoom-icon-out'))
    $(this).removeClass('zoom-icon-out-hover');

}).bind('click', function() {

  if ($(this).hasClass('zoom-icon-in'))
    $('.magazine-viewport').zoom('zoomIn');
  else if ($(this).hasClass('zoom-icon-out'))	
   $('.magazine-viewport').zoom('zoomOut');

});

$('#canvas').hide();


// Load the HTML4 version if there's not CSS transform

// yepnope({
//  test : Modernizr.csstransforms,
//  yep: ['../lib/jquery/turn.js'],
//  nope: ['../lib/jquery/turn.html4.min.js'],
//  both: ['../lib/jquery/zoom.min.js', '../js/magazine.js', '../styles.scss'],
//  complete: loadApp
// });





/*  先拿掉了


// var url = 'E:\軟體開發\Angular\helloworld2\src\pdf\DM_V1.pdf'; //你要放的pdf檔
// var url = 'https://jacktechtw.com/pdf/DM_V1.pdf'; //你要放的pdf檔
// var url = 'https://github.com/s3a432086/helloworld2/raw/master/src/pdf/DM_V1.pdf.pdf'; //你要放的pdf檔
var url = '../pdf/DM_V1.pdf'; //你要放的pdf檔
var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';  //本機測試用
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
  // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';  // 若是下載在自己的本端，這邊src為自己專案中worker.js的路徑
  pdfjsLib.GlobalWorkerOptions.workerSrc = '../lib/jquery/pdf.worker.js'; 

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

    // canvas.height = viewport.height;
    // canvas.width = viewport.width;

    // // Render PDF page into canvas context
    // let renderContext = {
    // canvasContext: context,
    // viewport: viewport
    // };

    // page.render(renderContext);
    //根据宽高判断是否需要旋转
    if (viewport.height / viewport.width >= 1.42) {

      var newScale = 1440 / viewport.height
      var newViewport = page.getViewport({scale:newScale,rotation:rotate})
      var outputScale = window.devicePixelRatio

      canvas.width = Math.floor(newViewport.width * outputScale);
      canvas.height = Math.floor(newViewport.height * outputScale);
      canvas.style.width = Math.floor(newViewport.width) + "px";
      canvas.style.height = Math.floor(newViewport.height) + "px";

      var transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] :
        null;

      var renderContext = {
        canvasContext: context,
        transform: transform,
        viewport: newViewport
        }
         page.render(renderContext)

      return ;
    }

    //根据每张图的宽高&#xff0c;按标准重新计算缩放比例
    var newScale = 900 / viewport.height
    
    var newViewport = page.getViewport({scale:newScale})
    var outputScale = window.devicePixelRatio

    canvas.width = Math.floor(newViewport.width * outputScale);
    canvas.height = Math.floor(newViewport.height * outputScale);
    canvas.style.width = Math.floor(newViewport.width) + "px";
    canvas.style.height = Math.floor(newViewport.height) + "px";

    var transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] :
      null;

      var renderContext = {
          canvasContext: context,
      transform: transform,
          viewport: newViewport
      }
     page.render(renderContext)
  })

};
		
function loadApp() {
        // $(flipbook).turn({
        //   autoCenter: true,//是否置中
        //   // display: 'single',//單頁顯示
        // });
        //调用turn
			yepnope({
        test : Modernizr.csstransforms,
        yep: ['../lib/jquery/turn.min.js'],
        complete: loadApp
      })
};

// $(window).resize(function(e){
window.addEventListener('resize',function(e){
  flipbook.style.width="";
  flipbook.style.height="";
  $(flipbook).turn("size", window.innerWidth*0.5,window.innerHeight*0.8);
});

*/