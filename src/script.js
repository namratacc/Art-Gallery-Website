const hamburger = document.querySelector(".navigation__hamburger");
const navList = document.querySelector(".navigation__list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".navigation__link").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  })
);
