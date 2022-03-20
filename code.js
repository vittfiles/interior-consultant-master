// menu
var bot0;
var bot1;
var menu;
function open() {
    menu.style.display = "block";
    botOpen=true;
}
function close() {
    menu.style.display = "none";
    botOpen=false;
}
function init(){
    bot0 = document.getElementById("bot-open");
    bot1 = document.getElementById("bot-close");
    menu = document.getElementById("menu");
    bot0.addEventListener("click",open);
    bot1.addEventListener("click",close);
    var links = document.getElementsByTagName("li");
    for ( var i =0 ; i < links.length ; i++){
        var li = links[i];
        li.addEventListener("click",close);
    }
}
document.addEventListener('load',init());