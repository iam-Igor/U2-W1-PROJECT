const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY || window.pageYOffset;

  if (scrollPage > 0) {
    navbar.classList.add("cngBkg");
  } else {
    navbar.classList.remove("cngBkg");
  }
});

const mLetters = document.getElementsByClassName("wordM")[0];

console.log(mLetters.ariaLabel);

mLetters.ariaLabel.forEach(function () {});
