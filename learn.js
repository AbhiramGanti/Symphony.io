const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdownBtn.addEventListener('mouseover', () => {
  dropdownMenu.style.display = 'block';
});

dropdownBtn.addEventListener('mouseout', () => {
  dropdownMenu.style.display = 'none';
});