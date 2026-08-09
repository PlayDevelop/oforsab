# OFORSAB

Website for **Oliver Fors AB**, a concrete contractor based in Borås,
specializing in patterned concrete, general concrete work, and outdoor surfaces
throughout Västra Götaland.

Website: [oforsab.se](https://oforsab.se)

## Technology

- React and TypeScript
- Vinext and Vite
- Responsive design for mobile and desktop
- Scroll-based animations and parallax effects
- Static export for hosting at Loopia

The website currently has no database or server-side functionality.

## Local development

Node.js `22.13.0` or later is required.

```bash
npm install
npm run dev
```

The development server prints its local address in the terminal, normally
`http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

`npm run build` creates a static production build in `dist/client/`.

## Project structure

- `app/page.tsx` – page content and structured business data
- `app/globals.css` – design and responsive layout
- `app/ParallaxMotion.tsx` – scroll and parallax effects
- `public/` – logos, images, and web server configuration
- `.github/workflows/release.yml` – manual production release
- `.github/scripts/` – validation, versioning, and Loopia deployment

## Release to Loopia

Production releases are started manually from GitHub:

1. Open **Actions** in the repository.
2. Select **Release and deploy**.
3. Click **Run workflow**.
4. Select `patch`, `minor`, or `major`.
5. Start the workflow from `main`.

The workflow:

1. validates the repository and runs lint,
2. builds and tests the static website,
3. uploads `dist/client/` to Loopia using SSH and rsync,
4. creates a version tag and a GitHub Release.

### GitHub secrets

The following repository secrets are required:

- `LOOPIA_SSH_USER`
- `LOOPIA_SSH_PRIVATE_KEY`
- `LOOPIA_SSH_KNOWN_HOSTS`

They are already configured for this repository. Secret values must never be
committed to source control.

### Default configuration

- SSH host: `ssh.loopia.se`
- SSH port: `22`
- Remote path: `oforsab.se/public_html`

The defaults can be overridden with the GitHub variables `LOOPIA_SSH_HOST`,
`LOOPIA_SSH_PORT`, and `LOOPIA_REMOTE_PATH` when needed.

The deployment script synchronizes the production directory and removes files
that no longer exist in the build. As a safety check, the remote path must end
with `public_html`.
