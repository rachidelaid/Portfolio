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
    title: 'Anime Higher Lower',
    image: './assets/work-1.jpeg',
    imageAlt: 'Anime Higher Lower Image',
    description:
      'A game where you have to decide if the right anime is ranked lower or higher than the left one. guess wrong once and you have to start again',
    langs: ['Svelte'],
    gitLink: 'https://github.com/rachidelaid/AnimeHigherLower',
    srcLink: 'https://anime-higher-lower.netlify.app/',
  },
  {
    id: 2,
    title: 'pokeDB',
    image: './assets/work-2.png',
    imageAlt: 'pokeDB Image',
    description:
      'PokeDB includes the PokeAPI and Involvement API. You can like pokemons and comment on their page, check their type and base stats.',
    langs: ['html', 'css', 'javaScript', 'webpack'],
    gitLink: 'https://github.com/rachidelaid/pokeDB',
    srcLink: 'https://pokedb.netlify.app/',
  },
  {
    id: 3,
    title: 'Pomodoro Timer',
    image: './assets/work-3.png',
    imageAlt: 'Pomodoro Timer Image',
    description:
      'A classic pomodoro timer, with extra functionality like changing the accent color and fonts.',
    langs: ['html', 'css', 'javaScript'],
    gitLink: 'https://github.com/rachidelaid/pomodoro-vanilla',
    srcLink: 'https://rachidelaid.github.io/pomodoro-vanilla',
  },
  {
    id: 4,
    title: 'React Todo App',
    image: './assets/work-4.png',
    imageAlt: 'React Todo App Image',
    description:
      'This is classic todo app built with ReactJS with a few twists! This app includes a dark/light theme toggle and drag & drop reordering',
    langs: ['ReactJS'],
    gitLink: 'https://github.com/rachidelaid/react-todolist',
    srcLink: 'https://todolist-react-app.herokuapp.com/',
  },
  {
    id: 5,
    title: 'Book Store',
    image: './assets/work-5.png',
    imageAlt: 'Book Store Image',
    description:
      'This is a website to Display a list of books using an API, you can also add new book and removing it.',
    langs: ['ReactJS', 'Redux'],
    gitLink: 'https://github.com/rachidelaid/Bookstore-reactjs',
    srcLink: 'https://reactjs-book-store-cms.netlify.app/',
  },
  {
    id: 6,
    title: 'Human Benchmark',
    image: './assets/work-6.png',
    imageAlt: 'Human Benchmark Image',
    description:
      'this is a clone of human benchmark website, built using reactJS. check the live link below if you wanna try it out.',
    langs: ['ReactJS'],
    gitLink: 'https://github.com/rachidelaid/human-benchmark',
    srcLink: 'https://human-benchmark.netlify.app/',
  },
  {
    id: 7,
    title: 'Wordle',
    image: './assets/work-7.png',
    imageAlt: 'Wordle Image',
    description:
      'a clone of the wordle game build using vuejs 3. with extra functionality like changing the theme',
    langs: ['VueJS'],
    gitLink: 'https://github.com/rachidelaid/WORDLE-VueJS',
    srcLink: 'https://vuejs-wordle.netlify.app/',
  },
  {
    id: 8,
    title: 'Svelte Quiz App',
    image: './assets/work-8.png',
    imageAlt: 'Svelte Quiz App Image',
    description:
      'this is a todo list on the Kanban style. built using svelte and svelte-dnd-actions. you can create list and tasks, edit at any time and drag them around.',
    langs: ['svelte'],
    gitLink: 'https://github.com/rachidelaid/WORDLE-VueJS',
    srcLink: 'https://trello-svelte-clone.netlify.app/',
  },
  {
    id: 9,
    title: 'Rails Recipe App ',
    image: './assets/work-9.png',
    imageAlt: 'Rails Recipe App Image',
    description:'The recipe is created with ruby on rails and allows logged in users to create recipes from food items they have available. It also allows them to view public recipes shared by other users.',
    langs: ['ruby on rails', 'bootstrap'],
    gitLink: 'https://github.com/rachidelaid/rails-recipe-app',
    srcLink: 'https://github.com/rachidelaid/rails-recipe-app',
  },
];

for (let i = 0; i < projects.length; i += 1) {
  const project = projects[i];

  work.innerHTML += `
    <div class="work-card" id="project-${project.id}">
      <img src="${project.image}" alt="${project.imageAlt}" />
      <div class="details">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <ul class="langauges">
          ${project.langs.map((l) => `<li>${l}</li>`).join('')}
        </ul>
        <button>See Project</button>
      </div>
    </div>
  `;
}

// Popup Logic
const modal = document.querySelector('.modal-wrapper');
const close = document.querySelector('.close-modal');
const titleElm = document.querySelector('.modal-title h2');
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
