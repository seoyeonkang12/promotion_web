$(function(){
  $('section').mousewheel(function(event, delta){
    if($('.fireworks_popup').hasClass('on_pop')) {
     return;
    } 
    if(delta > 0) { 
      point = $(this).prev().offset().top;
    } else if(delta < 0) {
      point = $(this).next().offset().top;
    }

    $('html, body').stop().animate({scrollTop: point}, 500);
  }); //mousewheel_event
  

  $('.top_btn').on('click', function(e){
  e.preventDefault();
      
  $('html, body').stop().animate({
      scrollTop: 0
  }, 1000);
  }); //btn_top_click_event


  $('.fireworks .txt>div').hover(function() {
    $('.fireworks .txt>div').removeClass('on');
    $(this).addClass('on');
    
    const index = $(this).index();

    if(index === 0) {
      $('.fireworks_bg').css('background-image', 'url("./images/bg_03.png")'
      );
    } else if (index === 1) {
      $('.fireworks_bg').css('background-image', 'url("./images/bg_03-2.png")'
      );
    } else if (index === 2){
      $('.fireworks_bg').css('background-image', 'url("./images/bg_03-3.png")'
      );
    }
  }); //fireworks

  
  let swiper = new Swiper('.fireworks_popup', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('.fireworks .txt>div').click(function() {
    let index = $(this).index();

    $('.swiper').addClass('on_pop');
    $('body').addClass('popup_open');
    swiper.slideToLoop(index, 500);
  });

  $('.swiper .close').click(function(){
    $('.swiper').removeClass('on_pop');
    $('body').removeClass('popup_open');
  }); 
  
  $('.swiper').click(function(e){
    if($(e.target).closest('.swiper-slide > div').length) {return;}

    if($(e.target).closest('.swiper-button-next, .swiper-button-prev').length) { return; }

    if($(e.target).closest('.close').length) { return;}

    $('.swiper').removeClass('on_pop');
    $('body').removeClass('popup_open');
    
  }); 
  //fireworks_popup

});
