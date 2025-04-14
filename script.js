document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
  gsap.from("section", { duration: 1, opacity: 0, stagger: 0.3, delay: 0.5 });
});
