const toggle=document.getElementById("toggle");
const sidebar=document.getElementById("side_bar");


document.onclick = function(e){
    if(e.target.id !== "side_bar" && e.target.id !== "toggle"){
        toggle.classList.remove('active');
        sidebar.classList.remove('active');    
    }
}


toggle.onclick=function (){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}