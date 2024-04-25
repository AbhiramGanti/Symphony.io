window.onload = () => {
    document.body.style.backgroundColor = '#000';
  
    const nav = document.querySelector('#nav');
    const navHeight = nav.offsetHeight;
    scrollContainer.style.top = `${navHeight}px`;
  
    // Add an event listener to the window scroll event
    window.addEventListener('scroll', () => {
      // Check if the scroll container is in view
      if (isInView(scrollContainer)) {
        // Add the 'scrolled' class to the container
        scrollContainer.classList.add('scrolled');
      } else {
        // Remove the 'scrolled' class
        scrollContainer.classList.remove('scrolled');
      }
    });
  
    // Function to check if an element is in view
    function isInView(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.top >= -(element.offsetHeight - window.innerHeight)
      );
    }
  };

  function redirectToLearnPage() {
    if (window.location.href.includes("home.html")) {
        // Load the learn.html page for 4 seconds
        window.location.href = "learn.html";

        // Wait for 4 seconds
        setTimeout(function() {
            // Redirect to the index.html page
            window.location.href = "index.html";
        }, 4000);
    }
}