const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY || window.pageYOffset;

  if (scrollPage > 0) {
    navbar.classList.add("cngBkg");
  } else {
    navbar.classList.remove("cngBkg");
  }
});
