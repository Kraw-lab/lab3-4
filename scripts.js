// Логіка Бургера
const burger = document.getElementById('burger-icon');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    navMenu.classList.toggle('active');
});

// Закриваємо меню при натисканні на посилання (для мобільних)
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('open');
        navMenu.classList.remove('active');
    });
});

// Плавна поява/зникнення секцій
const sections = document.querySelectorAll('.scroll-section');
const scrollContainer = document.querySelector('.scroll-container');

scrollContainer.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < -150) {
            sec.classList.add('fade-out');
        } else {
            sec.classList.remove('fade-out');
        }
    });
});

// Модалка (Вхід)
const modal = document.getElementById("loginModal");
const btn = document.getElementById("open-login");
const span = document.querySelector(".close-button");

btn.onclick = (e) => { e.preventDefault(); modal.style.display = "block"; }
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }