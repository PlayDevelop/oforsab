# OFORSAB

Webbplats för **Oliver Fors AB**, ett betongföretag i Borås med inriktning på
mönstrad betong, betongarbeten och utemiljöer i Västra Götaland.

Webbplats: [oforsab.se](https://oforsab.se)

## Teknik

- React och TypeScript
- Vinext och Vite
- Responsiv design för mobil och desktop
- Scrollbaserade animationer och parallaxeffekter
- Statisk export för drift på Loopia

Sidan använder för närvarande ingen databas eller serverbaserad funktionalitet.

## Lokal utveckling

Node.js `22.13.0` eller senare krävs.

```bash
npm install
npm run dev
```

Den lokala utvecklingsservern visar adressen i terminalen, normalt
`http://localhost:3000`.

## Kontroller

```bash
npm run lint
npm run build
```

`npm run build` skapar en statisk produktionsversion i `dist/client/`.

## Projektstruktur

- `app/page.tsx` – sidans innehåll och strukturerade företagsdata
- `app/globals.css` – design och responsiv layout
- `app/ParallaxMotion.tsx` – scroll- och parallaxeffekter
- `public/` – logotyper, bilder och webbserverinställningar
- `.github/workflows/release.yml` – manuell produktionsrelease
- `.github/scripts/` – validering, versionshantering och Loopia-deployment

## Release till Loopia

Produktionsreleaser startas manuellt från GitHub:

1. Öppna **Actions** i repositoryt.
2. Välj **Release and deploy**.
3. Klicka på **Run workflow**.
4. Välj `patch`, `minor` eller `major`.
5. Starta workflowen från `main`.

Workflowen:

1. validerar repositoryt och kör lint,
2. bygger den statiska webbplatsen,
3. laddar upp `dist/client/` till Loopia via SSH och rsync,
4. skapar en versionstagg och en GitHub Release.

### GitHub-secrets

Följande repository-secrets krävs:

- `LOOPIA_SSH_USER`
- `LOOPIA_SSH_PRIVATE_KEY`
- `LOOPIA_SSH_KNOWN_HOSTS`

De är redan konfigurerade för detta repository. Hemliga värden ska aldrig
skrivas in i källkoden.

### Standardinställningar

- SSH-server: `ssh.loopia.se`
- SSH-port: `22`
- Målkatalog: `oforsab.se/public_html`

Värdena kan vid behov ersättas med GitHub-variablerna `LOOPIA_SSH_HOST`,
`LOOPIA_SSH_PORT` och `LOOPIA_REMOTE_PATH`.

Deployment-scriptet använder synkronisering med borttagning av gamla filer.
Som säkerhetskontroll måste målkatalogen sluta med `public_html`.
