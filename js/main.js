$(document).ready(function(){new Swiper(".hotel-slider",{loop:!0,navigation:{nextEl:".hotel-slider__button--next",prevEl:".hotel-slider__button--prev"},keyboard:{enabled:!0,onlyInViewport:!1}}),new Swiper(".reviews-slider",{loop:!0,navigation:{nextEl:".reviews-slider__button--next",prevEl:".reviews-slider__button--prev"},keyboard:{enabled:!0,onlyInViewport:!1}});document.querySelector(".menu-button").addEventListener("click",function(){console.log("Клик по кнопке"),document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")});var e=$("[data-toggle=modal]"),o=$(".modal__close");e.on("click",function(){var e=$(".modal__overlay"),o=$(".modal__dialog");e.addClass("modal__overlay--visible"),o.addClass("modal__dialog--visible")}),o.on("click",function(e){e.preventDefault();var o=$(".modal__overlay"),a=$(".modal__dialog");o.removeClass("modal__overlay--visible"),a.removeClass("modal__dialog--visible")}),$(".form").each(function(){$(this).validate({errorClass:"invalid",messages:{name:{required:"Please specify your name",minlength:"Your name must be at least two characters"},email:{required:"We need your email address to contact you",email:"Your email address must be in the format of name@domain.com"},phone:{required:"Please specify your phone number",minlength:"At least 16 characters required!"}}})}),$('.phone').mask('+7(999)999-99-99');AOS.init()});