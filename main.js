(function () {
  // Marcar enlace activo según URL
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navlink').forEach(a => {
    if (a.getAttribute('href') === file) a.classList.add('active');
  });

  // Toggle sidebar en móvil + accesibilidad
  const btnMenu = document.getElementById('btnMenu');
  const sidebar = document.getElementById('sidebar');

  if (btnMenu && sidebar) {
    const toggle = () => {
      const isOpen = sidebar.classList.toggle('open');
      btnMenu.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
    };

    btnMenu.addEventListener('click', toggle);

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      const isOpen = sidebar.classList.contains('open');
      if (!isOpen) return;
      const clickInsideSidebar = sidebar.contains(e.target);
      const clickOnButton = btnMenu.contains(e.target);
      if (!clickInsideSidebar && !clickOnButton) {
        sidebar.classList.remove('open');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        btnMenu.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  }
})();
