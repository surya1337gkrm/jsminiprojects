const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.container');

const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));

//search

btn.addEventListener('click', () => {
  search.classList.add('active');
  input.focus();
});

