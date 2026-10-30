# JABR PETROLEUM EQUIPMENT LTD. — Website

Static bilingual industrial product catalogue built with HTML, CSS and vanilla JavaScript.

## Files
- `index.html` — website structure
- `style.css` — responsive styling
- `data.js` — editable company, category and product catalogue data
- `script.js` — search, filters, language switch, quotation cart and WhatsApp workflows
- `assets/images/` — local SVG illustrations
- `favicon.svg` — browser icon

## Run locally
Open `index.html` in a modern browser. No build step, Node.js or backend is required.

## Publish on GitHub Pages
1. Create a GitHub repository.
2. Upload the contents of this folder (not the enclosing folder) to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to publish the site.

## Edit company details and products
Edit `data.js`. The WhatsApp number is stored in `company.whatsapp` as digits only, with country code. The primary supplied contact is currently set to `249912545828`.
Products and categories are bilingual. No product prices are fabricated; customers submit quotation requests.

## Notes
- The catalogue and quotation cart work locally using browser JavaScript and LocalStorage.
- The inquiry forms open WhatsApp with a prefilled message; the visitor must press Send in WhatsApp.
- Google Fonts are optional enhancements; the site uses fallback fonts if unavailable.
- The map link is a Google Maps search link for the supplied Al-Sajana address, not a verified pin.
