let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
  let navbar = document.querySelector(".navbar")
  navbar.style.display = "flex";
  let background_content = document.querySelector(".background_contenar")
  background_content.style.display = "flex";
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


// window.setTimeout(addEventListener("load", ()=>{
// document.querySelector(".navbar").animate(drop_down, dropdown_time);  
// document.querySelector(".nav").animate(drop_down, dropdown_time)
// document.querySelector("h1").animate(slide_contenar,dropdown_time)
// document.querySelector(".managment_info ").animate(slideright_contenar, dropdown_time)
// document.querySelector(".bk_image ").animate(scaleimage, dropdown_time)
// document.querySelectorAll(" .content1 .content2 .content3 .content4 ").animate(slide_imaes, dropdown_time)

// }),0)

window.setTimeout(addEventListener("scroll", ()=>{
  document.querySelector(".content1").classList.add("addscales");
  document.querySelector(".content2").classList.add("addscales");
  document.querySelector(".content3").classList.add("addscales");
  document.querySelector(".content4").classList.add("addscales");
  document.querySelector(".content5").classList.add("addscales");
  document.querySelector(".content6").classList.add("addscales");
  document.querySelector(".content7").classList.add("addscales");
  document.querySelector(".content8").classList.add("addscales");
  document.querySelector("footer").animate(drop_up, dropdown_time);
}),0)


const dropdown_time = {
  duration: 1200,
   iterations: 1,
}

const drop_down = [
  {transform: "translateY(-10ch)"},
  {transform: "translateY(0ch)"}
]

const slide_contenar = [
  {transform: "translateX(-100%) scale(0)"},
  {transform: "translateX(0%) scale(1)"}
]

const slideright_contenar = [
  {transform: "translateX(100%) scale(0)"},
  {transform: "translateX(0%) scale(1)"}
]

const scaleimage = [
  {transform: "scale(0)"},
  {transform: "scale(1)"},
]

const drop_up = [
  {transform: "translateY(10ch)"},
  {transform: "translateY(0ch)"}
]


