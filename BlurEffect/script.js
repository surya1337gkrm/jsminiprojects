const bg = document.querySelector('.bg');
const loadtext = document.querySelector('.loading-text');

let load = 0;
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const blurring = () => {
  load++;
  if (load > 99) {
    clearInterval(interval);
  }
  loadtext.innerText = `${load}%`;
  loadtext.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};
let interval = setInterval(blurring, 30);
