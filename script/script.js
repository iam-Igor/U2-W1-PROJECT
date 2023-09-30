const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  const scrollPage = window.scrollY || window.pageYOffset;

  if (scrollPage > 0) {
    navbar.classList.add("cngBkg");
  } else {
    navbar.classList.remove("cngBkg");
  }
});

const mLetters = document.getElementById("wordM");

mLetters.setAttribute("opacity", "1");

const disapperingLetters = function () {
  if (labelValue.length > 0) {
    labelValue = labelValue.slice(0, -1);
  }

  mLetters.innerText = labelValue;
};
