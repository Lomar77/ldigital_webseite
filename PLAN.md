# LDigital Entwicklungsplan

Aktueller Stand: Das technische Grundgerüst, die Startseite, die Über-uns-Seite, die Kontaktseite sowie die rechtlichen Seiten sind funktionsfähig und über GitHub Pages vorbereitet. Vor der Veröffentlichung auf ldigital.ch stehen noch Gesamtprüfung, README-Aktualisierung, Domain-Veröffentlichung, Open Graph nach Domain-Aufschaltung und finaler Live-Test an.

## Abgeschlossen

* HTML- und CSS-Grundgerüst
* Responsive Design
* Startseite
* Leistungen
* Arbeitsweise
* CarDesk-Hinweis
* Kontaktbereich auf der Startseite
* Impressum
* Datenschutz
* Logo
* Favicon
* SEO-Grundlagen
* Typografie und Abstände
* GitHub Pages
* PLAN.md auf den aktuellen Mehrseiten-Stand gebracht
* technische und visuelle Prüfung
* Seitenarchitektur und Navigation finalisiert
* `ueber-uns.html` erstellt
* Inhalte der Über-uns-Seite überarbeitet und geprüft
* `kontakt.html` erstellt
* Inhalte der Kontaktseite überarbeitet und geprüft
* Header-Navigation auf allen fünf Seiten vereinheitlicht
* Footer-Navigation auf allen fünf Seiten vereinheitlicht
* Kontaktadresse auf `info@ldigital.ch` vereinheitlicht
* Startseiten-CTAs auf `kontakt.html` umgestellt
* CarDesk-Bereich auf der Startseite gekürzt und als eigenständiges Zukunftsprojekt eingeordnet

## Seitenstruktur für LDigital Version 1

* `index.html` – Startseite mit Leistungen, Arbeitsweise und kurzem CarDesk-Hinweis
* `ueber-uns.html` – Über LDigital, Haltung, Arbeitsweise und Entwicklung
* `kontakt.html` – eigene Kontaktseite
* `impressum.html`
* `datenschutz.html`

Die Dienstleistungen bleiben auf der Startseite und erhalten für Version 1 keine eigenen Unterseiten.

## CarDesk

CarDesk wird später als eigenständige Website entwickelt. Das Projekt erhält ein eigenes Repository sowie eine eigene Marken- und Produktstruktur.

Auf der LDigital-Website bleibt nur ein kurzer CarDesk-Hinweis. Später kann dort ein Link zur eigenständigen CarDesk-Website ergänzt werden.

## Noch nötig für Version 1

### 1. Gesamtcheck aller fünf Seiten

* Ziel: alle Seiten lokal auf Inhalt, Links, Navigation, Footer, responsive Darstellung und offensichtliche Fehler prüfen.
* Priorität: Hoch
* geschätzte Dauer: 45 bis 60 Minuten
* betroffene Dateien: `index.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, `css/styles.css`
* Abgeschlossen, wenn alle fünf Seiten lokal geprüft sind und keine offensichtlichen Fehler mehr vorhanden sind.

### 2. README aktualisieren

* Ziel: README auf die neue Mehrseiten-Struktur und den aktuellen Projektstand bringen.
* Priorität: Mittel
* geschätzte Dauer: 20 bis 30 Minuten
* betroffene Dateien: `README.md`
* Abgeschlossen, wenn README Startseite, Über uns, Kontakt, Impressum, Datenschutz und den aktuellen Status korrekt beschreibt.

### 3. Veröffentlichung auf `ldigital.ch`

* Ziel: Website über die eigene Domain erreichbar machen.
* Priorität: Hoch
* geschätzte Dauer: 60 bis 90 Minuten
* betroffene Dateien: Projektdateien für Upload, cyon-/Domain-/DNS-/SSL-Konfiguration
* Abgeschlossen, wenn `ldigital.ch` per HTTPS erreichbar ist und die aktuelle Website ausliefert.

### 4. Open-Graph- und Social-Media-Metadaten nach Domain-Aufschaltung ergänzen

* Status: Blockiert
* Abhängigkeit: `ldigital.ch` muss live sein
* Ziel: Social-Media-Vorschau mit absoluten HTTPS-URLs korrekt ausliefern.
* Priorität: Mittel
* geschätzte Dauer: 30 bis 45 Minuten
* betroffene Dateien: `index.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, Social-Preview-Bild
* Abgeschlossen, wenn `og:image` und `twitter:image` absolute URLs mit `https://ldigital.ch/...` verwenden und die Vorschau getestet ist.

### 5. finaler Live-Test

* Ziel: veröffentlichte Version auf Desktop, Tablet und Smartphone prüfen.
* Priorität: Hoch
* geschätzte Dauer: 30 bis 45 Minuten
* betroffene Dateien: keine zwingend, nur bei gefundenen Fehlern
* Abgeschlossen, wenn alle Seiten, Navigation, Logo, Favicon, E-Mail-Links und Rechtsseiten live geprüft sind.

## Geschätzter Gesamtaufwand bis Version 1

Ungefähr 3 bis 5 Stunden bis zur vollständigen LDigital Version 1.

Die tatsächliche Dauer hängt vor allem von der finalen Prüfung, der README-Aktualisierung, der cyon-Konfiguration sowie möglichen technischen Themen bei Domain, DNS oder SSL ab.

## Nächster Arbeitsblock

### Gesamtprüfung und Veröffentlichungsvorbereitung

* alle fünf Seiten lokal prüfen
* Header, Footer und Links kontrollieren
* mobile Darstellung prüfen
* Texte auf Wiederholungen und Fehler prüfen
* README aktualisieren
* danach Veröffentlichung auf `ldigital.ch` vorbereiten

## Nach Version 1

* eigenständige CarDesk-Website
* Referenzen
* Blog
* Analytics
* Mehrsprachigkeit
* spätere Leistungsseiten
* Kontaktformular
* weiterer Designausbau

Diese Punkte sind keine Voraussetzung für LDigital Version 1.

## Nächste drei konkrete Ziele

1. Gesamtcheck aller fünf Seiten durchführen
2. README auf den neuen Mehrseiten-Stand aktualisieren
3. Veröffentlichung auf `ldigital.ch` vorbereiten
