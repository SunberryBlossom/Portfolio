document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementById('open-modal');
    const icon = openBtn.querySelector('i');
    const modal = document.getElementById('menu-modal');
    const modalLinks = document.querySelectorAll('.modal-nav a, .modal .cta-button');

    const toggleModal = () => {
        const isActive = modal.classList.toggle('active');
        openBtn.classList.toggle('active');

        // Växla mellan hamburgare och kryss
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    };

    openBtn.addEventListener('click', toggleModal);

    modalLinks.forEach(link => {
        link.addEventListener('click', () => {
            modal.classList.remove('active');
            openBtn.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        });
    });
});