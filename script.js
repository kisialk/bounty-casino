(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var burger = document.querySelector(".header__burger");
  var dropdown = document.querySelector(".header__dropdown");

  if (!burger || !dropdown) return;

  function setOpen(open) {
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    dropdown.classList.toggle("is-open", open);
    dropdown.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
      dropdown.removeAttribute("hidden");
    } else {
      dropdown.setAttribute("hidden", "hidden");
    }
  }

  function toggle() {
    var open = burger.getAttribute("aria-expanded") === "true";
    setOpen(!open);
  }

  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    toggle();
  });

  document.addEventListener("click", function (e) {
    if (!header || !header.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setOpen(false);
    }
  });

  dropdown.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });
})();
