document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const resultDiv = document.getElementById('form-results');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            resultDiv.innerHTML = `<h2>Thank you, ${name}! Your message has been sent successfully.</h2>`;
            form.reset();
        } else {
            resultDiv.innerHTML = `<h2>Please fill out all fields.</h2>`;
        }
    });
});
