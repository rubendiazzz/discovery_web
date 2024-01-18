// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
	  e.preventDefault();
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });
  
  // Simple fade-in animation when the element is in view
  window.addEventListener('scroll', fadeIn);
  
  function isInView(el) {
	const rect = el.getBoundingClientRect();
	return (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
  }
  
  function fadeIn() {
	const elements = document.querySelectorAll('.fade-in');
	for (let i = 0; i < elements.length; i++) {
	  if (isInView(elements[i])) {
		elements[i].style.opacity = 1;
		elements[i].style.transform = 'translateY(0)';
	  }
	}
  }
  
  // Initialize all elements with the 'fade-in' class to be transparent and moved up
  document.addEventListener('DOMContentLoaded', () => {
	const fadeElements = document.querySelectorAll('.fade-in');
	fadeElements.forEach(el => {
	  el.style.opacity = 0;
	  el.style.transform = 'translateY(20px)';
	  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
	});
  });
  