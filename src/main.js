import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  accordionButtons.forEach((button, index) => {
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `accordion-content-${index}`);
    
    const content = button.nextElementSibling;
    content.id = `accordion-content-${index}`;
    
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.accordion-icon');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      accordionButtons.forEach((otherBtn, otherIndex) => {
        if (otherIndex !== index) {
          const otherContent = otherBtn.nextElementSibling;
          const otherIcon = otherBtn.querySelector('.accordion-icon');
          
          otherBtn.setAttribute('aria-expanded', 'false');
          otherContent.classList.remove('open');
          otherIcon.classList.remove('rotated');
        }
      });

      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        content.classList.remove('open');
        icon.classList.remove('rotated');
      } else {
        button.setAttribute('aria-expanded', 'true');
        content.classList.add('open');
        icon.classList.add('rotated');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
