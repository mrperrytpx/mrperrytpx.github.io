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
