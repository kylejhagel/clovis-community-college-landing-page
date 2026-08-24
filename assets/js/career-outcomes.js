(() => {
    const toastElement = document.getElementById('careerInfoToast');
    const careerButtons = document.querySelectorAll('.career-card__learn-more');

    if (!toastElement || careerButtons.length === 0 || typeof bootstrap === 'undefined') {
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
