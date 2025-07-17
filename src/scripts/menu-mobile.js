const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const backdrop = document.getElementById('menu-backdrop');

function toggleMenu() {
  menu.classList.toggle('open');
  backdrop.classList.toggle('show');
}

toggleBtn.addEventListener('click', toggleMenu);
backdrop.addEventListener('click', toggleMenu);
