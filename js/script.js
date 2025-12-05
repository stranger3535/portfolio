const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const target = link.getAttribute('href');

        if (target.startsWith('#')) {
            e.preventDefault();
            const section = document.querySelector(target);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
        navMenu.classList.remove('active'); 
    });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage'); 

if (contactForm && formMessage) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Please fill all fields.";
            formMessage.className = "form-message error";
            formMessage.style.display = "block";
            return;
        }

        formMessage.textContent = "Message submitted successfully!";
        formMessage.className = "form-message success";
        formMessage.style.display = "block";

        contactForm.reset();

        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    });
}
