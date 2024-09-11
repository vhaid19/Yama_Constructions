
function displaymenu(){
  let a = document.getElementById("menus");
  console.log("vahid")
  if(a.style.display == "none"){
    a.style.display = "block";
    document.querySelector(".maincontenar").style.display = "none"
    document.querySelector("footer").style.display = "none"
  }else{
    a.style.display = "none";
    document.querySelector(".maincontenar").style.display = "block"
    document.querySelector("footer").style.display = "grid"
  }
}

let displaymenus = document.querySelector("#services");
displaymenus.addEventListener("mouseover", ()=>{
  displaymenu = document.querySelector(".droplist").classList;
  displaymenu.toggle("displaytext");
})

let hidemenu = document.querySelector(".droplist");
hidemenu.addEventListener("mouseleave", ()=>{
  hidemenu.classList.remove("displaytext");
})


let hide_icons = document.querySelector(".pluse");
// let display_corss = document.getElementById("cross");
hide_icons.addEventListener("click", ()=>{
 let content = hide_icons.classList;
 content.toggle("crosss");
 let hide = document.querySelector(".inform").classList;
 let hiden = document.querySelector(".informations").classList;
 let hidens = document.querySelector(".inrorms").classList;
  let hids = document.querySelector(".informss").classList;
  hiden.remove("informationss")
  hide.remove("informationss");
  hidens.remove("informationss")
  hids.remove("informationss")
  let hides = document.querySelector(".mult").classList;
  hides.remove("crosss");
  let rem = document.querySelector(".cross1").classList;
  rem.remove("crosss");
  let rem2 = document.querySelector(".cross2").classList;
  rem2.remove("crosss");
//  displaytext.classList.remove("inforamtions");
});

hide_icons.addEventListener("click",()=>{
  let hide_icons = document.querySelector(".cross").classList
  hide_icons.remove("crosss");
  hide_icons.add("cross")
})

let rotate_icon = document.querySelector(".mult");
rotate_icon.addEventListener("click",()=>{
  let content = rotate_icon.classList;
  content.toggle("crosss");
  let hide = document.querySelector(".inforamtions").classList;
  let hiden = document.querySelector(".informations").classList;
  let hidens = document.querySelector(".inrorms").classList;
  let hids = document.querySelector(".informss").classList;
  hiden.remove("informationss");
  hide.remove("informationss");
  hidens.remove("informationss")
  hids.remove("informationss")
  let hides = document.querySelector(".pluse").classList;
  hides.remove("crosss");
  let rem = document.querySelector(".cross1").classList;
  rem.remove("crosss");
  let rem2 = document.querySelector(".cross2").classList;
  rem2.remove("crosss");
});

rotate_icon.addEventListener("click",()=>{
  let hides = document.querySelector(".cross").classList;
  hides.remove("crosss");
})

let rotate_plues = document.querySelector(".cross");
rotate_plues.addEventListener("click", ()=>{
  let content = rotate_plues.classList;
  content.toggle("crosss");
  let hide = document.querySelector(".inforamtions").classList;
  let hiden = document.querySelector(".inform").classList;
  let hidens = document.querySelector(".inrorms").classList;
  let hids = document.querySelector(".informss").classList;
  hiden.remove("informationss");
  hide.remove("informationss");
  hidens.remove("informationss")
  hids.remove("informationss")
  let hides = document.querySelector(".pluse").classList;
  hides.remove("crosss");
  let rem = document.querySelector(".cross1").classList;
  rem.remove("crosss");
  let rem2 = document.querySelector(".cross2").classList;
  rem2.remove("crosss");
});

rotate_plues.addEventListener("click", ()=>{
  let hides = document.querySelector(".mult").classList;
  hides.remove("crosss");
})

hide_icons.addEventListener("click", ()=>{
  let displaytext = document.querySelector(".inforamtions");
  displaytext.classList.toggle("informationss");
})

rotate_icon.addEventListener("click", ()=>{
  let displaytext = document.querySelector(".inform");
  displaytext.classList.toggle("informationss");
  // console.log(name);
})

rotate_plues.addEventListener("click", ()=>{
  let displayinform = document.querySelector(".informations");
  displayinform.classList.toggle("informationss")
})

let loder = document.querySelector(".loader");
window.addEventListener("load", ()=>{
  let loding = document.querySelector(".loding_effect");
  loding.style.display = "none";
  let display_content = document.getElementsByTagName("footer");
  display_content[0].style.display="grid";
  let image = document.querySelector(".maincontenar");
  image.style.display = "block";
  let navbar = document.querySelector(".navbar");
  navbar.style.display = "flex";
  let service = document.querySelector(".service");
  service.style.display = "flex";
  let service2 = document.querySelector(".service2");
  service2.style.display = "flex";
  // let videos = document.querySelector(".vides");
  // videos.style.display = "flex";
})

let cros = document.querySelector(".cross1");
cros.addEventListener("click", ()=>{
  cros.classList.toggle("crosss");
  let hide = document.querySelector(".inforamtions").classList;
  let hiden = document.querySelector(".inform").classList;
  let hidens = document.querySelector(".informations").classList;
  let hids = document.querySelector(".informss").classList;
  hids.remove("informationss");
  hiden.remove("informationss");
  hide.remove("informationss");
  hidens.remove("informationss");
  let hides = document.querySelector(".pluse").classList;
  hides.remove("crosss");
  let hidess = document.querySelector(".mult").classList;
  hidess.remove("crosss");
  let hidss = document.querySelector(".cross").classList;
  hidss.remove("crosss");
  let hid = document.querySelector(".cross2").classList;
  hid.remove("crosss");
})

let cros2 = document.querySelector(".cross2");
cros2.addEventListener("click", ()=>{
  cros2.classList.toggle("crosss")
  let hide = document.querySelector(".inforamtions").classList;
  let hiden = document.querySelector(".inform").classList;
  let hidens = document.querySelector(".informations").classList;
  let hids = document.querySelector(".inrorms").classList;
  hids.remove("informationss");
  hiden.remove("informationss");
  hide.remove("informationss");
  hidens.remove("informationss");
  let hides = document.querySelector(".pluse").classList;
  hides.remove("crosss");
  let hidess = document.querySelector(".mult").classList;
  hidess.remove("crosss");
  let hidss = document.querySelector(".cross").classList;
  hidss.remove("crosss");
  let hid = document.querySelector(".cross1").classList;
  hid.remove("crosss");
})

cros.addEventListener("click", ()=>{
  let display = document.querySelector(".inrorms").classList;
  display.toggle("informationss");
})

cros2.addEventListener("click", ()=>{
  let display = document.querySelector(".informss").classList;
  display.toggle("informationss");
})