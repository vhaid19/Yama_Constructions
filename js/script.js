let menu = document.querySelector(".menulogo");
menu.addEventListener("click", display_menu)
function display_menu(){
  let menus = document.querySelector(".nav2").classList;
  menus.toggle("displaymenu");
  // console.log("Vahid")
  let hide = document.querySelector(".main").classList;
  hide.toggle("hidemain");
  let contenar = document.querySelector(".main")
  contenar.classList.toggle("show_not")
  let hides = document.querySelector(".footer").classList;
  hides.toggle("hidefooter");
  let hides2 = document.querySelector("")
}

let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
  let navbar = document.querySelector(".navbar")
  navbar.style.display = "flex";
  let contenar = document.querySelector(".main")
  contenar.classList.toggle("show_not")
  let footer = document.querySelector(".footer")
  footer.style.display = "flex";
})

let menus = document.querySelector(".services");
menus.addEventListener("mouseover", menu_over)

function menu_over(){
  let menuss = document.querySelector(".menus").classList;
    menuss.toggle("showmenus")
}

let submenus = document.querySelector(".menus");
submenus.addEventListener("mouseleave", menu_leave)

function menu_leave(){
  submenus.classList.remove("showmenus")
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}


let width = window.innerWidth;
// console.log(typeof(width))
if(width <= 430){
  menus.removeEventListener("mouseover", menu_over)
  submenus.removeEventListener("mouseleave", menu_leave)
  menus.addEventListener("click", menu_click)
  console.log("vahid")
}

function menu_click(){
  document.querySelector(".menus").classList.toggle("showmenus");
  console.log("vahid")
}