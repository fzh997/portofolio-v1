document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Start by setting the 'active' class on the 'About' link when the page loads
    document.querySelector('.nav-link[href="#about"]').classList.add('active');

    // Handle click events
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');

            const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Handle scroll events to update 'active' class based on the section visibility in the viewport
    window.addEventListener('scroll', function() {
        if (isElementInViewport(document.getElementById('about_me'))) {
            setActiveLink('#about');
        } else if (isElementInViewport(document.getElementById('about_box_1'))) {
            setActiveLink('#experience');
        } else if (isElementInViewport(document.getElementById('about_box_4'))) {
            setActiveLink('#projects');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function setActiveLink(hash) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[href="${hash}"]`).classList.add('active');
}
