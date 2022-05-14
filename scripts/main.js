// Add scroll event to navbar
document.addEventListener("scroll", (event) => {
  if (window.scrollY < 200) {
    $("#navbarWOLogo").hide();
    $("#navbarWLogo").fadeIn("slow");
  } else {
    $("#navbarWLogo").hide();
    $("#navbarWOLogo").fadeIn("slow");
  }

  //console.log(window.scrollY);
  //console.log(window.innerWidth);
});
