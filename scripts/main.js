// Add scroll event to navbar
document.addEventListener("scroll", (event) => {
  if (window.scrollY < 200) {
    $("#navbarWOLogo").hide();
    $("#navbarWLogo").fadeIn("slow");
  } else {
    $("#navbarWLogo").hide();
    $("#navbarWOLogo").fadeIn("slow");
  }
  // Fade in list items on big screen
  if (window.innerWidth < 1000) {
    if (window.scrollY < 450) {
      $("#infoList").hide();
    } else {
      $("#infoList").fadeIn("slow");
    }
    if (window.scrollY < 10) {
      $("#aboutList").hide();
    } else {
      $("#aboutList").fadeIn("slow");
    }
  } else {
    if (window.scrollY < 700) {
      $("#infoList").hide();
    } else {
      $("#infoList").fadeIn("slow");
    }
    if (window.scrollY < 200) {
      $("#aboutList").hide();
    } else {
      $("#aboutList").fadeIn("slow");
    }
  }

  //console.log(window.scrollY);
  //console.log(window.innerWidth);
});
