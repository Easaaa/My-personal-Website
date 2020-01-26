const menu = document.querySelector('.menu');
const notActive = document.querySelectorAll('.not-active');
menu.addEventListener('click', () => {
  notActive.forEach(item => {
    item.classList.toggle('hide');
  });
});
