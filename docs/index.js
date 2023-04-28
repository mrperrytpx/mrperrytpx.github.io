const sections = document.querySelectorAll("section");
const paragraphs = document.querySelectorAll("#pg");

const bgOptions = {
  rootMargin: "-100px",
  threshold: 0.5,
};

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

const pgOptions = {
  rootMargin: "-100px 0px",
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
