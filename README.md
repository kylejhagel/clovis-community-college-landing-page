# Clovis Community College Landing Page

Landing page exercise for the Clovis Community College Web Content Engineer assessment.

## Current Feature Scope

This branch contains the initial page foundation and header/navigation work only.

Included in this iteration:

- Bootstrap 5.3.3 CSS
- Semantic `header`, `nav`, and `main` landmarks
- Skip-to-main-content link
- Responsive Clovis Community College logo treatment
- Primary `Apply Here` action
- Responsive Bootstrap container and utility classes
- Visible keyboard focus styles
- Reduced-motion support for animated transitions

The hero, content sections, footer, and any additional interactive Bootstrap components are intentionally deferred to later iterations.

## Responsive Logo Behavior

The header uses a native HTML `<picture>` element so the appropriate Clovis Community College logo is selected by the browser without JavaScript.

- Desktop/tablet: `assets/images/ccc-one-line-full-color.png`
- Mobile below 768px: `assets/images/ccc-primary-full-color.png`

Logo images maintain their intrinsic aspect ratio using `height: auto`.

## Accessibility

Accessibility is being treated as part of the initial structure rather than as a final remediation step.

Current accessibility considerations include:

- A visible-on-focus **Skip to main content** link
- Semantic page landmarks
- Keyboard-focus indicators with strong foreground/background contrast
- A distinct focus state for links placed on the Clovis blue navigation background
- `prefers-reduced-motion` support for skip-link and logo transitions
- A focusable `main` landmark so skip-link navigation moves keyboard focus to the page content
- Meaningful alternative text for the Clovis Community College logo

The skip link targets:

```html
<main id="main-content" tabindex="-1">
```

Focus styles are intentionally not removed from the main content target.

## Brand Colors

Current CSS custom properties:

```css
--clovis-primary-color: #025b94;
--clovis-secondary-color: #95c23d;
--light-bg: #f8f9fa;
--text-dark: #212529;
--text-muted: #464b50;
--link-hover-light-color: #cee8ff;
--focus-on-light: #be4e04;
--focus-on-dark: #f9d8c8;
```

## Local Development

No build process is currently required. The page can be opened directly in a browser or served with a simple local development server.

To work on this feature branch:

```bash
git fetch origin
git switch feature/bootstrap-header-nav
git pull origin feature/bootstrap-header-nav
```

Then open `index.html` locally.

## Project Structure

```text
clovis-community-college-landing-page/
├── index.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── images/
│       ├── ccc-one-line-full-color.png
│       └── ccc-primary-full-color.png
├── README.md
└── LICENSE
```

## Development Approach

The implementation is intentionally assessment-focused:

- Use Bootstrap components and utilities where they solve the requirement cleanly.
- Keep custom CSS limited to branding, accessibility, and presentation needs not already handled by Bootstrap.
- Avoid adding navigation, content, or interaction that is not supported by the assessment requirements.
- Keep the HTML semantic and understandable without relying on JavaScript.

Bootstrap JavaScript will be added only when an interactive Bootstrap component requires it.
