// Scroll Reveal
function revealOnScroll(){
  const reveals = document.querySelectorAll('.reveal');
  const windowHeight = window.innerHeight;
  reveals.forEach(el=>{
    const elTop = el.getBoundingClientRect().top;
    if(elTop < windowHeight - 100){
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll',revealOnScroll);
window.addEventListener('load',revealOnScroll);

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
menuToggle.addEventListener('click',()=>{ navList.classList.toggle('show'); });

// Smooth Scroll Highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll',()=>{
  let current = '';
  sections.forEach(section=>{
    const sectionTop = section.offsetTop - 80;
    if(pageYOffset >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link=>{
    link.classList.remove('active');
    if(link.getAttribute('href') === '#'+current) link.classList.add('active');
  });
});
