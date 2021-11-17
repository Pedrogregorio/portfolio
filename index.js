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


const textAboutOne = `My name's Gregorio, i'm from Brasil.
              I come from a place where we value a job well done.
              I'm a bit of an introverted person, but when I fit in one place,
              I can be the most amazing person you'll ever meet.`;

const textAboutTwo = `When I'm programming I try to make my work run masterfully.
                      I fell in love with programming after I met an amazing person
                      who taught me how to write my first "Hello world!".
                      forgive me but i'm not fluent or anything... yet!`;

const arrayOne = textAboutOne.split("");
const arrayTwo = textAboutTwo.split("");
var timer;

function frameLooper () {
  if (arrayOne.length > 0) document.querySelector("#text-about-one").innerHTML += arrayOne.shift();
  else if (arrayTwo.length > 0) document.querySelector("#text-about-two").innerHTML += arrayTwo.shift();
  else clearTimeout(timer);
  loopTimer = setTimeout('frameLooper()', 30);
}

frameLooper();