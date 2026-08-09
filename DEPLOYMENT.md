# Deployment

1. `npm install`
2. `npm run build`
3. Den Inhalt von `dist/` pruefen.
4. Den gesamten Inhalt von `dist/` in das Webroot der Domain hochladen, z. B. `public_html/`, `htdocs/` oder `www/`.

Auf den Webserver gehoert nur der Inhalt von `dist/`. `node_modules/`, `src/`, `package.json`, `vite.config.ts` und andere Entwicklungsdateien muessen nicht hochgeladen werden.

Die Website ist eine statische One-Page-Site mit Anker-Navigation. Eine `.htaccess` ist dafuer nicht erforderlich.

## Galerie aktualisieren

Neue Galeriebilder koennen nach dem Deployment per FileZilla in `media/galerie/`
hochgeladen werden. Danach den Dateinamen in `media/galerie/gallery.json`
eintragen und die JSON-Datei ebenfalls hochladen:

```json
[
  "dreh-in-dubai.jpg",
  "neues-bild.jpg"
]
```

Der Dateiname muss exakt dem Namen im Ordner `media/galerie/` entsprechen. Der
Titel wird automatisch aus dem Dateinamen erzeugt, zum Beispiel wird
`neues-bild.jpg` als `Neues Bild` angezeigt.
