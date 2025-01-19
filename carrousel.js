const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = Array.from(track.children);

let currentIndex = 0;
let autoplayInterval;

// Fonction pour déplacer vers une diapositive spécifique
const moveToSlide = (index) => {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
};

// Boutons de navigation
nextBtn.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % slides.length;
  moveToSlide(nextIndex);
  resetAutoplay();
});

prevBtn.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  moveToSlide(prevIndex);
  resetAutoplay();
});

// Fonction d'autoplay
const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  }, 3000);
};

// Réinitialisation de l'autoplay après une interaction utilisateur
const resetAutoplay = () => {
  clearInterval(autoplayInterval);
  startAutoplay();
};

// Swipe pour mobile
let startX, isDragging = false;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const deltaX = startX - currentX;

  if (deltaX > 50) {
    const nextIndex = (currentIndex + 1) % slides.length;
    moveToSlide(nextIndex);
    isDragging = false;
    resetAutoplay();
  } else if (deltaX < -50) {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
    isDragging = false;
    resetAutoplay();
  }
});

track.addEventListener('touchend', () => {
  isDragging = false;
});

// Lancement de l'autoplay au démarrage
startAutoplay();
