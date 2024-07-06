let displaysub_menu = document.querySelector(".consultings");
displaysub_menu.addEventListener("mouseover",()=>{
  let content = document.querySelector(".droplist").classList;
    content.toggle("displaytext");
})

let hidesub_menu = document.querySelector(".droplist");
hidesub_menu.addEventListener("mouseleave", ()=>{
  let hide = hidesub_menu.classList;
  hide.remove("displaytext")
})

let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
//   let display_content = document.getElementsByTagName("footer");
//   display_content[0].style.display="grid";
  let image = document.querySelector(".maincontenar");
  image.style.display = "block";
  let navbar = document.querySelector(".navbar");
  navbar.style.display = "flex";
  let service = document.querySelector(".service");
  service.style.display = "flex";
//   let service2 = document.querySelector(".service2");
//   service2.style.display = "flex";
//   let videos = document.querySelector(".vides");
//   videos.style.display = "flex";
})