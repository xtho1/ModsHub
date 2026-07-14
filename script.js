const CONTENT_LOCKER_URL = "https://YOUR_CONTENT_LOCKER_LINK";

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();

  document.querySelectorAll('[data-content-locker-link]').forEach((link) => {
    link.href = CONTENT_LOCKER_URL;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
});
