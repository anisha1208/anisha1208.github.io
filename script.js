// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navBarlinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click',()=>{
//         navBarlinks.classList.toggle('active')
// })

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