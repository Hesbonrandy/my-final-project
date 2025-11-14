// DYNAMIC HEADER HEIGHT FIX
function adjustMainPadding() {
    const header = document.getElementById('main-header');
    const main = document.getElementById('main-content');
    if (header && main) {
        const headerHeight = header.offsetHeight;
        main.style.paddingTop = headerHeight + 'px';
    }
}

// Run on load and resize
document.addEventListener('DOMContentLoaded', adjustMainPadding);
window.addEventListener('resize', adjustMainPadding);
window.addEventListener('load', adjustMainPadding); 

function adjustMainPadding() {
    const header = document.getElementById('main-header');
    const main = document.getElementById('main-content');
    if (header && main) {
        const headerHeight = header.offsetHeight;
        main.style.paddingTop = headerHeight + 'px';
    }
}

document.addEventListener('DOMContentLoaded', adjustMainPadding);
window.addEventListener('resize', adjustMainPadding);


// DOM READY
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Newsletter & Contact Forms
    const newsletterForms = document.querySelectorAll('#newsletter-form, #footer-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            if (!email) {
                alert('Please enter your email.');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email.');
                return;
            }
            alert(`Welcome to the Kinoo Crew, ${email}! Check your inbox for sweet perks ☕💌`);
            this.reset();
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email.');
                return;
            }

            const btn = this.querySelector('button');
            btn.innerText = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Thanks, ${name}! We’ll reply to ${email} within 24 hours.`);
                contactForm.reset();
                btn.innerText = 'Send Message';
                btn.disabled = false;
            }, 1500);
        });
    }

    const eventForm = document.getElementById('event-form');
    if (eventForm) {
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const date = this.querySelector('input[type="date"]').value;

            if (!name || !email || !date) {
                alert('Please fill in all required fields.');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email.');
                return;
            }

            const submitBtn = this.querySelector('button');
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(`Thanks, ${name}! We’ll email you within 24 hours to confirm your event on ${date}.`);
                eventForm.reset();
                submitBtn.innerText = 'Send Inquiry';
                submitBtn.disabled = false;
            }, 1500);
        });
    }

    // Menu Filter
    const filterButtons = document.querySelectorAll('.menu-filters button');
    const menuItems = document.querySelectorAll('.menu-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filter = button.getAttribute('data-filter');

                menuItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                        item.style.display = 'grid';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Lightbox for Gallery
    const galleryImages = document.querySelectorAll('.space-gallery img');
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.innerHTML = `
                <div class="lightbox">
                    <span class="close">&times;</span>
                    <img src="${this.src}" alt="Enlarged view">
                </div>
            `;
            overlay.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.9); display: flex; justify-content: center; 
                align-items: center; z-index: 1000;
            `;
            document.body.appendChild(overlay);

            const closeBtn = overlay.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                document.body.removeChild(overlay);
            });

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) document.body.removeChild(overlay);
            });

            // Prevent scrolling
            document.body.style.overflow = 'hidden';

            // Restore on close
            const removeOverlay = () => {
                document.body.removeChild(overlay);
                document.body.style.overflow = '';
            };
            closeBtn.addEventListener('click', removeOverlay);
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) removeOverlay();
            });
        });
    });

    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.innerText = '↑';
    backToTop.classList.add('back-to-top');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Animate Sections on Scroll
    const animateOnScroll = () => {
        document.querySelectorAll('main > section').forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load

});