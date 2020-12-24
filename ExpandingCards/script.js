let currentActive = 1;

const panels = document.querySelectorAll('.panel');
const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

const removeactiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

const update = () => {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('highlight');
    } else {
      circle.classList.remove('highlight');
    }
  });

  const highlights = document.querySelectorAll('.highlight');
  progress.style.width =
    ((highlights.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (currentActive === circles.length) {
    next.disabled = true;
    prev.disabled = false;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

panels.forEach((panel, i) => {
  panel.addEventListener('click', () => {
    removeactiveClasses();
    panel.classList.add('active');
    currentActive = i + 1;
    update();
  });
});

//progress-bar

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  panels[currentActive - 1].click();
  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  panels[currentActive - 1].click();
  update();
});
