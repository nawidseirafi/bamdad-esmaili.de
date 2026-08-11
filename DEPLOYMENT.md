# Deployment

1. `npm install`
2. `npm run build`
3. Den Inhalt von `dist/` pruefen.
4. Den gesamten Inhalt von `dist/` in das Webroot der Domain hochladen, z. B. `public_html/`, `htdocs/` oder `www/`.

Auf den Webserver gehoert nur der Inhalt von `dist/`. `node_modules/`, `src/`, `package.json`, `vite.config.ts` und andere Entwicklungsdateien muessen nicht hochgeladen werden.

Die Website ist eine statische One-Page-Site mit Anker-Navigation. Eine `.htaccess` ist dafuer nicht erforderlich.
Der Zielserver muss PHP ausfuehren koennen, wenn Galerie und Radio automatisch aus
den Ordnern gelesen werden sollen.

## Galerie und Radio per FileZilla aktualisieren

Nach dem Deployment koennen Inhalte per FileZilla direkt in diese Ordner geladen
oder dort geloescht werden:

```txt
media/galerie/   Bilder: jpg, jpeg, png, webp, gif, avif
media/Radio/     Audio:  mp3, m4a, wav, ogg
```

Die Datei `media-manifest.php` scannt diese Ordner automatisch und liefert der
Website die aktuelle Dateiliste. Neue Dateien erscheinen dadurch ohne neuen
Build, geloeschte Dateien verschwinden ebenfalls automatisch.

Der Titel wird aus dem Dateinamen erzeugt. Beispiele:

```txt
interview-angela-merkel.jpg  -> Interview Angela Merkel
raisi-ist-tot.mp3            -> Raisi Ist Tot
```

## Dateinamen und Umlaute

Empfohlen sind einfache Dateinamen ohne Leerzeichen und ohne echte Umlaute.
Statt Leerzeichen Bindestriche verwenden:

```txt
interview-angela-merkel.jpg
raisi-ist-tot.mp3
01-frau-leben-freiheit.mp3
```

Fuer deutsche Umlaute am besten diese Schreibweise verwenden:

```txt
ä -> ae
ö -> oe
ü -> ue
Ä -> Ae
Ö -> Oe
Ü -> Ue
ß -> ss
```

Beispiele:

```txt
iranischer-saenger-wechselt-die-seiten.mp3 -> Iranischer Sänger Wechselt Die Seiten
live-aus-muenchen.mp3                      -> Live Aus München
gefluechteter-als-schwimmlehrer.jpg        -> Geflüchteter Als Schwimmlehrer
```

## Radio-Quelle anzeigen

Bei Radio-Dateien kann die Quelle nach einem doppelten Bindestrich `--`
angehaengt werden. Links wird dann der Beitragstitel angezeigt, rechts die
Quelle.

```txt
01-afghanen-ueber-abschiebung--wdr-cosmo.mp3
```

Anzeige:

```txt
Afghanen Über Abschiebung        WDR COSMO
```

Beispiel fuer 1LIVE:

```txt
02-frau-leben-freiheit-die-revolution-im-iran--1live-reportage.mp3
```

Anzeige:

```txt
Frau, Leben, Freiheit: Die Revolution im Iran        1LIVE Reportage
```

Echte Umlaute in Dateinamen koennen funktionieren, wenn Server und FileZilla
UTF-8 sauber behandeln. Sicherer fuer Webserver, Backups und Links sind aber
ASCII-Dateinamen mit `ae`, `oe`, `ue` und `ss`.

Die Reihenfolge wird alphabetisch sortiert. Fuer eine feste Reihenfolge am
besten Nummern voranstellen. Diese Nummern dienen nur der Sortierung und werden
im sichtbaren Titel automatisch entfernt:

```txt
01-erster-beitrag.mp3                -> Erster Beitrag
02-zweiter-beitrag.mp3               -> Zweiter Beitrag
03-dritter-beitrag.mp3               -> Dritter Beitrag
01-Afghanen-ueber-Abschiebung.mp3    -> Afghanen Über Abschiebung
```

Wichtig: Alles nach der Nummer wird als sichtbarer Titel verwendet. Technische
Altnamen sollten deshalb beim Hochladen oder Umbenennen lesbar gemacht werden.

Nicht ideal:

```txt
02-1livereportage_2023-01-02_fraulebenfreiheitdierevolutionimiran_1live.mp3
```

Besser:

```txt
02-frau-leben-freiheit-die-revolution-im-iran.mp3
```

Dann wird der Beitrag durch eine Sonderregel sauber als
`Frau, Leben, Freiheit: Die Revolution im Iran` angezeigt. Dieselbe Sonderregel
gilt auch fuer den bereits vorhandenen alten technischen Dateinamen.

Ohne Sonderregel erzeugt die Website den Titel automatisch aus dem Dateinamen.
Dabei werden die einzelnen Worte derzeit gross geschrieben, weil aus dem
Dateinamen nicht zuverlaessig erkennbar ist, welche deutschen Worte klein
bleiben sollen.

`media/galerie/gallery.json` bleibt nur als Fallback fuer lokale Entwicklung
oder Server ohne PHP bestehen.
