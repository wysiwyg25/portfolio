
const menuBtn = document.querySelector ('.toggle');
let menuOpen =false ;
menuBtn.addEventListener('click',() =>
{
if(!menuOpen) {

    menuBtn.classList.add('open');
    menuOpen = true;
    document.getElementById("navbar2").style.right="0px";   
}
else {
    menuBtn.classList.remove('open');
    menuOpen=false;
    document.getElementById("navbar2").style.right="-300px";   
  

}
}

)


