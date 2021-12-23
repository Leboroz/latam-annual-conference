window.addEventListener('load', () => {
  const menuButton = document.getElementById('menu_button');
  const menu = document.getElementById('primary-navigation');
  const cards = document.getElementById('card_wrapper');
  const peopleCards = document.getElementById('people_card');

  const openAndClose = () => {
    const visibility = menu.getAttribute('data-visible');
    console.log((visibility === 'true') ? 'false' : 'true');
    menu.setAttribute('data-visible', (visibility === 'true') ? 'false' : 'true');
  };

  menuButton.addEventListener('click', openAndClose);
  Array.of(...document.querySelectorAll('.link > a')).forEach((link) => {
    link.addEventListener('click', openAndClose);
  });

  const icons = ['lecture', 'cc exhibition', 'forum', 'workshop', 'cc ignite'];
  icons.forEach((icon) => {
    const card = document.createElement('div');
    card.className = 'card grid';
    card.innerHTML = `
      <figure class="img-wrapper">
        <img class="img" src="./assets/images/icons/${icon}.svg" alt="${icon}">
      </figure>
      <h3 class="card-title text-secondary">${icon}</h2>
      <p class="card-paragraph text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
      eum.</p>
    `;
    cards.appendChild(card);
  });

  const people = [
    {
      title: 'Fake person',
      subTitle: 'This person doesn\'t exist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima.',
    },
    {
      title: 'Fake person',
      subTitle: 'This person doesn\'t exist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima.',
    },
    {
      title: 'Fake person',
      subTitle: 'This person doesn\'t exist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima.',
    },
    {
      title: 'Fake person',
      subTitle: 'This person doesn\'t exist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima.',
    },
    {
      title: 'Fake person',
      subTitle: 'This person doesn\'t exist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima.',
    },
    {
      title: 'Fake person',
      subTitle: 'This person doesn\'t exist',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, minima.',
    },
  ];

  people.forEach((person, i) => {
    const personCard = document.createElement('div');
    personCard.className = 'person-card flex';
    personCard.setAttribute('data-visible', (i < 2 ? 'true' : 'false'));
    personCard.innerHTML = `
    <figure class="person-img-wrapper">
      <div class="img img-${i + 1}"></div>
    </figure>
    <div class="card-content flex">
      <h2 class="person-card-title text-primary">${person.title}</h2>
      <h3 class="person-card-sub-title text-secondary">${person.subTitle}</h3>
      <hr class="card-line">
      <p class="person-card-paragraph">${person.description}
      </p>
    </div>
    `;
    peopleCards.appendChild(personCard);
  });

  document.getElementById('see_more').addEventListener('click', (e) => {
    Array.of(...document.querySelectorAll('.person-card')).forEach((card, i) => card.setAttribute('data-visible', (i >= 2 && card.getAttribute('data-visible') === 'true') ? 'false' : 'true'));
    if (e.target.innerHTML.includes('MORE')) e.target.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    else e.target.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
  });
});
