// Simple intersection observer utility for scroll animations
export const createScrollObserver = () => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    // Target elements with [data-animate] attribute
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Once animated, no need to observe anymore
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% visible
      rootMargin: '0px 0px -10% 0px' // slightly before visible
    });
    
    elements.forEach((el) => {
      el.classList.add('animate-prepare'); // Add starting styles
      observer.observe(el);
    });
    
    return observer;
  }
  return null;
};