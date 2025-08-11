const sections = document.querySelectorAll('.hidden');

const observerOptions = {
  root: null, // relative to the viewport
  rootMargin: '0px',
  threshold: 0.5 // trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // If you want the animation to only happen once, uncomment the line below:
      // observer.unobserve(entry.target);
    } else {
      // If you want the animation to reverse when scrolling back up:
      entry.target.classList.remove('show');
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});