window.addEventListener('load', () => {
  const menuButton = document.getElementById('menu_button');
  const menu = document.getElementById('primary-navigation');

  const openAndClose = () => {
    const visibility = menu.getAttribute('data-visible');
    console.log((visibility === 'true') ? 'false' : 'true');
    menu.setAttribute('data-visible', (visibility === 'true') ? 'false' : 'true');
  };

  menuButton.addEventListener('click', openAndClose);
  Array.of(...document.querySelectorAll('.link > a')).forEach((link) => {
    link.addEventListener('click', openAndClose);
  });
});
