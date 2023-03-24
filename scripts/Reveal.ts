export default () => {
  Reveal(); // first time
  window.addEventListener("scroll", () => Reveal()); // every scroll
};

function Reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((reveal) => {
    const revealTop = reveal.getBoundingClientRect().top;
    if (revealTop < window.innerHeight + 50) reveal.classList.add("active");
  });
}
