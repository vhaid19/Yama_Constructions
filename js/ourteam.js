let submenu = document.querySelector(".services");
submenu.addEventListener("mouseover", ()=>{
    let menu = document.querySelector(".submenus");
    menu.classList.toggle("submenuss")
})

let submenus = document.querySelector(".submenus");
submenus.addEventListener("mouseleave", ()=>{
    submenus.classList.remove("submenuss");
})