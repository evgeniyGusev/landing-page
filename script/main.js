$(document).ready(function(){
  let userScreenWidth = $('.body').width();
  let userScreenHeight = $(window).height(); //определяем видимую без учета скролла высоту страницы
  let headerHeight = $('header').height(); //определяем высоту шапки

  let topOfWhatIdoElDesct = $('.what-i-do-list__element').offset().top + headerHeight; //считаем расстояние от топа экрана до топа нужного элемента и прибавляем к нему высоту шапки (ДЛЯ мониторов)
  let topOfWhatIdoElMob = $('.what-i-do-list__element').offset().top + (headerHeight * 2); //считаем расстояние от топа экрана до топа нужного элемента и прибавляем к нему высоту шапки (для ГАДЖЕТОВ)
  let scrollDistToWhatIdoElDesct = topOfWhatIdoElDesct - userScreenHeight; //вычисляем необходимое количество пикселей для эффекта появления
  let scrollDistToWhatIdoElMob = topOfWhatIdoElMob - userScreenHeight; //то же самое для мобильных
  let whatIdoElHeight = $('.what-i-do-list').height(); // высота лока wgat-i-do

  $(window).scroll(function() {
    let scrollDown = $(window).scrollTop() + $(window).height();
    let topOfFooter = $('.footer').offset().top + 130;
    let userScroll = $(window).scrollTop();

    // ====== header =======
    if(userScroll >= 66) { // если скролл больше или равен указанному
      $('.header').addClass('header--fixed'); // хидер фиксируется (положение фиксации определяется стилями (снизу/сверху))
			$('.header__button').addClass('header__button--animate'); // анимация кнопка "заказать звонок"

      // далее в зависимости от ширины экрана делаем соответствующий отступ сверху для main
			if(userScreenWidth >= 320 && userScreenWidth < 500) {
          $('.main').css('margin-top', '66px');
        } else if(userScreenWidth >= 500 && userScreenWidth < 900) {
          $('.main').css('margin-top', '82px');
        } else if(userScreenWidth >= 900) {
          $('.main').css('margin-top', '90px');
        }
    } else {
        $('.header').removeClass('header--fixed');
        $('.header__button').removeClass('header__button--animate');
        $('.main').css('margin-top', '0');
    }

    // убираем хидер когда доползаем до футера, т.к. там та же самая онформация, но при обратном скролле хидер снова появляется
    if(scrollDown > topOfFooter) {
      $('.header').removeClass('header--fixed');
      $('.main').css('margin-top', '0');
      $('.header__button').removeClass('header__button--animate');
    }

    // ====== what-i-do =======
    if(userScreenWidth < 1100) {
      if(userScroll >= scrollDistToWhatIdoElMob ) {
        $('.what-i-do-list__element').css('opacity', '1');
      } else if(userScroll <= $('.what-i-do-list__element').offset().top) {
        $('.what-i-do-list__element').css('opacity', '0');
      }
		} else {
				if(userScroll >= scrollDistToWhatIdoElDesct && (topOfWhatIdoElDesct - headerHeight) + whatIdoElHeight != null) {
          $('.what-i-do-list__element').css('opacity', '1');
				} else {
          $('.what-i-do-list__element').css('opacity', '0');
				}
    };

    if(userScroll >= 200) {
      $('.to-top-button').addClass('to-top-button--show');
    } else {
      $('.to-top-button').removeClass('to-top-button--show');
    }

  });

   // to-top-button
   $('.to-top-button').on('click', function() {
    $('html').animate({scrollTop: 0}, 500);
  });

  // get-call
  $('#header-getcall, #footer-getcall').on('click', (function(event) {
    $('#get-call-modal')
      .css("display", "flex")
      .hide()
      .fadeIn(400);

    $('.modal-form')
      .css("display", "flex")
      .hide()
      .fadeIn(800);

    $('.body').addClass('body__mobile-scroll-hidden');
  }));

  $('.modal-form__close-button').on('click', (function(event) {
    $('#get-call-modal').fadeOut(500);
    $('input').val('');
    $('select').val('');
    $('.body').removeClass('.body__mobile-scroll-hidden');
  }));

  // get-project
  $('.my-works__get-project-button').on('click', (function(event) {
    $('#get-project-modal')
      .css("display", "flex")
      .hide()
      .fadeIn(400);

    $('.modal-form')
      .css("display", "flex")
      .hide()
      .fadeIn(800);

    $('.body').toggleClass('body__mobile-scroll-hidden');
  }));

  $('.modal-form__close-button').click(function(event) {
    $('#get-project-modal').fadeOut(500);
    $('.modal-form').fadeOut(250);
    $('.body').toggleClass('body__mobile-scroll-hidden');
    $('input').val('');
  });

  // how-cost-button
  $(".what-i-do__how-cost-button").click(function (){
    $('html, body').animate({
        scrollTop: $("#cost").offset().top
    }, 1000);
  });

  // tittle-section-button
  $(".tittle-section__button").click(function (){
    $('html, body').animate({
        scrollTop: $("#what-i-do").offset().top
    }, 1000);
  });

  // mobile-menu
  function mobileMenu() {
    $('.header-nav').fadeToggle(200);
    $('.body').toggleClass('body__mobile-scroll-hidden');
    $('.header__flex-wrapper').toggleClass('header__flex-wrapper--changed-with-menu');

    $('.header-nav__list').toggleClass('header-nav__list--show');
    $('#header-nav-button--listener').toggleClass('header-nav-button--active').toggleClass('header-nav-button');


    $('#header-nav-button__line--listener').toggleClass('header-nav-button__line').toggleClass('header-nav-button__line--active');
  }


  $('#header-nav-button--listener').click(function(event) {
    mobileMenu();
  });

  if(userScreenWidth < 1100) {
    $('.header-nav__link').click(function(event) {
      mobileMenu();
    });
  };

  // smooth scroll
  $('.link-to-do').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#what-i-do').offset().top }, 1000);
    e.preventDefault();
  });

  $('.link-to-works').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#my-works').offset().top }, 1000);
    e.preventDefault();
  });

  $('.link-to-cost').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#cost').offset().top }, 1000);
    e.preventDefault();
  });

  // header/footer call-button restyling
  if (userScreenWidth >= 900) {
    $('#header-getcall').addClass('bordered-button').removeClass('header__button');
    $('#footer-getcall').addClass('bordered-button').removeClass('section-button');
  } else {
    $('#header-getcall').addClass('header__button').removeClass('bordered-button');
    $('#footer-getcall').addClass('section-button').removeClass('bordered-button');
  }

});
