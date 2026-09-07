document.addEventListener('DOMContentLoaded', () => {
  // Sticky nav scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth copy email action
  window.copyEmail = function(email) {
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard: ' + email);
    }).catch(err => {
      window.location.href = 'mailto:' + email;
    });
  };
});
