// Mobile Menu
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.mobile-menu a');

menu.addEventListener('click', () => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  } else {
    menu.classList.add('active');
    document.querySelector('.mobile-menu').style.display = 'block';
  }
});

links.forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();

    menu.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});

// Project Popup
const work = document.querySelector('#works');
const projects = [
  {
    id: 1,
    title: 'Tonic',
    image: './assets/work-1.png',
    imageAlt: 'First Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    image: './assets/work-2.png',
    imageAlt: 'Second Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 3,
    title: 'Tonic',
    image: './assets/work-3.png',
    imageAlt: 'Third Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
  {
    id: 4,
    title: 'Multi-Post Stories',
    image: './assets/work-4.png',
    imageAlt: 'Fourth Project Image',
    details: ['CANOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: '#',
    srcLink: '#',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  work.innerHTML += `
    <div class="work-card" id="project-${project.id}">
      <img src="${project.image}" alt="${project.imageAlt}" />
      <div class="details">
        <h2>${project.title}</h2>
        <ul class="subTitle">
          ${project.details.map((d) => `<li>${d}</li>`).join('')}
        </ul>
        <p>${project.description}</p>
        <ul class="langauges">
          ${project.langs.map((l) => `<li>${l}</li>`).join('')}
        </ul>
        <button>See Project</button>
      </div>
    </div>
  `;
}

//Popup
const modal = document.querySelector('.modal-wrapper');
const close = document.querySelector('.close-modal');
const titleElm = document.querySelector('.modal-title h2');
const subTitle = document.querySelector('.modal .subTitle');
const img = document.querySelector('.modal img');
const paragraph = document.querySelector('.modal p');
const languages = document.querySelector('.modal-content .langauges');
const githubLink = document.querySelector('.modal-content .github-link');
const sourceLink = document.querySelector('.modal-content .source-link');

document.querySelectorAll('.work-card button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = Number(btn.parentNode.parentNode.id.split('-')[1]);
    const {
      title,
      image,
      imageAlt,
      details,
      description,
      langs,
      gitLink,
      srcLink,
    } = projects.find((p) => p.id === id);

    titleElm.innerText = title;
    subTitle.innerHTML = details.map((d) => `<li>${d}</li>`).join('');
    img.setAttribute('src', image);
    img.setAttribute('alt', imageAlt);
    paragraph.innerText = description;
    languages.innerHTML = langs.map((l) => `<li>${l}</li>`).join('');
    githubLink.setAttribute('href', gitLink);
    sourceLink.setAttribute('href', srcLink);

    modal.style.display = 'flex';
  });
});

close.addEventListener('click', () => {
  modal.style.display = 'none';
});
