// 1. Scroll suave para cualquier link interno
document.querySelectorAll('#nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    target.classList.add('visible'); // fuerza visible
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// 2. Observador para que aparezcan las secciones al scrollear
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: 0.05 });

document.querySelectorAll('.seccion').forEach(s => obs.observe(s));