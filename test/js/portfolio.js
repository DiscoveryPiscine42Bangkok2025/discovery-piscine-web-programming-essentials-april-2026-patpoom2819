// portfolio.js — Portfolio page interactions

document.addEventListener('DOMContentLoaded', () => {

    // ── Navbar scroll style ──────────────────────────
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ── Mobile nav toggle ────────────────────────────
    const toggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    // ── Smooth active link highlight ─────────────────
    const sections = document.querySelectorAll('.section[id]');
    const links = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(l => l.style.color = '');
                const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
                if (active) active.style.color = 'var(--accent)';
            }
        });
    }, { rootMargin: '-40% 0px -40% 0px' });

    sections.forEach(s => observer.observe(s));

    // ── Section fade-in on scroll ─────────────────────
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section').forEach(s => fadeObserver.observe(s));

    // ── Skill bar animation trigger ───────────────────
    // The CSS animation is set to 0 by default; trigger when in view
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.skill-fill').forEach(bar => {
                    bar.style.animationPlayState = 'running';
                });
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const skillsSection = document.querySelector('.showcase-section');
    if (skillsSection) barObserver.observe(skillsSection);

    // Pause bars until observed
    document.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.animationPlayState = 'paused';
    });

});