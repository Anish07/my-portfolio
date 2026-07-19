/**
 * Feature Flags Configuration
 *
 * Centralized feature flags for the portfolio website.
 * Toggle these flags to enable/disable features across the entire site.
 *
 * USAGE:
 *   import { SHOW_IMAGES } from '../config/featureFlags';
 *   {SHOW_IMAGES && <img ... />}
 */

/**
 * SHOW_IMAGES — Controls the visibility of all images/photos across the site.
 *
 * When set to `true`:  All images (profile photo, About gallery, product screenshots) are displayed.
 * When set to `false`: All images are hidden and layouts adjust seamlessly.
 *
 * Affected components:
 *   - Home.jsx      → Profile photo in the hero section
 *   - About.jsx     → Photo gallery grid (6 images)
 *   - ProductDetail.jsx → Product screenshot gallery
 *
 * To re-enable images, simply change this value to `true`.
 */
export const SHOW_IMAGES = false;

/**
 * SHOW_RESUME — Controls the visibility of all resume links/buttons across the site.
 *
 * When set to `true`:  Resume links and buttons are displayed (Navbar link, hero CTA).
 * When set to `false`: All resume references are hidden and layouts adjust seamlessly.
 *
 * Affected components:
 *   - Navbar.jsx   → "Resume" link in desktop and mobile navigation menus
 *   - Home.jsx     → "View Resume" CTA button in the hero section
 *
 * To re-enable resume links, simply change this value to `true`.
 */
export const SHOW_RESUME = false;
