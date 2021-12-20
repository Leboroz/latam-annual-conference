window.addEventListener('load', () => {
  const menuButton = document.getElementById("menu_button");
  const menu = document.getElementById("primary-navigation");
  const cards = document.getElementById('card_wrapper');
  const peopleCard = document.getElementById('people_card')

  menuButton.addEventListener('click', (event) => {
    const visibility = menu.getAttribute('data-visible');
    console.log((visibility === "true") ? "false" : "true")
    menu.setAttribute("data-visible", (visibility === "true") ? "false" : "true");
  })

  const icons = ['lecture', 'cc exhibition', 'forum', 'workshop', 'cc ignite'];
  icons.forEach(icon => {
    const card = document.createElement('div');
    card.className = "card grid";
    card.innerHTML =
      `
      <figure class="img-wrapper">
        <img class="img" src="./assets/images/icons/${icon}.svg" alt="${icon}">
      </figure>
      <h3 class="card-title text-secondary">${icon}</h2>
      <p class="card-paragraph text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
      eum.</p>
    `
    cards.appendChild(card);
  });

  // for (let i = 0; i < 6; i += 1) {
  //   const personCard = document.createElement('div');
  //   peopleCard.className = 'person-card'
  //   peopleCard.appendChild(personCard);
  // }
})
