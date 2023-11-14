const menu = document.querySelector(".navbar-nav");

document.querySelector("#menu").onclick = () => {
  menu.classList.toggle("active");
};

const hamburger = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("active");
  }
});

window.onscroll = function () {
  const nav = document.querySelector(".navbar");
  const color = nav.offsetTop;

  if (window.pageYOffset > color) {
    nav.classList.add("navbar-blur");
  } else {
    nav.classList.remove("navbar-blur");
  }
};

const navLinks = document.querySelectorAll(".navbar-nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = link.getAttribute("href").substring(1);

    const targetPosition = document.getElementById(targetId).offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
