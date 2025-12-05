document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

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
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            formMessage.textContent = "Sending...";
            formMessage.className = "form-message sending";
            formMessage.style.display = "block";

            const formData = new FormData(contactForm);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                if (response.ok) {
                    formMessage.textContent = "Message sent successfully!";
                    formMessage.className = "form-message success";
                    formMessage.style.display = "block";
                    contactForm.reset();

                    setTimeout(() => {
                        formMessage.style.display = "none";
                    }, 3000);
                } else {
                    formMessage.textContent = "Message failed. Try again.";
                    formMessage.className = "form-message error";
                    formMessage.style.display = "block";
                }
            } catch (error) {
                formMessage.textContent = "Network error. Try again.";
                formMessage.className = "form-message error";
                formMessage.style.display = "block";
            }
        });
    }
});
