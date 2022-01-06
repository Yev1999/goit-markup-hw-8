(() => {
  const refs = {
    openMenuBtn: document.querySelector('.open-menu-btn'),
    closeMenuBtn: document.querySelector('.close-menu-btn'),
    menu: document.querySelector('.mob--menu'),
  section: document.querySelector('.section'),
      footer: document.querySelector('.footer')
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
      refs.section.classList.toggle('is-hidden');
      refs.footer.classList.toggle('is-hidden');
    refs.menu.style.zIndex = '10'
  }
})();