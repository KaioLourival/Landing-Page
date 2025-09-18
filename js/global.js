document.addEventListener('DOMContentLoaded', () => {

    // Efeito de Parallax no vídeo do Herói
    const heroVideo = document.querySelector('.hero-video');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroVideo.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Efeito de Fundo na Barra de Navegação ao Rolar
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(17, 17, 17, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(17, 17, 17, 0.7)';
        }
    });

    // Animação de Entrada ao Rolar
    const hiddenElements = document.querySelectorAll('.hidden-element');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-element');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    hiddenElements.forEach(el => observer.observe(el));

    // GALERIA INTERATIVA (LIGHTBOX)
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            lightbox.style.display = 'block';
            lightboxImg.src = image.src;
        });
    });
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Validação do Formulário de Contato
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', (event) => {
        const nameInput = document.querySelector('input[placeholder="Nome"]');
        const emailInput = document.querySelector('input[placeholder="E-mail"]');
        
        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            event.preventDefault();
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});