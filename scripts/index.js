window.addEventListener('load', () => {
  const menuButton = document.querySelector("#menu_button");
  const menu = document.querySelector("#primary-navigation");

  menuButton.addEventListener('click', (event) => {
    const visibility = menu.getAttribute('data-visible');
    console.log((visibility === "true") ? "false" : "true")
    menu.setAttribute("data-visible", (visibility === "true") ? "false" : "true");
  })
})