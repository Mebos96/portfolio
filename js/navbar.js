const scrollFunction = () => {
  const navbar = document.getElementsByTagName("nav")[0];
  const navbarIcons = navbar.getElementsByClassName("nav-icons")[0];

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.classList.add("scrolled");
    navbarIcons.classList.add('hide');
  } 
  else {
    navbar.classList.remove("scrolled");
    navbarIcons.classList.remove('hide');
  }
}