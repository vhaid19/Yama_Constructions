let menu = document.querySelector(".menulogo");
menu.addEventListener("click", ()=>{
    let menus = document.querySelector(".nav2").classList;
    menus.toggle("displaymenu");
    console.log("Vahid")
    let hide = document.querySelector(".main").classList;
    hide.toggle("hidemain");
    let hides = document.querySelector(".footer").classList;
    hides.toggle("hidefooter");

})

let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
  let navbar = document.querySelector(".navbar")
  navbar.style.display = "block";
  let contenar = document.querySelector(".main")
  contenar.style.display = "block";
  let footer = document.querySelector(".footer")
  footer.style.display = "flex";
})

let menus = document.querySelector(".services");
menus.addEventListener("mouseover", ()=>{
    let menuss = document.querySelector(".menus").classList;
    menuss.toggle("showmenus")
})

let submenus = document.querySelector(".menus");
submenus.addEventListener("mouseleave", ()=>{
    submenus.classList.remove("showmenus")
})