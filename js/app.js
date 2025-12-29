document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const sections = document.querySelectorAll('.section');
  const globalBg = document.getElementById('global-bg');

  // Mapeo de secciones a imágenes de fondo
  const backgrounds = {
    'proyectos': 'images/backgrounds/back_2.webp',
    'bio': 'images/backgrounds/back_3.webp',
    'certificados': 'images/backgrounds/back_1.webp'
  };

  // Función para actualizar fondo
  function setBackground(sectionId) {
    const bgUrl = backgrounds[sectionId];
    if (bgUrl && globalBg) {
      globalBg.style.backgroundImage = `url('${bgUrl}')`;
    }
  }

  // Inicializar fondo basado en la sección activa (por defecto proyectos)
  setBackground('proyectos');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      navButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.classList.remove('active'));

      // Show target section
      const targetId = btn.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
      }

      // Cambiar fondo
      setBackground(targetId);
    });
  });
});
