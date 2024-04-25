 document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        window.location.href = 'home.html';
      }, 4000);
    });
  
  const logo = document.querySelector('.logo');

  logo.addEventListener('click', () => {
      document.body.style.backgroundColor = '#fff';
  });

  const loadingSpinner = document.querySelector('.loading-spinner');

setTimeout(() => {
    loadingSpinner.style.display = 'flex';
}, 1500);

window.onload = () => {
    loadingSpinner.style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
});