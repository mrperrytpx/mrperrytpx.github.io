const linkEl = document.querySelector('link[rel="icon"]');

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  linkEl.href = "public/laptop-coding.svg";
} else {
  linkEl.href = "public/laptop-coding-dark.svg";
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      linkEl.href = "public/laptop-coding.svg";
    } else {
      linkEl.href = "public/laptop-coding-dark.svg";
    }
  });

// // Paragraph observer
const paragraphs = document.querySelectorAll("#pg");

const pgOptions = {
  rootMargin: `-25px 0px`,
  threshold: 0.1,
};

const pgObserver = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
      entry.target.classList.remove("translate-x-16");
      entry.target.classList.remove("-translate-x-16");
    }
  });
}, pgOptions);

paragraphs.forEach((pg) => pgObserver.observe(pg));

// //

const toggleButton = document.querySelector("#toggle");
const ul = document.querySelector("ul");

const ham1 = document.querySelector("#ham1");
const ham2 = document.querySelector("#ham2");
const ham3 = document.querySelector("#ham3");

function toggleMobileNav() {
  ham2.classList.toggle("opacity-0");
  ham1.classList.toggle("rotate-45");
  ham1.classList.toggle("translate-x-1");
  ham3.classList.toggle("-rotate-45");
  ham3.classList.toggle("translate-x-1");

  ul.classList.toggle("translate-x-full");
}

toggleButton.addEventListener("click", () => {
  toggleMobileNav();
  document.body.classList.toggle("overflow-y-hidden");
});

const navLinks = document.querySelectorAll("[data-id='navLink']");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileNav();
    document.body.classList.remove("overflow-y-hidden");
  });
});
