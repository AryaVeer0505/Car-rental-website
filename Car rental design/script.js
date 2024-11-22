let menu = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header'),classList.add('active');
    }
    else{
        document.querySelector('.header'),classList.remove('active');
    }
    navbar.classList.remove('active');
}
var settingsmenu = document.querySelector(".settings-menu")
var darkbtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}

