const projects = document.querySelectorAll('[data-anime]');
const animateClass = 'animate';
function animeProjects() {
  const windowTop = window.pageYOffset || document.documentElement.scrollTop;
  const animateOn = windowTop + ((window.innerHeight * 3) / 4)
  // projects.forEach((element) => {
  //   if(animateOn > element.offsetTop) element.classList.add(animateClass);
  // })
}

window.addEventListener('scroll', () => {
  animeProjects();
});


const textAboutOne = `Olá a todos!`;

const textAboutTwo = `Meu nome é Pedro Gregorio e sou um desenvolvedor web
                      com três anos de experiência. Ao longo desse tempo,
                      tive o privilégio de trabalhar em diversos projetos
                      com uma ampla variedade de clientes, o que me permitiu
                      expandir meu conhecimento e aprimorar minhas habilidades
                      em desenvolvimento de softwares.`;

const arrayOne = textAboutOne.split("");
const arrayTwo = textAboutTwo.split("");
var timer;

function frameLooper () {
  if (arrayOne.length > 0) document.querySelector("#text-about-one").innerHTML += arrayOne.shift();
  else if (arrayTwo.length > 0) document.querySelector("#text-about-two").innerHTML += arrayTwo.shift();
  else clearTimeout(timer);
  loopTimer = setTimeout('frameLooper()', 10);
}

frameLooper();