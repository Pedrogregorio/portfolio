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

  // Cards de jobs
  const jobCards = document.querySelectorAll('.job-card');
  createObserver(jobCards, 'animate');

  // Cards acadêmicos
  const academicCards = document.querySelectorAll('.academic-card');
  createObserver(academicCards, 'animate');

  // Cards de projetos
  const projectLinks = document.querySelectorAll('.project-link');
  createObserver(projectLinks, 'animate');

  // Animações para a seção de habilidades
  const skillsCategories = document.querySelectorAll('.skills-category');
  const skillItems = document.querySelectorAll('.skill-item');

  const animateSkills = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');

        // Anima a barra de progresso
        if (entry.target.classList.contains('skill-item')) {
          const progressBar = entry.target.querySelector('.progress');
          const level = entry.target.dataset.level;
          progressBar.style.width = `${level}%`;
        }
      }
    });
  };

  const skillsObserver = new IntersectionObserver(animateSkills, {
    threshold: 0.1
  });

  skillsCategories.forEach(category => {
    skillsObserver.observe(category);
  });

  skillItems.forEach(item => {
    skillsObserver.observe(item);
  });
};

// Inicializa as animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', initAnimations);