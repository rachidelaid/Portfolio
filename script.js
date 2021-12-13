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

links.forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.remove('active');
    document.querySelector('.mobile-menu').style.display = 'none';
  });
});
