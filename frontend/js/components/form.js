const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
      firstName: contactForm.querySelector('input[name="firstName"]').value,
      lastName:  contactForm.querySelector('input[name="lastName"]').value,
      email:     contactForm.querySelector('input[name="email"]').value,
      phone:     contactForm.querySelector('input[name="phone"]').value,
      service:   contactForm.querySelector('select[name="service"]').value,
      message:   contactForm.querySelector('textarea[name="message"]').value,
    };

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Could not connect to the server. Please try again later.');
    }
  });
}