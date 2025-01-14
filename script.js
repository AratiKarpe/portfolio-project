// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,  // Adjusting to scroll a bit higher for navigation bar
            behavior: 'smooth'
        });
        
});

// Form Validation for Contact Section
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!email || !phone || !message) {
        e.preventDefault();  // Prevent form submission if any field is empty
        alert('Please fill in all fields before submitting.');
    } else {
        alert('Thank you for reaching out! Your message has been sent.');
    }
});

// Modal Functionality for Project Details (example for "Blood Donation Tracking System")
function openProjectModal(projectName) {
    const modal = document.createElement('div');
    modal.id = 'projectModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.innerHTML = `
        <div style="background-color: white; padding: 20px; border-radius: 8px; width: 80%; max-width: 600px;">
            <h3>${projectName}</h3>
            <p>This is a detailed description of the project. You can provide more details here about what it does, how you built it, and any features.</p>
            <button id="closeModal" style="background-color: red; color: white; padding: 10px; border: none; cursor: pointer;">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close Modal functionality
    document.getElementById('closeModal').addEventListener('click', function () {
        document.body.removeChild(modal);
    });
}

// Event listener for project links (for modal display)
document.querySelectorAll('.projectLink').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const projectName = this.getAttribute('data-project-name');
        openProjectModal(projectName);
    });
});
