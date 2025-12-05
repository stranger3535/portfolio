function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
    }

    alert("Message submitted successfully!");
});
