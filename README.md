# Cellhasher Documentation

The Cellhasher documentation site, built with [Docusaurus](https://docusaurus.io/).

Migrated from the original [HonKit](https://github.com/honkit/honkit)-based site. Content lives under `docs/`,
mirroring the original page structure; sidebar order is defined explicitly in `sidebars.ts` (equivalent to the
old `SUMMARY.md`). Images and downloadable files live under `static/img/gitbook/` and `static/files/`.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens a browser window. Most changes are reflected live
without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory, which can be served using any static
content hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to
the `gh-pages` branch.
