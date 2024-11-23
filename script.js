window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 3000);
});

const scrollToTopButton = document.getElementById("scrollup");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

scrollToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const logoscroll = document.getElementById("footer_logo_scroll");

logoscroll.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
document

document
  .getElementById("language_switch")
  .addEventListener("change", function () {
    if (this.checked) {
      window.location.href = "index.ua.html";
    } else {
      window.location.href = "index.html";
    }
  });