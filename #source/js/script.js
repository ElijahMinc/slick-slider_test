$(document).ready(function () {

   $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 2000,
      easing: 'linear',
      infinite: true, //отвечает, будет ли прокручиваться дальше слайдер
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 1500,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true, // можно ли дергать слайдер мышкой или нет на ПК
      swipe: true, // можно ли дергать слайдер мышкой или нет на СМАРТФОНЕ
      touchThreshould: 1,
      touchMove: true,
      waitForAnimate: true, // позволяет пользователю не ждать окончания анимации при скроле
      //а самому регулировать её.
      centerMode: false, // добавляется класс к центральному слайду
      variableWidth: false,
      rows: 1,
      slidesPerRow: 1,
      vertical: false,



   });


});