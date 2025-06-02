//** DARK MODE **//

btnModoOscuro.addEventListener('click', () => {
  const html = document.documentElement;

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    btnModoOscuro.textContent = '🌙'; // Cambia a luna si se desactiva
  } else {
    html.classList.add('dark');
    btnModoOscuro.textContent = '☀️'; // Cambia a sol si se activa
  }
});
