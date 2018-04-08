window.onscroll = function() {myFunction()};
var navbar = document.getElementById("region-pre").childNodes[1];
var sticky = 120;

function myFunction() {
	navbar.style.height = 'calc(100vh - (120px - ' + window.pageYOffset + 'px))';
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
