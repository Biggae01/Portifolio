// Contact Form Handling - Works with FormSubmit.co
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) {
        console.error('Contact form not found');
        return;
    }

    // Add client-side validation before form submits to FormSubmit
    contactForm.addEventListener('submit', (e) => {
        // Get form inputs
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const subject = document.getElementById('subject');
        const message = document.getElementById('message');

        // Validate all fields are filled
        if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
            e.preventDefault();
            alert('Please fill in all required fields.');
            return false;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            e.preventDefault();
            alert('Please enter a valid email address.');
            email.focus();
            return false;
        }

        // Validate message length
        if (message.value.trim().length < 10) {
            e.preventDefault();
            alert('Please enter a message with at least 10 characters.');
            message.focus();
            return false;
        }

        // Disable submit button to prevent double submission
        const submitBtn = contactForm.querySelector('.btn-submit');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Form will now submit to FormSubmit.co
        return true;
    });

    // Real-time email validation feedback
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                emailInput.style.borderColor = '#ef4444';
                emailInput.style.outline = 'none';
            } else {
                emailInput.style.borderColor = '#d1d5db';
            }
        });

        // Remove error styling on focus
        emailInput.addEventListener('focus', () => {
            emailInput.style.borderColor = '#3b82f6';
        });
    }

    // Add character counter for message field (optional enhancement)
    const messageInput = document.getElementById('message');
    if (messageInput) {
        const minChars = 10;
        
        messageInput.addEventListener('input', () => {
            const remaining = messageInput.value.length;
            
            // You can add a character counter display here if you want
            if (remaining < minChars) {
                messageInput.style.borderColor = '#f59e0b';
            } else {
                messageInput.style.borderColor = '#d1d5db';
            }
        });

        messageInput.addEventListener('focus', () => {
            messageInput.style.borderColor = '#3b82f6';
        });
    }
});
