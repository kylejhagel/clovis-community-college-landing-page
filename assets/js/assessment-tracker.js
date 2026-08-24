/* DEVELOPMENT ONLY: Landing page assessment tracker.
   Remove this script and its <script> before final submission. */

(() => {
    const tracker = document.querySelector('[data-development-only="assessment-tracker"]');

    if (!tracker) {
        return;
    }

    const items = Array.from(tracker.querySelectorAll('[data-requirement-status]'));
    const progress = tracker.querySelector('[data-assessment-progress]');
    const progressBar = tracker.querySelector('[data-assessment-progress-bar]');
    const summary = tracker.querySelector('[data-assessment-summary]');

    const statusConfig = {
        complete: {
            label: 'Complete',
            badgeClass: 'text-bg-success'
        },
        'in-progress': {
            label: 'In Progress',
            badgeClass: 'text-bg-warning'
        },
        todo: {
            label: 'To Do',
            badgeClass: 'text-bg-secondary'
        }
    };

    const totals = {
        complete: 0,
        'in-progress': 0,
        todo: 0
    };

    items.forEach((item) => {
        const status = item.dataset.requirementStatus;
        const config = statusConfig[status] || statusConfig.todo;
        const badge = item.querySelector('[data-requirement-badge]');

        totals[status in totals ? status : 'todo'] += 1;

        if (badge) {
            badge.className = `badge assessment-tracker__status ${config.badgeClass}`;
            badge.textContent = config.label;
        }
    });

    const total = items.length;
    const percent = total > 0 ? Math.round((totals.complete / total) * 100) : 0;

    if (progress) {
        progress.setAttribute('aria-valuenow', String(percent));
        progress.setAttribute('aria-valuetext', `${totals.complete} of ${total} requirements complete`);
    }

    if (progressBar) {
        progressBar.style.width = `${percent}%`;
        progressBar.textContent = `${percent}%`;
    }

    if (summary) {
        summary.textContent = `${totals.complete} of ${total} complete · ${totals['in-progress']} in progress · ${totals.todo} to do`;
    }

    tracker.querySelectorAll('[data-requirement-group]').forEach((group) => {
        const groupItems = Array.from(group.querySelectorAll('[data-requirement-status]'));
        const groupComplete = groupItems.filter((item) => item.dataset.requirementStatus === 'complete').length;
        const count = group.querySelector('[data-group-count]');

        if (count) {
            count.textContent = `${groupComplete} / ${groupItems.length}`;
        }
    });
})();
