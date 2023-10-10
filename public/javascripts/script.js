const navmenu = document.getElementById("navmenu")
const navdown = document.getElementById("nav-down")
const crossbtn = document.getElementById("crossbtn")
navmenu.addEventListener('click',function(dets){
    navdown.style.display = "initial "
    console.log("DDDD")
})
crossbtn.addEventListener('click',function(dets){
    navdown.style.display = "none"
})