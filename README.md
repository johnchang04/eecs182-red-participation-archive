This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Local Environment Variables (Ed API)

This project includes a local scraper that accesses the Ed API to collect Extra Credit website links.  
**API tokens must NOT be committed to GitHub.**

### Setup (required to run the scraper)

Create a file called `.env.local` in the project root and add:

```env
ED_API_TOKEN=your_ed_api_token_here
ED_COURSE_ID=84647
```

- `ED_API_TOKEN` — your personal Ed API token  
- `ED_COURSE_ID` — EECS 182 course ID

> ⚠️ **Do not commit `.env.local`.** This file is intentionally ignored by git.

### Running the scraper

After setting the environment variables, run:

```bash
npm run scrape
```

This will generate `data/participation_sites.json`, which is then used by the Next.js frontend.

### Notes for collaborators

- Each collaborator should generate and use **their own Ed API token**
- The frontend does **not** require the token — only the scraper does
- If `.env.local` is missing, the scraper will fail with:
  ```
  Missing ED_API_TOKEN or ED_COURSE_ID
  ```
