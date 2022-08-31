/*Basic Function*/ 
/* Click Hide menubar */
$(document).ready(function(){
    $('.navbarToggle').click(function(){
    $('.item').toggleClass("show");
    $('.navbarToggle').toggleClass("hide");          
    });
});

/*scroll*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll").style.top = "20px";
  } else {
    document.getElementById("scroll").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/*year*/
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();