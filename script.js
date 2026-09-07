document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky glass nav scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Scroll-Driven Reveal Observer
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealElements.forEach(el => revealObserver.observe(el));

  // 3. Dynamic Animated Stat Number Counters
  const statElements = document.querySelectorAll('.stat-number');
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetText = el.getAttribute('data-count') || el.textContent;
        const numMatch = targetText.match(/([0-9.]+)/);
        if (numMatch) {
          const targetNum = parseFloat(numMatch[1]);
          const suffix = targetText.replace(numMatch[1], '');
          let start = 0;
          const duration = 1600;
          const startTime = performance.now();
          const updateCount = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = (easeProgress * targetNum).toFixed(targetNum % 1 !== 0 ? 1 : 0);
            el.textContent = currentVal + suffix;
            if (progress < 1) requestAnimationFrame(updateCount);
          };
          requestAnimationFrame(updateCount);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  statElements.forEach(el => {
    el.setAttribute('data-count', el.textContent.trim());
    countObserver.observe(el);
  });

  // 4. Animated Skill Progress Bars on Viewport Entry
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const targetWidth = bar.getAttribute('data-width') || '85%';
        bar.style.width = targetWidth;
        observer.unobserve(bar);
      }
    });
  }, { threshold: 0.2 });
  skillBars.forEach(bar => {
    const w = bar.style.width || '85%';
    bar.setAttribute('data-width', w);
    bar.style.width = '0%';
    skillObserver.observe(bar);
  });

  // 5. Interactive Mouse-Tracking Spotlight on Glass Cards
  document.querySelectorAll('.glass').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  // 6. Dynamic Rotating Role Hero Text Rotator
  const rotatingElem = document.querySelector('.text-rotator');
  if (rotatingElem) {
    const roles = [
      'Senior Flutter Developer',
      'BLoC & Clean Architecture Expert',
      'Google Play Live App Publisher',
      'Cross-Platform Mobile Architect'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 90;
    const deleteSpeed = 45;
    const pauseDelay = 1900;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        rotatingElem.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        rotatingElem.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(typeEffect, speed);
    }
    typeEffect();
  }

  // 7. Smooth Copy to Clipboard with Toast Notification
  window.copyText = function(text, label = 'Copied to clipboard!') {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(label);
      }).catch(() => {
        fallbackCopy(text, label);
      });
    } else {
      fallbackCopy(text, label);
    }
  };

  function fallbackCopy(text, label) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(label);
  }

  function showToast(msg) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 8. Interactive Project Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 9. Contact form submission
  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you! Your message has been received.');
      contactForm.reset();
    });
  }
});
