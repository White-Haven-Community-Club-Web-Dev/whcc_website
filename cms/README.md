# CMS Local Setup

This directory contains the Strapi CMS for the WHCFC website.

This README is intended to help team members set up the CMS locally in a simple and safe way, so development work does not accidentally affect the live CMS content.

## Overview

The CMS uses:

- **Strapi** for content management
- **Neon Postgres** for the database
- **Cloudinary** for media uploads
- **Render** for the deployed CMS service

For local development, team members should use a **development Neon branch/database** and **development Cloudinary credentials**, not the production values used by the live Render CMS.

## Before You Start

Please make sure you have:

- **Node.js 22**
- **npm**
- Access to this repository
- A development Neon branch/database connection string
- Development Cloudinary credentials

If you do not yet have the Neon or Cloudinary credentials, they can be requested from the **team lead / administrator**.

## Important Development Note

Please do **not** run local Strapi against the production database or production media credentials.

For local work, the recommended approach is:

- branch the Neon database from the **info@whcfc** production account / branch into a separate development branch
- use development Cloudinary credentials
- run Strapi locally with a local environment file

This helps keep local testing separate from the deployed CMS.

## Current Strapi Upload Configuration

The CMS upload provider is configured by environment:

- `config/env/development/plugins.ts`
- `config/env/production/plugins.ts`

Both currently use the Cloudinary provider, but the credentials should come from the environment values used in that environment.

## 1. Install Dependencies

From the `cms` directory:

```bash
npm install
```

## 2. Create a Local Environment File

Create a file named:

```text
.env.development.local
```

A typical example is:

```env
HOST=0.0.0.0
PORT=1337

APP_KEYS=devKey1,devKey2,devKey3,devKey4
API_TOKEN_SALT=devApiTokenSalt123456
ADMIN_JWT_SECRET=devAdminJwtSecret123456
TRANSFER_TOKEN_SALT=devTransferTokenSalt123456
ENCRYPTION_KEY=devEncryptionKey1234567890123456
JWT_SECRET=devJwtSecret123456

DATABASE_URL=postgresql://<your-development-neon-connection-string>
DATABASE_CLIENT=postgres
DATABASE_SSL=true
DATABASE_CONNECTION_TIMEOUT=60000

CLOUDINARY_NAME=<your-development-cloudinary-name>
CLOUDINARY_KEY=<your-development-cloudinary-key>
CLOUDINARY_SECRET=<your-development-cloudinary-secret>
```

Notes:

- `DATABASE_URL` should point to a **development Neon branch/database**
- `CLOUDINARY_*` values should be your **development** Cloudinary credentials
- this file should remain local and should not be committed

## 3. Start the CMS Locally

From the `cms` directory, run:

```bash
ENV_PATH=.env.development.local npm run develop
```

This tells Strapi to use the local development environment file.

## 4. Open the CMS

Once Strapi starts, open:

```text
http://localhost:1337/admin
```

If this is your first time using that local database, you may need to create a local admin user.

## 5. Media Uploads

Media uploads are handled through Cloudinary.

If uploads or deletes fail, please check:

- the values in `.env.development.local`
- whether `CLOUDINARY_NAME`, `CLOUDINARY_KEY`, and `CLOUDINARY_SECRET` are present and correct
- whether you are using the intended development credentials

## 6. Development Workflow

Recommended workflow for local CMS work:

1. Pull the latest code
2. Make sure your development Neon branch/database is ready
3. Start Strapi with:
   ```bash
   ENV_PATH=.env.development.local npm run develop
   ```
4. Make and test CMS content model changes locally
5. Commit only the intended source-code changes

## 7. Environment and Branch Roadmap

### Current setup (before full website migration from Netlify to Render)

At the moment, the frontend production site is still tied to the existing **Netlify** setup.

Because of that, for now the practical setup is:

- **Development**
  - local Strapi
  - local feature branches
  - development Neon branch/database
  - development Cloudinary credentials

- **Production**
  - deployed Render CMS
  - production data/resources

For now, changes can be developed and tested locally, then promoted carefully to the current production setup as needed.

### Planned setup (after full website migration from Netlify to Render)

Once the website frontend has also been fully migrated to **Render**, the intended workflow is:

- **Feature branch / local development**
  - each developer works locally on their own feature branch
  - local Strapi uses development resources

- **`develop` branch -> staging**
  - staging frontend and staging CMS deploy from `develop`
  - used for integrated testing and team review

- **`main` branch -> production**
  - production frontend and production CMS deploy from `main`

### Planned flow after migration

1. Developer works locally on a feature branch
2. Changes are tested locally
3. Feature branch is merged into `develop`
4. Staging environment is updated from `develop`
5. Team reviews and tests staging
6. Approved changes are merged into `main`
7. Production is updated from `main`

### Why this roadmap is useful

This helps keep:

- local experimentation separate from shared environments
- staging testing separate from production
- production changes more controlled and predictable

## 8. Files Relevant to Environment Setup

Key files:

- `config/database.ts`
- `config/middlewares.ts`
- `config/env/development/plugins.ts`
- `config/env/production/plugins.ts`

## 9. Troubleshooting

### Strapi starts but content changes affect the deployed CMS
This usually means your local environment is still pointing to the production database.

Please check `DATABASE_URL` in `.env.development.local`.

### Cloudinary errors such as “Must supply api_key”
This usually means the Cloudinary environment variables are missing or incorrect.

Please check:

- `CLOUDINARY_NAME`
- `CLOUDINARY_KEY`
- `CLOUDINARY_SECRET`

### Media previews do not load in Strapi
Please check the Strapi middleware/content security policy configuration in:

- `config/middlewares.ts`

## 10. When in Doubt

If you are unsure which credentials or Neon branch to use, please ask the **team lead / administrator** before proceeding.

This is especially important for:

- database credentials
- Cloudinary credentials
- anything related to production or deployed CMS access
