document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  });
});

function toggleMenu() {
  const navbar = document.getElementById("sidemenu");

  if (navbar.classList.contains("active")) {
    navbar.style.width = "0";
    setTimeout(() => {
      navbar.classList.remove("active");
    }, 400);
  } else {
    navbar.classList.add("active");
    navbar.style.width = "30%";
  }
}

var typed = new Typed("#element", {
  strings: ["Web Developer", "Graphics Designer", "Web Designer"],
  typeSpeed: 50,
});
