document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header-main');
    const topBar = document.querySelector('.top-bar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
            if (topBar) {
                topBar.style.transform = 'translateY(-100%)';
                topBar.style.opacity = '0';
            }
            header.style.top = '0';
        } else {
            header.classList.remove('sticky');
            if (topBar) {
                topBar.style.transform = 'translateY(0)';
                topBar.style.opacity = '1';
            }
            // If window width is >= 992 (lg), show top-bar space
            if (window.innerWidth >= 992) {
                header.style.top = '45px';
            } else {
                header.style.top = '0';
            }
        }
    });

    // Scroll To Top Button Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Handle Mobile Menu (for simple demonstration)
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.onclick = function() {
        alert('Menu Opened');
    };
});
