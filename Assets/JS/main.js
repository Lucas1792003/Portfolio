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
/*=============== SWIPER PROJECTS ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


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
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
