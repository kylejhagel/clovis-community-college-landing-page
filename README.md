# Clovis Community College Landing Page

Landing page exercise for the Clovis Community College Web Content Engineer assessment.

## Current Feature Scope

This branch contains the initial page foundation and header/navigation work only.

Included in this iteration:

- Bootstrap 5.3.3 CSS and JavaScript bundle
- Semantic `header`, `nav`, and `main` landmarks
- Skip-to-main-content link
- Responsive Clovis Community College logo treatment
- Desktop audience navigation
- Primary navigation
- Responsive Bootstrap offcanvas navigation for mobile
- Visible keyboard focus styles
- Reduced-motion support for animated transitions

The hero, content sections, footer, and additional landing-page components are intentionally deferred to later iterations.

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
- Keyboard-accessible Bootstrap offcanvas navigation
- Accessible menu open/close controls and labels
- `prefers-reduced-motion` support for skip-link and logo transitions
- A focusable `main` landmark so skip-link navigation moves keyboard focus to the page content
- Meaningful alternative text for the Clovis Community College logo
- A logical heading hierarchy with one page-level `h1`

The skip link targets:

```html
<main id="main-content" tabindex="-1">
```

Focus styles are intentionally not removed from the main content target.

### Accessibility Validation and QA

Accessibility and markup are reviewed with both automated tools and manual testing rather than relying on a single scanner.

Current QA workflow:

- **W3C Nu HTML Checker** — HTML and ARIA conformance: https://validator.w3.org/nu/#file
- **WAVE** — accessibility errors, alerts, structure, and contrast review
- **Lighthouse** — accessibility and general page-quality checks
- **Manual keyboard testing** — skip link, focus order, navigation, offcanvas open/close, Escape behavior, and visible focus
- **Responsive review** — check reflow and navigation behavior at small mobile, tablet, and desktop widths

The W3C Nu HTML Checker identified two issues during development of the Bootstrap offcanvas navigation:

1. `aria-labelledby` had been applied to a generic `<div>` whose computed role did not permit that ARIA attribute. The offcanvas wrapper was changed to a semantic `<nav>` landmark, making the accessible label relationship valid and better describing the region's purpose.
2. The document contained lower-level headings but no computed level-one heading. A page-level `h1` was added for **Mechatronics Industrial Automation**. The temporary hidden heading will be replaced by the visible hero heading when that section is implemented.

These findings were reviewed manually and corrected in the markup before continuing development.

## Brand Colors

Current CSS custom properties include:

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
- Keep the HTML semantic and understandable without relying on JavaScript for core content.
- Validate HTML and ARIA during development instead of waiting until final QA.
