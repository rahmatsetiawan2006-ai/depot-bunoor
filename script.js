const cards = document.querySelectorAll('.menu-card');

cards.forEach(card => {
  card.addEventListener('mousemove', () => {
    card.style.transform = 'translateY(-10px) scale(1.02)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px) scale(1)';
  });
});
