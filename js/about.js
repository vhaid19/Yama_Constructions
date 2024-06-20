let displaytext = document.querySelector(".servicess")
displaytext.addEventListener("mouseover", ()=>{
    let display = document.querySelector(".droplist").classList;
    display.toggle("displaytext")
})

let hidemenu = document.querySelector(".droplist")
hidemenu.addEventListener("mouseleave", ()=>{
    hidemenu.classList.remove("displaytext")
})