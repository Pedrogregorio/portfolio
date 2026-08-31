// Configuração do Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Função para criar o observer
const createObserver = (elements, animationClass) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        // Desconecta o observer após a animação ser ativada
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach(element => {
    observer.observe(element);
  });
};

// Função para inicializar todas as animações
const initAnimations = () => {
  // Títulos das seções
  const titles = document.querySelectorAll('.base-section .title');
  createObserver(titles, 'animate');

  // Descrição das habilidades
  const skillsDescription = document.querySelectorAll('.skills-description');
  createObserver(skillsDescription, 'animate');

  // Cards de jobs
  const jobCards = document.querySelectorAll('.job-card');
  createObserver(jobCards, 'animate');

  // Cards acadêmicos
  const academicCards = document.querySelectorAll('.academic-card');
  createObserver(academicCards, 'animate');

  // Cards de projetos / carrossel
  const projectsCarousel = document.querySelectorAll('.projects-carousel, .carousel-controls');
  createObserver(projectsCarousel, 'animate');

  // Animações para a seção de habilidades
  const skillsCategories = document.querySelectorAll('.skills-category');
  createObserver(skillsCategories, 'animate');
};

// Inicializa as animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initAnimations);