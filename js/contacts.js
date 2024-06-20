let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
  let navbar = document.querySelector(".navbar")
  navbar.style.display = "flex";
  let contenar = document.querySelector(".contenar")
  contenar.style.display = "flex";
})

let menu = document.getElementById("Services")
menu.addEventListener("mouseover", ()=>{
  let menus = document.querySelector(".droplist")
  menus.classList.toggle("displaymenu");
  console.log("vahid");
})

let menu2 = document.querySelector(".droplist");
menu2.addEventListener("mouseleave", ()=>{
  menu2.classList.remove("displaymenu")
})

let showmenu = document.querySelector(".menu");
showmenu.addEventListener("click", ()=>{
  let nav = document.querySelector(".nav");
  nav.classList.toggle("navshow");
  // nav.style.display="flex"
})
