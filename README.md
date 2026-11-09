# The Speech Heroes

Website for [The Speech Heroes](https://thespeechheroes.com), a world of songs, stories and characters that gives children with Speech and Language delays a voice. Created by Rishi Kaushal and the Kaushal family.

Built with Next.js and deployed on Vercel.

## Pages

| Route                  | Content                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------- |
| `/`                    | Home: hero, welcome, about, music, characters, book, workshops, resources, contact      |
| `/about`               | The story behind The Speech Heroes                                                      |
| `/book`                | _The Speech Heroes vs. The Word Stoppers_, with a link to buy on Amazon                 |
| `/media`               | In the Media                                                                            |
| `/faq`                 | Frequently asked questions                                                              |
| `/newsletter`          | Newsletter sign-up                                                                      |
| `/contact`             | Contact details                                                                         |
| `/auth/login`          | Admin login                                                                             |
| `/dashboard`           | Admin dashboard                                                                         |

## Editing content

Most of the site's wording lives directly in the components and pages:

- Home page sections: `src/components/*Section.js`
- Inner pages: `src/app/<page>/page.js`
- Navigation, email address, Instagram, YouTube and Amazon links: `src/constants.js`
- Images, audio, video and downloadable resources: `public/`
- SEO title, description and social sharing: `src/app/layout.js`

## Website editor

The site owner changes wording by chatting with Claude, then publishes from a password-protected page.

1. Claude edits a `draft` branch through the connector at `/api/mcp/<CMS_MCP_SECRET>`. It can only change wording in the files listed in `src/utils/cms/site.js`, and it cannot publish.
2. Vercel builds a preview of the draft.
3. Pressing **Publish** at `/editor` adds one commit to the live branch beginning with `Publish:`, and Vercel deploys it.
4. **Go back to before this** at `/editor` restores the wording files only, as a new commit, so code changes are kept.

### Setup

- Create a fine-grained GitHub token limited to this repository, with **Contents: read and write** and **Deployments: read**.
- Add the `CMS_*` variables below to the Vercel project's Production environment. Commits use `CMS_COMMIT_NAME` and `CMS_COMMIT_EMAIL`, which must belong to the Vercel account owner on the Hobby plan.
- Turn off Vercel Authentication for previews (Project Settings > Deployment Protection) so the owner can open preview links.
- In Claude, add a custom connector with the URL `https://<site>/api/mcp/<CMS_MCP_SECRET>` and **No sign-in**. Treat that URL as a password.

## Tech stack

- **Framework**: Next.js 15 (App Router), React 19
- **Styling**: Tailwind CSS, Framer Motion
- **Database, auth and storage**: Supabase
- **Email**: Nodemailer through Gmail, for newsletter notifications
- **Hosting**: Vercel

## What uses Supabase

The public pages are static content and do not read from the database. Supabase is only used by:

- The newsletter: `src/app/api/newsletter/` (table `newsletter_subscribers`)
- Admin login: `src/app/auth/` and `src/app/dashboard/layout.js`
- The dashboard: `src/app/dashboard/`, `src/components/dashboard/` and `src/app/hooks/`
- A keep-alive ping: `src/app/api/keep-alive/`

The dashboard's product and class screens (tables `jewellery`, `jewellery_images`, `classes`, `class_images`) are carried over from an earlier project and are not part of the public site.

## Getting started

Requires Node.js and npm.

```bash
npm ci --ignore-scripts
```

Create `.env.local` with:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
GMAIL_USER=
GMAIL_APP_PASS=

# Website editor
CMS_GITHUB_REPO=owner/repo
CMS_GITHUB_TOKEN=
CMS_LIVE_BRANCH=master
CMS_COMMIT_NAME=
CMS_COMMIT_EMAIL=
CMS_PASSWORD=
CMS_SESSION_SECRET=
CMS_MCP_SECRET=
```

Never commit this file.

Then start the development server at <http://localhost:3000>:

```bash
npm run dev
```

## Scripts

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Build for production             |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Run ESLint                       |

## License

This project is proprietary and confidential.
