# Khan Autos
**🔗 [Click here to view the Live Demo](https://khanautosstore.netlify.app/)**
Khan Autos is a responsive storefront for browsing automotive accessories and placing product inquiries or orders through WhatsApp. The site presents the Khan Autos brand, highlights its service promises, and displays a catalog of car parts with descriptions and prices in PKR.

## Features

- Landing page with branded navigation and a hero section
- About section describing the store's value propositions
- Product cards with images, descriptions, and PKR prices
- Order form that collects a customer's name, phone number, and address
- WhatsApp checkout that opens a pre-filled order message
- Responsive styling with Tailwind CSS

> **Ordering note:** Checkout opens WhatsApp with the selected product and customer details pre-filled. The project does not currently include a backend, payment processing, or order database.

## Tech stack

- **React 19** for the user interface
- **Vite 8** for local development and production builds
- **Tailwind CSS 4** with the `@tailwindcss/vite` plugin for styling
- **Lucide React** for icons
- **ESLint 10** for linting

The app uses JavaScript and ES modules.

## Requirements

- Node.js compatible with Vite 8
- npm

## Setup

1. Clone the repository and move into the project directory:

   ```bash
   git clone https://github.com/Ayancyber/khan-autos.git
   cd khan-autos
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   Vite prints the local URL in the terminal (typically `http://localhost:5173`).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot module replacement |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Serve the production build locally for preview |
| `npm run lint` | Run ESLint against the project |

To preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
.
├── index.html              # HTML entry point and page metadata
├── public/                 # Static files served from the site root
├── src/
│   ├── assets/             # Product, hero, and brand images
│   ├── components/
│   │   ├── About.jsx       # Why buy from Khan Autos section
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Form.jsx        # Customer details and WhatsApp checkout
│   │   ├── Hero.jsx        # Landing-page hero
│   │   ├── Navbar.jsx      # Navigation and shop links
│   │   ├── ProductCard.jsx # Individual product display and buy action
│   │   └── Shop.jsx        # Product catalog
│   ├── App.jsx             # Page composition and order-form state
│   ├── index.css           # Global styles and Tailwind CSS import
│   └── main.jsx            # React application entry point
└── vite.config.js          # Vite, React, and Tailwind plugin configuration
```

## Updating products and contact details

- Product information is currently defined in the `products` array in `src/components/Shop.jsx`.
- The WhatsApp number used for checkout is configured in `src/components/Form.jsx`. The contact link in `src/components/Navbar.jsx` also points to WhatsApp; update both locations if the business number changes.
- Product and brand imagery is stored in `src/assets/`; root-served static assets can be placed in `public/`.

## Production

Run `npm run build` to generate the static production site in `dist/`. Deploy the contents of that directory to a static hosting provider. Run `npm run preview` to test the generated build locally before deployment.
