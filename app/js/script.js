const activateSidebar = () => {
  const hamBurgerBtn = document.querySelector(".sidebar");
  hamBurgerBtn.classList.add("sidebar__active");

  const btn = document.querySelector(".hamburger__btn");
  btn.classList.toggle("rotate__btn");
};

const deActivateSidebar = () => {
  const hamBurgerBtn = document.getElementById("sidebar-menu");
  hamBurgerBtn.classList.remove("sidebar__active");
};

document.addEventListener("DOMContentLoaded", initApp);
