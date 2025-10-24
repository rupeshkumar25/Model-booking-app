# Model Booking App (Static Version)

This is a simple static React + Vite app (no Firebase) that uses browser localStorage to store models and bookings.
Perfect for previewing and deploying instantly (Vercel / Netlify).

## Quick start

1. Unzip and open the project folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Open the URL printed by Vite (usually http://localhost:5173)

## Structure

- `/src` - React source
- `/public` - public assets
- Uses localStorage keys: `models_static` and `bookings_static`

Admin page: `/admin` — add models (photos uploaded are stored in-memory as Data URLs)
Customer page: `/` — browse models and make bookings (saved to localStorage)
