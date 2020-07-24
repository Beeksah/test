var button = document.getElementById('mobule_button');
var menu = document.getElementById('header_bottom_mobile');
var menuIcons = document.getElementsByClassName('mobile_icon');
button.addEventListener("click",function(){
    menu.classList.toggle("hidden");
    for(var i=0;i<menuIcons.length;i++){
        menuIcons[i].classList.toggle("hidden");
    }
});