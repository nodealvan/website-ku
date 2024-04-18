window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Get form data
      const formData = new FormData(form);
      const jsonData = {};
      formData.forEach((value, key) => {
          jsonData[key] = value;
      });
      
      // Send form data to Gmail using Gmail API
      fetch('/send-email', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonData)
      })
      .then(response => {
          if (response.ok) {
              alert('Email sent successfully!');
              form.reset(); // Clear form fields
          } else {
              alert('Failed to send email. Please try again later.');
          }
      })
      .catch(error => {
          console.error('Error:', error);
          alert('Failed to send email. Please try again later.');
      });
  });
});

// Code for parallax effect
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