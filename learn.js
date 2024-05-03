const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdownBtn.addEventListener('mouseover', () => {
  dropdownMenu.style.display = 'block';
});

dropdownBtn.addEventListener('mouseout', () => {
  dropdownMenu.style.display = 'none';
});

const mainElement = document.querySelector('.body_wraper main');

// Add loaded class to trigger fade-in animation
mainElement.classList.add('loaded');

// Add event listener to window scroll event
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  const elementTop = mainElement.offsetTop;

  if (scrollPosition > elementTop) {
    // Add scrolled class to trigger fade-out animation
    mainElement.classList.add('scrolled');

    // Remove scrolled class after 3-4 seconds to trigger fade-in animation
    setTimeout(() => {
      mainElement.classList.remove('scrolled');
    }, 2000);
  }
});

const carousel = document.querySelector("#cCarousel");
const cardCarousel = carousel.querySelector(".card-carousel-inner");
const prevArrow = carousel.querySelector(".prev");
const nextArrow = carousel.querySelector(".next");

let currentPosition = 0;

function moveToNext() {
  currentPosition -= 250;
  if (currentPosition < -1000) {
    currentPosition = 0;
  }
  cardCarousel.style.transform = `translateX(${currentPosition}px)`;
}

function moveToPrev() {
  currentPosition += 250;
  if (currentPosition > 0) {
    currentPosition = -1000;
  }
  cardCarousel.style.transform = `translateX(${currentPosition}px)`;
}

nextArrow.addEventListener("click", moveToNext);
prevArrow.addEventListener("click", moveToPrev);
