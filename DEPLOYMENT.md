# Deployment

1. `npm install`
2. `npm run build`
3. Den Inhalt von `dist/` pruefen.
4. Den gesamten Inhalt von `dist/` in das Webroot der Domain hochladen, z. B. `public_html/`, `htdocs/` oder `www/`.

Auf den Webserver gehoert nur der Inhalt von `dist/`. `node_modules/`, `src/`, `package.json`, `vite.config.ts` und andere Entwicklungsdateien muessen nicht hochgeladen werden.

Die Website ist eine statische One-Page-Site mit Anker-Navigation. Eine `.htaccess` ist dafuer nicht erforderlich.
