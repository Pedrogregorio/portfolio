const initProjectsCarousel = () => {
  const carousel = document.querySelector('.projects-carousel');
  if (!carousel) return;

  const viewport = carousel.querySelector('.carousel-viewport');
  const track = carousel.querySelector('.carousel-track');
  const slides = Array.from(carousel.querySelectorAll('.project-link'));
  const dotsContainer = carousel.querySelector('.carousel-dots');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const enableAutoplay = carousel.dataset.autoplay === 'true';

  if (!viewport || !track || slides.length === 0 || !dotsContainer) return;

  let currentIndex = 0;
  let itemsPerView = 2;
  let autoplayId = null;
  const AUTOPLAY_DELAY = 4500;

  const getItemsPerView = () => (window.innerWidth <= 820 ? 1 : 2);

  const getMaxIndex = () => Math.max(0, slides.length - itemsPerView);

  const getGap = () => parseFloat(getComputedStyle(track).gap) || 0;

  const setSlideWidths = () => {
    const gap = getGap();
    const slideWidth = (viewport.clientWidth - gap * (itemsPerView - 1)) / itemsPerView;

    slides.forEach((slide) => {
      slide.style.flex = `0 0 ${slideWidth}px`;
      slide.style.width = `${slideWidth}px`;
    });
  };

  const updateDots = () => {
    const maxIndex = getMaxIndex();
    dotsContainer.innerHTML = '';

    for (let i = 0; i <= maxIndex; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = `carousel-dot${i === currentIndex ? ' active' : ''}`;
      dot.setAttribute('aria-label', `Ir para o grupo de projetos ${i + 1}`);
      dot.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
      dot.addEventListener('click', () => {
        goTo(i);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    }
  };

  const updateTrackPosition = () => {
    const gap = getGap();
    const slideWidth = slides[0].getBoundingClientRect().width;
    const offset = currentIndex * (slideWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;
  };

  const goTo = (index) => {
    const maxIndex = getMaxIndex();
    currentIndex = ((index % (maxIndex + 1)) + (maxIndex + 1)) % (maxIndex + 1);
    updateTrackPosition();
    updateDots();
  };

  const next = () => goTo(currentIndex + 1);
  const prev = () => goTo(currentIndex - 1);

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  };

  const startAutoplay = () => {
    if (!enableAutoplay) return;
    stopAutoplay();
    autoplayId = setInterval(next, AUTOPLAY_DELAY);
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  const refreshLayout = () => {
    itemsPerView = getItemsPerView();
    currentIndex = Math.min(currentIndex, getMaxIndex());
    setSlideWidths();
    updateTrackPosition();
    updateDots();
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prev();
      restartAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      next();
      restartAutoplay();
    });
  }

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);
  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', (event) => {
    if (!carousel.contains(event.relatedTarget)) {
      startAutoplay();
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('focus', stopAutoplay);
    prevBtn.addEventListener('blur', startAutoplay);
  }

  if (nextBtn) {
    nextBtn.addEventListener('focus', stopAutoplay);
    nextBtn.addEventListener('blur', startAutoplay);
  }

  refreshLayout();
  startAutoplay();

  window.addEventListener('resize', refreshLayout);
};

document.addEventListener('DOMContentLoaded', initProjectsCarousel);
