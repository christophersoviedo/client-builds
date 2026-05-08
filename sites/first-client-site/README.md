# First Client Site

A simple Vite + React starter project for a mobile-friendly landing page.

## Local setup

1. Change into the project directory:
   ```bash
   cd sites/first-client-site
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Deploy

1. Make sure your AWS CLI is installed and the `personal` profile is configured.
2. Run the deploy script from the project directory:
   ```bash
   npm run deploy
   ```

This builds the app and syncs the generated `dist/` folder to the S3 bucket `first-client-site-568256616721`.
