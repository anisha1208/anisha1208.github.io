
window.addEventListener('scroll',function(){
        var header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>0);
})

function toggleMenu(){
        var menuToggle = document.querySelector('.toggle');
        var menuToggle = document.querySelector('.menu');
        menuToggle.classList.toggle('active');
        menu.classList.toggle('active');
}

var typed = new Typed(".autotype",{
        strings:["Machine Learning Enthusiast","Web Developer", "Software Developer" , "Learner"],
        typeSpeed:100,
        backSpeed:100,
        loop:true
})

var swiper = new Swiper('.scontent', {
        // Optional parameters
        slidesPerView : 2,
        spaceBetween: 30,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        loop: true,
        loopFillGroupWithBlank: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          dynamicBullets: 'true',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        breakpoints:{
                0:{
                        slidesPerView:1,
                },
                520:{
                        slidesPerView:2,
                },

                950:{
                        slidesPerView:2,
                }
        }
      
      });
