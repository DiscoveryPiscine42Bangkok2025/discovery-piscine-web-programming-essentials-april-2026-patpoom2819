// index.js — Index page interactions

document.addEventListener('DOMContentLoaded', () => {

    // Stagger card entrance
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(32px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        }, 300 + i * 160);
    });

    // Hero entrance
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(24px)';
        hero.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'none';
        }, 80);
    }

});