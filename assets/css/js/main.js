document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section, .hero");
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach(sec => io.observe(sec));
  });
  