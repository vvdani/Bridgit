document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.style.display === 'flex') {
                    navLinks.style.display = 'none';
                }
            }
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Interactive code editor demo
    const runBtn = document.querySelector('.run-btn');
    if (runBtn) {
        runBtn.addEventListener('click', function() {
            this.textContent = 'Running...';
            this.disabled = true;

            setTimeout(() => {
                this.textContent = 'Run Code';
                this.disabled = false;

                // In a real app, you would execute the code here
                alert('Code executed! In a real implementation, this would show the output.');
            }, 1500);
        });
    }

    // Lesson card hover effect
    const lessonCards = document.querySelectorAll('.lesson-card');
    lessonCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.lesson-icon');
            icon.style.transform = 'scale(1.2)';
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.lesson-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // Auto-update range input values
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(input => {
        const output = document.getElementById(`${input.id}-value`);
        if (output) {
            input.addEventListener('input', function() {
                output.textContent = this.value;
            });
        }
    });
});

// In a real app, you would add more interactive features like:
// - Actual code execution in the playground
// - User authentication flows
// - Lesson progress tracking
// - API calls for dynamic content