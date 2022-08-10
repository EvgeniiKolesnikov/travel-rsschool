let index = 1;

const slider = document.getElementById('slider');

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const prevB = document.getElementById('prevB');
const nextB = document.getElementById('nextB');
const slides = document.getElementsByClassName('slide');
const points = document.getElementsByClassName('point');

const nextSlide = n => {
  if (index == slides.length - 1) {
  } else {
    index++;
  }
  activeSlide(index);
}

const prevSlide = n => {
  if (index == 0) {
  } else {
    index--;
  }
  activeSlide(index);
}

const activeSlide = n => {
  // console.log(n);
  // slider.style.marginRight = `${n*840-840}px`;
  for (const slide of slides) {
    slide.classList.remove('active');
    slide.classList.remove('next');
    slide.classList.remove('prev');
  }
  for (const point of points) {
    point.classList.remove('destinations__point--active');
  }
  slides[n].classList.add('active');
  points[n].classList.add('destinations__point--active');

  if (n == 0) {
    prev.classList.add('disable');
    next.classList.remove('disable');
    slider.classList.add('left-pos');
    slider.classList.remove('center-pos');
    slider.classList.remove('right-pos');
  }
  if (n == 1) {
    prev.classList.remove('disable');
    next.classList.remove('disable');
    slider.classList.remove('left-pos');
    slider.classList.add('center-pos');
    slider.classList.remove('right-pos');
  }
  if (n == 2) {
    prev.classList.remove('disable');
    next.classList.add('disable');
    slider.classList.remove('left-pos');
    slider.classList.remove('center-pos');
    slider.classList.add('right-pos');
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
nextB.addEventListener('click', nextSlide);
prevB.addEventListener('click', prevSlide);