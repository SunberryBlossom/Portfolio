const projectData = {
    "munilytics": {
        title: "Munilytics",
        description: "This ongoing project is built with me as SCRUM-master and developer with four class peers as a hobby project. My vision for Munilytics started after having read Kleppmann's book on data-intensive applications, and I wanted us to challenge ourselves by building something that was outside of our school curriculum. Munilytics is an Aspire orchestrated ASP.NET app with a data warehouse and a ROLAP on top of it. The data is extracted and synced with the KOLADA API.",
        image: "assets/munilytics-card.png",
        tags: ["C#", "REACT", "Tailwind", "PostgreSQL", "Fastendpoint", "Wolverine Mediator", "VSA", "Collaboration", "ASP.NET"],
        link: "https://github.com/SunberryBlossom/Munilytics"
    },
    "the-seer": {
        title: "The Seer",
        description: "This solo hobby project is on its second version, structured with an N-tier architecture. The Seer is an interactive console application that let's you pick and choose different card decks (and other means like nordic runes) to get fortune tellings. These are logged locally in a Code-first written EF-Core database. The user can also write diary logs connected to their readings. This is my solo hobby project that I recreate in more technical versions alongside my studies, to push myself and implement what I learn. The next version is planned to be a web application to give graphic life to The Seer herself.",
        image: "assets/the-seer-card.png",
        tags: ["C#", "Console", ".NET", "N-tier architecture", "Solo Hobby project"],
        link: "https://github.com/SunberryBlossom/TheSeer"
    },
    "slava-bank": {
        title: "Slava Bank",
        description: "This is my team's examination project from our fundamental C# course at Chas Academy. We built a bank-application with a completely new from-the-ground-up HTML/CSS mocking layout inside a console, instead of using Spectre Console or similar libraries.",
        image: "assets/slava-bank-card.png",
        tags: ["C#", "Security", "Finance", ".NET", "School project"],
        link: "https://github.com/janne022/bank-app"
    }
};

const modal = document.getElementById('project-modal');

if (modal) {
    const closeBtn = document.getElementById('close-modal-btn');
    const projectButtons = document.querySelectorAll('.portfolio-card');

    projectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            const data = projectData[projectId];

            if (data) {
                modal.classList.remove('hide');

                document.getElementById('modal-title').textContent = data.title;
                document.getElementById('modal-description').textContent = data.description;
                document.getElementById('modal-img').src = data.image;
                document.getElementById('modal-img').alt = `Bild för ${data.title}`;
                document.getElementById('modal-link').href = data.link;

                const tagsContainer = document.getElementById('modal-tags');
                tagsContainer.innerHTML = '';
                data.tags.forEach(tag => {
                    const span = document.createElement('span');
                    span.textContent = tag;
                    tagsContainer.appendChild(span);
                });

                modal.showModal();
            }
        });
    });

    const closeWithAnimation = () => {
        modal.classList.add('hide');

        modal.addEventListener('animationend', function handler() {
            modal.close();
            modal.classList.remove('hide');
            modal.removeEventListener('animationend', handler);
        }, { once: true });
    };

    closeBtn.addEventListener('click', closeWithAnimation);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeWithAnimation();
    });

    modal.addEventListener('cancel', (e) => {
        e.preventDefault();
        closeWithAnimation();
    });
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    emailjs.init("Lzvj9C4H4JKO1ZvkA");
    const submitBtn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const originalBtnText = submitBtn.innerText;
        submitBtn.innerText = 'Sending...';
        submitBtn.disabled = true;

        emailjs.sendForm('service_8hf6kz5', 'template_8l0uniy', this)
            .then(function() {
                console.log('SUCCESS!');

                const container = document.querySelector('.form-container');
                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem; display: flex; flex-direction: column; gap: 15px; align-items: center;">
                        <i style="font-size: 3rem; color: var(--secondary-accent-color);">✓</i>
                        <h2 style="color: var(--secondary-accent-color); font-size: 2rem;">Message Sent!</h2>
                        <p style="color: var(--primary-color); font-size: 1.1rem;">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                    </div>
                `;
            }, function(error) {
                console.log('FAILED...', error);
                alert('Oops! Something went wrong. Please try again later.');

                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            });
    });
}