// background observer
const sections = document.querySelectorAll("section");

const bgOptions = {
  rootMargin: "0px",
  threshold: 0.5,
};

if (![...document.body.classList].find((x) => x.includes("bg-"))) {
  document.body.classList.add("bg-black");
}

const observer = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const bgColor = entry.target.dataset.bg;
      const currColor = [...document.body.classList].find((x) =>
        x.includes("bg-")
      );
      if (currColor) document.body.classList.remove(currColor);
      document.body.classList.add(bgColor);
    }
  });
}, bgOptions);

sections.forEach((section) => observer.observe(section));

// Paragraph observer
const paragraphs = document.querySelectorAll("#pg");

const pgOptions = {
  rootMargin: "-25px 0px",
  threshold: 1,
};

const pgObserver = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
      entry.target.classList.add("translate-y-[60px]");
    }
  });
}, pgOptions);

paragraphs.forEach((pg) => pgObserver.observe(pg));

// project observer

const asides = document.querySelectorAll("aside");
const projImages = document.querySelectorAll("#projImage");

const projectsOptions = {
  rootMargin: "0px",
  threshold: 0.3,
};

const asideObserver = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
      entry.target.classList.remove("translate-x-[100px]");
    }
  });
}, projectsOptions);

const projImagesObserver = new IntersectionObserver((entries, _observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
      entry.target.classList.remove("-translate-x-[100px]");
    }
  });
}, projectsOptions);

asides.forEach((aside) => asideObserver.observe(aside));
projImages.forEach((image) => projImagesObserver.observe(image));
