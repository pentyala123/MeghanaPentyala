// scroll reveal
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 80) {
      el.classList.add('in');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
