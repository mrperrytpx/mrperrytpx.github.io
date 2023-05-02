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
  const openStatus = toggleButton.getAttribute("data-open");

  if (openStatus === "false") {
    document.body.classList.add("overflow-y-hidden");
    toggleButton.setAttribute("data-open", true);
    ham2.classList.add("opacity-0");
    ham1.classList.add("rotate-45", "translate-x-1");
    ham3.classList.add("-rotate-45", "translate-x-1");
  } else {
    toggleButton.setAttribute("data-open", false);
    ham2.classList.remove("opacity-0");
    ham1.classList.remove("rotate-45", "translate-x-1");
    ham3.classList.remove("-rotate-45", "translate-x-1");

    document.body.classList.remove("overflow-y-hidden");
  }

  ul.classList.toggle("translate-x-full");
}

toggleButton.addEventListener("click", () => {
  toggleMobileNav();
});

const navLinks = document.querySelectorAll("#navLink");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMobileNav();
  });
});

// // project observer

// const asides = document.querySelectorAll("aside");
// const projImages = document.querySelectorAll("#projImage");

// const projectsOptions = {
//   rootMargin: "0px",
//   threshold: 0.3,
// };

// const asideObserver = new IntersectionObserver((entries, _observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.remove("opacity-0");
//       entry.target.classList.remove("translate-x-[100px]");
//     }
//   });
// }, projectsOptions);

// const projImagesObserver = new IntersectionObserver((entries, _observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.remove("opacity-0");
//       entry.target.classList.remove("-translate-x-[100px]");
//     }
//   });
// }, projectsOptions);

// asides.forEach((aside) => asideObserver.observe(aside));
// projImages.forEach((image) => projImagesObserver.observe(image));
