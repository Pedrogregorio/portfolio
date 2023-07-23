function toggleMenu() {
  const screenWidth = window.screen.width

  if(screenWidth >= 990) return;

  const menu = document.querySelector(".navigation");
  const menuIcon = document.querySelector("header button");

  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
}