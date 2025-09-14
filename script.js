const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');


function openNavbar(){
  mobileMenu.classList.add("show");
}

function closeNavbar(){
  mobileMenu.classList.remove("show");
}

// Handle window resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1000) {
    closeNavbar();
  }
});

const navlinks = document.querySelectorAll("#mobileMenu a")

navlinks.forEach(link => {
  link.addEventListener('click', ()=> {
    closeNavbar();
  })
})