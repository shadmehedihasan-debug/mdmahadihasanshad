# Shad Portfolio

Personal portfolio for Md Mahadi Hasan Shad, a CSE student at Daffodil International University who is passionate about AI.

Built with React, TypeScript, Vite and Three.js, adapted from the open-source MIT template by Redoyanul Haque.

## Edit your content

Almost everything you'll want to change is in `src/config.ts`: name, about text, internships, projects, certificates, skills and links.

## Run locally

```bash
npm install
npm run dev
```

The "Ask Shad AI" chat calls `/api/chat`, which only runs on Vercel (or via `vercel dev`). Without it, the chat shows a fallback message and the rest of the site still works.

## Deploy on Vercel

1. Push this project to GitHub and import it in Vercel.
2. Add an environment variable `GROQ_API_KEY` with your Groq API key.
3. Deploy.

## License

Released under the MIT License. See [LICENSE](LICENSE). The original copyright notice from the template is kept as required by the license.
