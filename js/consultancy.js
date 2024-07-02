
  
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