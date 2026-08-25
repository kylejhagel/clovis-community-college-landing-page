# Clovis Community College Landing Page

Responsive landing page created for the Clovis Community College Web Content Engineer competency assessment. The page introduces the **Mechatronics Industrial Automation** program, presents the Fall 2026 course offering and career information, and provides clear paths for prospective students to apply.

## Technical Approach

The project is intentionally static and browser-based so it can be opened directly from `index.html` without a development server, build process, compiler, or server-side rendering.

- HTML5
- CSS
- JavaScript
- Bootstrap 5.3.3 loaded from a CDN
- Local image, CSS, and JavaScript assets

Core content remains available without custom JavaScript. JavaScript is used only for progressive interaction such as the career-information toast and development-only assessment tracker.

## Page Features

The current implementation includes:

- Responsive Clovis Community College header and navigation
- Accessible Bootstrap offcanvas navigation on smaller screens
- Mechatronics Industrial Automation hero with prominent **Apply Today** CTA
- Program overview and credential information
- Career opportunities section
- Fall 2026 course accordion with course descriptions and learning outcomes
- OSHA 10-hour course-completion outcome for IT 10
- Student Experience section using the supplied YouTube resource
- Clovis Community College campus contact information
- Program-specific footer navigation and final Apply CTA
- Terms & Privacy, Accessibility, and Contact Webmaster links
- Responsive layouts for desktop, tablet, and mobile

## Accessibility

Accessibility has been treated as part of the implementation rather than as a final remediation step.

Current accessibility considerations include:

- One visible page-level `h1`
- Semantic `header`, `nav`, `main`, `section`, `address`, and `footer` landmarks/elements
- Logical heading hierarchy
- Visible-on-focus **Skip to main content** link
- Skip link targets the visible page title (`#page-title`) and moves programmatic focus there
- Strong visible keyboard-focus indicators
- Light focus treatment on dark Clovis-blue header and footer backgrounds
- Keyboard-accessible Bootstrap offcanvas navigation
- Accessible menu open/close labels
- Meaningful image alternative text
- Contextual accessible names for repeated career **Learn More** controls
- Accessible external-resource cues
- Reduced-motion support where transitions are used
- Responsive reflow without requiring horizontal scrolling for primary content

### Accessibility Validation and QA

The final QA workflow includes both automated and manual review:

- **W3C Nu HTML Checker** — HTML and ARIA conformance: https://validator.w3.org/nu/#file
- **WAVE** — accessibility errors, alerts, document structure, and contrast review
- **Lighthouse** — accessibility and general page-quality review
- **Manual keyboard testing** — skip link, focus order, navigation, accordion, toast controls, footer links, and visible focus
- **Responsive review** — small mobile, tablet, laptop, and desktop widths

During development, the W3C Nu HTML Checker identified an invalid `aria-labelledby` relationship on the Bootstrap offcanvas wrapper. The wrapper was changed from a generic `div` to a semantic `nav`, which supports the accessible label relationship and better describes the region.

## Assessment Notes

- **Term reference:** The supplied assessment copy includes one reference to **“SIGN UP FOR SPRING 2026”**, while the program start and course schedule consistently identify **Fall 2026**, including **“FALL 2026 CLASSES START AUGUST 10.”** The landing page therefore uses **Fall 2026** consistently.
- **YouTube video:** The supplied YouTube video refuses third-party iframe embedding in tested browsers. Rather than leave a broken embedded player, the page uses the required YouTube URL as an accessible linked video preview that opens the supplied video on YouTube.

## Brand and Focus Colors

Key CSS custom properties include:

```css
--clovis-primary-color: #025b94;
--clovis-primary-dark: #01466f;
--clovis-secondary-color: #95c23d;
--light-bg: #f8f9fa;
--hero-bg: #eef4f7;
--text-dark: #212529;
--text-muted: #464b50;
--link-hover-light-color: #cee8ff;
--focus-dark: #be4e04;
--focus-light: #f9d8c8;
```

## Local Use

No installation or build step is required.

1. Download or unzip the project.
2. Open `index.html` directly in a modern browser.
3. An internet connection is required for the Bootstrap CDN and external links/resources.

## Project Structure

```text
clovis-community-college-landing-page/
├── index.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── fall-2026-courses.css
│   │   ├── student-experience.css
│   │   ├── site-footer.css
│   │   └── assessment-tracker.css
│   ├── images/
│   │   └── ...
│   └── js/
│       ├── career-outcomes.js
│       └── assessment-tracker.js
├── README.md
└── LICENSE
```

## Development-Only Assessment Tracker

The page currently contains a development-only assessment tracker used to monitor completion of the competency requirements. It is intentionally isolated from production styles and behavior.

Before final submission, remove:

- the assessment tracker section in `index.html`
- `assets/css/assessment-tracker.css`
- `assets/js/assessment-tracker.js`
- their corresponding stylesheet/script references

Useful search terms before packaging:

```text
assessment-tracker
data-development-only
DEVELOPMENT ONLY
```

## Development Approach

- Use Bootstrap components and utilities where they solve the requirement cleanly.
- Keep custom CSS focused on branding, layout, accessibility, and component-specific presentation.
- Preserve semantic HTML and understandable document structure.
- Keep essential program content available without relying on JavaScript.
- Validate HTML, accessibility, keyboard behavior, and responsive layouts throughout development.
- Avoid unnecessary dependencies or technology that prevents the assessment from running directly in the browser.
