let submenus = document.querySelector(".services");
submenus.addEventListener("mouseover", ()=>{
    let menus = document.querySelector(".submenuss");
    menus.classList.toggle("submenus");
    console.log("vhiad")
})

let submenuss = document.querySelector(".submenuss");
submenuss.addEventListener("mouseleave", ()=>{
    submenuss.classList.remove("submenus");
})

let menu_icon = document.querySelector(".menu_icon");
menu_icon.addEventListener('click', ()=>{
    
})