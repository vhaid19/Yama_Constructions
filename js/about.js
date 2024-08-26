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
  footer.style.display = "grid"
})

let hidemenu = document.querySelector(".droplist")
hidemenu.addEventListener("mouseleave", ()=>{
    hidemenu.classList.remove("displaytext")
})