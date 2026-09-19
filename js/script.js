const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const revealItems = document.querySelectorAll('.intro, .features, .pulse, .gallery, .reserve, .delivery, .visit');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('is-visible'); revealObserver.unobserve(target); }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => { item.classList.add('reveal'); revealObserver.observe(item); });

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('mousemove', (event) => {
    const box = button.getBoundingClientRect();
    button.style.setProperty('--x', `${event.clientX - box.left}px`);
    button.style.setProperty('--y', `${event.clientY - box.top}px`);
  });
});
