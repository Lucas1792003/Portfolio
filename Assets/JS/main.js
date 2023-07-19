/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== Hidden Menu =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    // When we click on each menu item, we remove the show-menu class from the navbar
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CERTIFICATES ===============*/
let swiperCertificates = new Swiper(".certificates__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    
      },
});
/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    
      },
});

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactProject = document.getElementById('contact-project');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        contactMessage.classList.remove('color-blue');
        contactMessage.classList.add('color-red');

        contactMessage.textContent = 'Please fill in all the input fields 📩';
    } else {
        emailjs.sendForm('service_kogjucd', 'template_vovadfm', '#contact-form', 'qp3JNk163rLmQtNnz')
            .then(() => {
                contactMessage.classList.add('color-blue');
                contactMessage.textContent = 'Message sent ✅';

                setTimeout(() => {
                    contactMessage.textContent = '';
                }, 5000);
            });
    }
}

contactForm.addEventListener('submit', sendEmail)

// =====================DARK LIGHT THEME======================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// we obtain the current theme that the interface has by validating the dark-theme classs
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-clear-line' : 'ri-sun-line'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
  document.body.classList[selectedIcon === 'ri-moon-clear-line' ? 'add' : 'remove'] (iconTheme)
}
themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme' , getCurrentTheme())
  localStorage.setItem('selected-icon' , getCurrentIcon())
})