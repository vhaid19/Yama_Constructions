let displaytext = document.querySelector(".servicess")
displaytext.addEventListener("mouseover", ()=>{
    let display = document.querySelector(".droplist").classList;
    display.toggle("displaytext")
})

let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
  let socail = document.querySelector(".nav")
  socail.style.display = "flex";
  let contenar = document.querySelector(".maincontenar")
  contenar.style.display = "block";
  let footer = document.querySelector(".footers")
  footer.style.display = "flex"
})

let hidemenu = document.querySelector(".droplist")
hidemenu.addEventListener("mouseleave", ()=>{
    hidemenu.classList.remove("displaytext")
})

let menulog = document.querySelector(".menulog")
let value = false;

menulog.addEventListener("click", ()=>{
  let menuvesion = document.querySelector(".mobile_menu");
  menuvesion.classList.toggle("mobile_vison");

  if (value != true){
    document.querySelector(".maincontenar").style.display = "none"
    document.querySelector(".footers").style.display = "none"
    value = true;
    console.log(value)
  }else{
    document.querySelector(".maincontenar").style.display = "block"
    document.querySelector(".footers").style.display = "flex"
    value = false;
    console.log(value)
  }
  document.querySelector(".mobile_submenu").classList.remove("submenu_vison");
  // console.log("vahid")
})

let submenu = document.querySelector(".service");

submenu.addEventListener("click",()=>{
  document.querySelector(".mobile_submenu").classList.toggle("submenu_vison")
})