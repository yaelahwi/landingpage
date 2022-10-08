var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky");
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/5 + "deg)";
  }
  else{
    navbar.classList.remove("sticky");
  }
}
