const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementsByTagName("nav")[0].className = "scrolled";
    document.getElementsByClassName("nav-icons")[0].style.display = " none";
  } else {
    document.getElementsByTagName("nav")[0].className = "background";
    document.getElementsByClassName("nav-icons")[0].style.display = "flex";
  }
}