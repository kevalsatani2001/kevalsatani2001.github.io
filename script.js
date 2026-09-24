// Global Projects Data for Interactive Case Study Modal
const portfolioProjects = [{"id":"3d3ce08a-0828-46ae-9252-6de0cbc47744","title":"Bridge Builder: Master Architect – 2D Real-Time Physics Puzzle Game","description":"A high-performance 2D bridge construction simulator engineered with Flutter, Flame Engine (v1.38), Forge2D (Box2D), and BLoC architecture. Implements real-time structural stress calculations, material fracture mechanics, articulated train physics across 30 dynamic levels, Google AdMob monetization, and GitHub-based Remote Config at a locked 60 FPS.","category":"Mobile App","tags":["Flutter","Dart","Flame Engine","Forge2D (Box2D)","Flutter BLoC","Game Development","AdMob SDK"],"imageUrl":"https://firebasestorage.googleapis.com/v0/b/building-guard-app.firebasestorage.app/o/portfolios%2Fprojects%2F1789567750923_scaled_1000798797.jpg?alt=media&token=d33672c9-9d6e-4f3a-b710-097eb064dad1","liveUrl":"","githubUrl":"","isFeatured":true,"date":"2026"},{"id":"9a2da804-ff86-43f4-9a35-cb5960b86903","title":"Who's Nxt – Salon Appointment Booking & Retail E-Commerce App","description":"Architected and engineered an enterprise-grade salon scheduling and retail mobile application utilizing Flutter and GetX modular state management with RESTful Dio interceptors. Integrated native Stripe Payment Sheets for seamless deposit processing and checkout alongside biometric authentication (Face ID / Fingerprint) and secure encrypted token storage. Streamlined the entire customer journey with real-time slot calendar availability, click-and-collect retail ordering, loyalty points gamification, and automated PDF receipt generation.","category":"Mobile App","tags":["Flutter","Dart","GetX","Dio & REST APIs","Stripe Payments","Biometric Auth","Secure Storage"],"imageUrl":"https://firebasestorage.googleapis.com/v0/b/building-guard-app.firebasestorage.app/o/portfolios%2Fprojects%2F1788888449042_scaled_1000795488.jpg?alt=media&token=efe4c49d-a56d-4a4d-863d-13923f750bcd","liveUrl":"","githubUrl":"","isFeatured":true,"date":"2026"},{"id":"173b889c-1b8a-4032-a5ca-d850509d37a3","title":"Who's Nxt – Salon Appointment Booking & Retail E-Commerce App","description":"Steve's Barbers (Powered by WhozNxt)\n\nRole: UI/UX & Frontend Development\n\nOverview: A luxury, multi-feature barbershop booking & retail web application built with a modern, mobile-first design system. Includes multi-step appointment scheduling, stylist portfolios, integrated e-commerce aftercare shop, and loyalty rewards system.","category":"Mobile App","tags":["Flutter","Dart","GetX","Dio & REST APIs","Stripe Payments","Biometric Auth","Secure Storage"],"imageUrl":"https://firebasestorage.googleapis.com/v0/b/building-guard-app.firebasestorage.app/o/portfolios%2Fprojects%2F1788883559516_scaled_1000795449.png?alt=media&token=6ac3d321-745a-4394-959a-32c97ef1bbe6","liveUrl":"","githubUrl":"","isFeatured":true,"date":"2026"},{"id":"1","title":"TheSpeedTurtle App","description":"Habit tracking and discipline coach platform designed for trainers, trainees, and life coaches to build consistency, daily routines, and high-performance habits with real-time analytics.","category":"Fitness & Productivity","tags":["Flutter","Dart","BLoC","Firebase","Push Notifications"],"imageUrl":"https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop&q=80","liveUrl":"","githubUrl":"https://github.com/kevalsatani2001/speed-turtle-app","isFeatured":true,"date":"2026"},{"id":"2","title":"MATA News Application","description":"High-performance personalized news feed application published on Google Play Store featuring fast UI rendering, offline article caching, category filtering, and real-time push alerts.","category":"Media & News","tags":["Flutter","REST APIs","GetX","Play Store Live","Caching"],"imageUrl":"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=80","liveUrl":"https://play.google.com/store/apps/details?id=com.mata.today&hl=en","githubUrl":"","isFeatured":true,"date":"2025"},{"id":"3","title":"QR Scanner & Barcode Pro","description":"High-performance QR and barcode scanning application with real-time camera detection, scan history management, custom QR code generation, and export capabilities.","category":"Utility & Tools","tags":["Flutter","Camera ML","SQLite","Clean Architecture"],"imageUrl":"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80","liveUrl":"","githubUrl":"https://github.com/kevalsatani2001/qr-scanner-app","isFeatured":true,"date":"2025"},{"id":"4","title":"Media Player Application","description":"Custom audio and video player application with advanced playback controls, background audio playback, playlist management, and dynamic audio visualization.","category":"Media & Streaming","tags":["Flutter","Audio Service","Video Player","Bloc"],"imageUrl":"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80","liveUrl":"","githubUrl":"https://github.com/kevalsatani2001/media-player-app","isFeatured":false,"date":"2024"},{"id":"5","title":"E-Commerce & Multi-Vendor Mobile Platform","description":"Scalable e-commerce mobile application featuring real-time product catalogs, cart & checkout workflows, payment gateway integration, and order tracking.","category":"E-Commerce","tags":["Flutter","REST APIs","Payment Gateway","Firebase"],"imageUrl":"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80","liveUrl":"","githubUrl":"https://github.com/kevalsatani2001/ecommerce-app","isFeatured":true,"date":"2024"}];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle Logic (Dark / Light Mode with localStorage)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('portfolio-theme') || (prefersDark ? 'dark' : 'light');
  
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      if (themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }
    localStorage.setItem('portfolio-theme', theme);
  }

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      applyTheme(isDark ? 'light' : 'dark');
    });
  }

  // 2. Sticky Navbar scroll effect & Back to Top Button
  const header = document.querySelector('header');
  const backToTop = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
      if (backToTop) backToTop.style.display = 'flex';
    } else {
      header?.classList.remove('scrolled');
      if (backToTop) backToTop.style.display = 'none';
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Mobile Navigation Drawer
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  function toggleDrawer(open) {
    if (open) {
      mobileDrawer?.classList.add('open');
      drawerOverlay?.classList.add('open');
    } else {
      mobileDrawer?.classList.remove('open');
      drawerOverlay?.classList.remove('open');
    }
  }

  hamburgerBtn?.addEventListener('click', () => toggleDrawer(true));
  drawerCloseBtn?.addEventListener('click', () => toggleDrawer(false));
  drawerOverlay?.addEventListener('click', () => toggleDrawer(false));
  document.querySelectorAll('.drawer-links a').forEach(a => {
    a.addEventListener('click', () => toggleDrawer(false));
  });

  // 4. Scroll-Driven Reveal Observer
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

  // 5. Dynamic Animated Stat Number Counters
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
          const duration = 1500;
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

  // 6. Animated Skill Progress Bars on Viewport Entry
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

  // 7. Interactive Mouse-Tracking Spotlight on Cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });

  // 8. Dynamic Typing Text Rotator
  const rotatingElem = document.querySelector('.text-rotator');
  if (rotatingElem) {
    const roles = [
      'Flutter Developer',
      'BLoC, Cubit & Clean Architecture',
      'Production Android & iOS App Developer',
      'Google Play Store Live App Publisher'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseDelay = 1800;

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
        speed = 350;
      }

      setTimeout(typeEffect, speed);
    }
    typeEffect();
  }

  // 9. Toast Notification Helper
  window.showToast = function(msg) {
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
    }, 3000);
  };

  // 10. Copy Text to Clipboard
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

  // 11. Official Resume Modal Setup
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtns = document.querySelectorAll('.open-resume-btn');
  const closeResumeBtn = document.getElementById('closeResumeModal');

  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal?.classList.add('open');
    });
  });

  closeResumeBtn?.addEventListener('click', () => {
    resumeModal?.classList.remove('open');
  });

  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      resumeModal.classList.remove('open');
    }
  });

  // 12. Instant Project Enquiry Modal Setup
  const enquiryModal = document.getElementById('enquiryModal');
  const openEnquiryBtns = document.querySelectorAll('.open-enquiry-btn');
  const closeEnquiryBtn = document.getElementById('closeEnquiryModal');

  openEnquiryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      enquiryModal?.classList.add('open');
    });
  });

  closeEnquiryBtn?.addEventListener('click', () => {
    enquiryModal?.classList.remove('open');
  });

  enquiryModal?.addEventListener('click', (e) => {
    if (e.target === enquiryModal) {
      enquiryModal.classList.remove('open');
    }
  });

  // 13. Interactive Project Case Study Modal
  window.openProjectModal = function(projectId) {
    const project = portfolioProjects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectCaseStudyModal');
    if (!modal) return;

    document.getElementById('caseStudyTitle').textContent = project.title;
    document.getElementById('caseStudyCategory').textContent = project.category;
    document.getElementById('caseStudyDesc').textContent = project.description;
    
    const imgElem = document.getElementById('caseStudyImg');
    if (imgElem) {
      imgElem.src = project.imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80';
    }

    const tagsContainer = document.getElementById('caseStudyTags');
    if (tagsContainer) {
      tagsContainer.innerHTML = (project.tags || []).map(t => `<span class="tag">${t}</span>`).join(' ');
    }

    const playStoreBtn = document.getElementById('caseStudyPlayStore');
    if (playStoreBtn) {
      if (project.liveUrl && project.liveUrl.includes('play.google.com')) {
        playStoreBtn.href = project.liveUrl;
        playStoreBtn.style.display = 'inline-flex';
      } else {
        playStoreBtn.style.display = 'none';
      }
    }

    const liveDemoBtn = document.getElementById('caseStudyLiveDemo');
    if (liveDemoBtn) {
      if (project.liveUrl && !project.liveUrl.includes('play.google.com')) {
        liveDemoBtn.href = project.liveUrl;
        liveDemoBtn.style.display = 'inline-flex';
      } else {
        liveDemoBtn.style.display = 'none';
      }
    }

    const githubBtn = document.getElementById('caseStudyGithub');
    if (githubBtn) {
      if (project.githubUrl) {
        githubBtn.href = project.githubUrl;
        githubBtn.style.display = 'inline-flex';
      } else {
        githubBtn.style.display = 'none';
      }
    }

    modal.classList.add('open');
  };

  const closeProjectModalBtn = document.getElementById('closeProjectModal');
  const projectModal = document.getElementById('projectCaseStudyModal');
  closeProjectModalBtn?.addEventListener('click', () => {
    projectModal?.classList.remove('open');
  });
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('open');
    }
  });

  // 14. Interactive Skills & Project Category Filter
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

  // 15. Contact & Enquiry Form Handlers with WhatsApp & Mailto fallbacks
  function handleFormSubmit(form, isPopup = false) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="name"]')?.value || '';
      const email = form.querySelector('[name="email"]')?.value || '';
      const phone = form.querySelector('[name="phone"]')?.value || '';
      const service = form.querySelector('[name="service"]')?.value || 'Flutter App Development';
      const budget = form.querySelector('[name="budget"]')?.value || 'Negotiable';
      const timeline = form.querySelector('[name="timeline"]')?.value || 'Flexible';
      const msg = form.querySelector('[name="message"]')?.value || '';
      
      const whatsappMsg = encodeURIComponent(
        `*New Project Enquiry for Keyur H. Satani*\n` +
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📱 *Phone:* ${phone}\n` +
        `🚀 *Service:* ${service}\n` +
        `💰 *Budget:* ${budget}\n` +
        `⏱️ *Timeline:* ${timeline}\n\n` +
        `📝 *Overview:*\n${msg}`
      );

      showToast('Opening WhatsApp / Mail...');
      if ('+918758113819'.length > 5) {
        window.open('https://api.whatsapp.com/send?phone=+918758113819&text=' + whatsappMsg, '_blank');
      } else {
        const subject = encodeURIComponent('Project Enquiry: ' + service + ' from ' + name);
        const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\nService: ' + service + '\nBudget: ' + budget + '\nTimeline: ' + timeline + '\n\nMessage:\n' + msg);
        window.location.href = 'mailto:kevalsatani1234@gmail.com?subject=' + subject + '&body=' + body;
      }

      form.reset();
      if (isPopup) {
        document.getElementById('enquiryModal')?.classList.remove('open');
      }
    });
  }

  const contactForm = document.getElementById('portfolioContactForm');
  if (contactForm) handleFormSubmit(contactForm, false);

  const popupEnquiryForm = document.getElementById('popupEnquiryForm');
  if (popupEnquiryForm) handleFormSubmit(popupEnquiryForm, true);
});
