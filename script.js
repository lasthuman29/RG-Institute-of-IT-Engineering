  // Active nav link
  function setActive(el) {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
  }

  // Mobile menu
  function toggleMenu() {
    const nav = document.getElementById('main-nav');
    nav.classList.toggle('open');
  }

  // FAQ accordion
  function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  }

  // Course filter
  function filterCourses(cat, tabEl) {
    // Update active tab
    if (tabEl) {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      tabEl.classList.add('active');
    }

    const cards = document.querySelectorAll('.course-card');
    cards.forEach(card => {
      if (cat === 'all' || card.dataset.cat === cat) {
        card.classList.add('visible');
      } else {
        card.classList.remove('visible');
      }
    });

    // Scroll to courses section
    if (cat !== 'all') {
      document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Form submission
  function submitForm() {
    alert('✅ Thank you! Your enquiry has been submitted.\n\nOur team will contact you within 24 hours.\n\n— RG Institute of IT & Engineering');
  }

  function sendMessage() {
    alert('✅ Message sent successfully!\n\nWe will get back to you within 24 working hours.\n\n— RG Institute Team');
  }

  // Highlight active section on scroll
  const sections = ['home','about','courses','admission','gallery','faqs','contact'];
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY && (el.offsetTop + el.offsetHeight) > scrollY) {
        document.querySelectorAll('nav a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  });
