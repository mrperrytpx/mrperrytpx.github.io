const sections = document.querySelectorAll("section");

const options = {
  rootMargin: "-100px 0px",
  threshold: 0.333,
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
}, options);

sections.forEach((section) => observer.observe(section));
