document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordMatchMessage = document.getElementById('passwordMatch');
    const closeBtn = document.querySelector('.close-btn');

    if (form) {
        form.addEventListener('submit', function(event) {
            if (passwordInput.value !== confirmPasswordInput.value) {
                event.preventDefault(); // Prevent form submission
                passwordMatchMessage.style.display = 'block'; // Show error message
            } else {
                passwordMatchMessage.style.display = 'none'; // Hide error message
                // Proceed with form submission or other actions
                // Example: window.location.href = 'homepage.html';
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const wrapper = document.querySelector('.wrapper');
            if (wrapper) {
                wrapper.style.display = 'none';
            }
        });
    }
});
