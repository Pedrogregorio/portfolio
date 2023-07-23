function toggleMenu() {
  const menu = document.querySelector(".navigation");
  const menuIcon = document.querySelector("header button");

  menu.classList.toggle('active');
  menuIcon.classList.toggle('active');
}