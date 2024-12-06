document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const status = document.getElementById('formStatus');

    if (name === "" || email === "" || message === "") {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
    } else {
        status.textContent = "Thank you for your message!";
        status.style.color = "green";
    }
});

document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const sibling = item.nextElementSibling;
        sibling.style.display = sibling.style.display === 'none' || sibling.style.display === '' ? 'block' : 'none';
    });
});
