//sticky header

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky",window.scrollY > 100)
})



let menu = document.querySelector('#menu-icon');

let navlist = document.querySelector('.navlist');

let menuIcon = menu.querySelector('i');

menu.onclick = () => {
  menu.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
  navlist.classList.toggle('open');
}

window.onscroll = () => {
  menuIcon.classList.remove('fa-times');
  menuIcon.classList.add('fa-bars');
  navlist.classList.remove('open');
};



AOS.init();