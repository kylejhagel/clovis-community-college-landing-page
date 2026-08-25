(() => {
    const programLinks = document.querySelectorAll('a[href="#programs"]');
    const programSection = document.getElementById('fall-2026-courses');

    if (programSection) {
        programLinks.forEach((link) => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                programSection.scrollIntoView();
                history.replaceState(null, '', '#fall-2026-courses');
            });
        });
    }

    const toastElement = document.getElementById('careerInfoToast');
    const careerButtons = document.querySelectorAll('.career-card__learn-more');

    if (careerButtons.length === 0) {
        return;
    }

    careerButtons.forEach((button) => {
        const careerCard = button.closest('.career-card');
        const careerTitle = careerCard?.querySelector('h3.card-title')?.textContent.trim();

        if (careerTitle && !button.querySelector('.visually-hidden')) {
            const accessibleContext = document.createElement('span');
            accessibleContext.className = 'visually-hidden';
            accessibleContext.textContent = ` about ${careerTitle} program`;
            button.appendChild(accessibleContext);
        }
    });

    if (!toastElement || typeof bootstrap === 'undefined') {
        return;
    }

    const toastTitle = toastElement.querySelector('[data-career-toast-title]');
    const toastName = toastElement.querySelector('[data-career-toast-name]');
    const toast = bootstrap.Toast.getOrCreateInstance(toastElement, {
        autohide: false,
    });

    careerButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const careerTitle = button.dataset.careerTitle || 'Career Information';

            if (toastTitle) {
                toastTitle.textContent = careerTitle;
            }

            if (toastName) {
                toastName.textContent = careerTitle;
            }

            toast.show();
        });
    });
})();
