window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
      let offsetTop = section.offsetTop;
      let distanceFromTop = offsetTop - scrollTop;
      let sectionHeight = section.clientHeight;
      let sectionScrollProgress = distanceFromTop / windowHeight;
      let backgroundImages = section.querySelectorAll('.background-image');
      backgroundImages.forEach(function(image) {
        image.style.transform = `translateY(${sectionScrollProgress * 50}px)`;
      });
    });
  });
  
  // Code for fade-in/fade-out text in About page
  document.addEventListener('DOMContentLoaded', function() {
    const fadeText = document.querySelector('.fade-in-out-text');
    if (fadeText) {
      fadeText.style.display = 'block';
    }
  });
  