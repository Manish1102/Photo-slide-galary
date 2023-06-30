document.addEventListener("DOMContentLoaded", function(event) {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    function showSlide() {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[currentSlide].classList.add("active");
      currentSlide = (currentSlide + 1) % slides.length;
    }
  
    setInterval(showSlide, 2000); // Change slide every 3 seconds
  
    
  });
  