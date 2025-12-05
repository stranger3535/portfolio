
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill all fields.");
            return;
        }

        alert("Message submitted successfully!");
        contactForm.reset();
    });
}
