# Schlanker Entwicklungsplan für LDigital

## Kurzfassung

Version 1 konzentriert sich auf eine starke, seriöse Startseite statt auf viele halbfertige Unterseiten. Zwingend sind nur:

- `index.html`
- `impressum.html`
- `datenschutz.html`

`js/script.js` darf vorerst leer bestehen bleiben, weil sie Teil des wiederverwendbaren Grundgerüsts ist. Die Dateikodierung wird nur geprüft, falls Darstellungsfehler auftreten.

## Phase 1: Startseitenstruktur festlegen

Ziel:
- Eine klare Startseite planen, die LDigital sofort verständlich macht.

Konkrete Aufgaben:
- Startseite in sinnvolle Abschnitte gliedern: Hero, Dienstleistungen, Arbeitsweise/Nutzen, CarDesk-Ausblick, Kontakt.
- CarDesk ausdrücklich als zukünftiges Produkt bzw. Pilotprojekt für Garagen behandeln, nicht als normale Dienstleistung.
- Navigation schlank halten: Leistungen, CarDesk, Kontakt.
- Impressum und Datenschutz im Footer verlinken.

Betroffene Dateien:
- `index.html`

Priorität:
- Hoch.

Zwingend:
- Klare Startseitenstruktur für Version 1.
- Nur `index.html`, `impressum.html` und `datenschutz.html` als Pflichtseiten.

Später:
- Eigene Unterseiten für Leistungen, CarDesk oder Kontakt.

## Phase 2: Inhalte der Startseite schreiben

Ziel:
- Professionelle Texte erstellen, die Vertrauen schaffen und das Angebot klar erklären.

Konkrete Aufgaben:
- Hero-Text schärfen: Webseiten, digitale Sichtbarkeit, Systeme und Automatisierung für Schweizer KMU.
- Drei Dienstleistungsbereiche formulieren:
  - Webseiten und digitale Sichtbarkeit
  - Digitale Werkzeuge und Systeme
  - Prozessoptimierung und Automatisierung
- Eigenen CarDesk-Abschnitt schreiben: zukünftiges Pilotprojekt für Garagen, noch kein Standardangebot.
- Kontaktabschnitt mit einfacher E-Mail-Kontaktmöglichkeit ausbauen.
- Tonalität sachlich, konkret, vertrauenswürdig und nicht überladen halten.

Betroffene Dateien:
- `index.html`

Priorität:
- Hoch.

Zwingend:
- Verständliche Texte für Startseite und Kontakt.
- Klare Trennung zwischen Dienstleistungen und CarDesk.

Später:
- Ausführliche Leistungsbeschreibungen.
- Referenzen, Blog, Fallstudien oder eigene CarDesk-Landingpage.

## Phase 3: HTML und CSS ausbauen

Ziel:
- Das bestehende Grundgerüst optisch und strukturell professioneller machen.

Konkrete Aufgaben:
- Neue Startseitenabschnitte in HTML ergänzen.
- Bestehende Kartenstruktur für Dienstleistungen beibehalten und verbessern.
- Eigenen visuellen Bereich für CarDesk gestalten.
- Abstände, Schriftgrößen, Farben, Buttons und Footer konsistenter machen.
- Responsive Darstellung für Smartphone und Desktop weiter verbessern.
- `js/script.js` unverändert bestehen lassen, solange keine Funktion nötig ist.
- Dateikodierung prüfen, falls Darstellungsfehler auftreten.

Betroffene Dateien:
- `index.html`
- `css/styles.css`
- `js/script.js` nur als bestehende, leere Datei

Priorität:
- Hoch.

Zwingend:
- Saubere Startseite auf Desktop und Smartphone.
- Lesbare Abschnitte, klare Buttons, keine kaputten Links.

Später:
- Mobile-Menü mit JavaScript.
- Animationen, Icons, weitere Designverfeinerung.

## Phase 4: Impressum und Datenschutz

Ziel:
- Rechtliche Pflichtseiten sorgfältig vorbereiten.

Konkrete Aufgaben:
- `impressum.html` mit korrekten Unternehmens- und Kontaktangaben erstellen.
- `datenschutz.html` passend zur tatsächlichen Website erstellen.
- Datenschutz abhängig von verwendeten Diensten prüfen:
  - Hosting bei cyon
  - E-Mail-Kontakt
  - mögliche Formulare
  - externe Schriftarten
  - Analytics
  - Cookies
- Keine pauschalen Rechtstexte übernehmen, sondern Inhalte sorgfältig prüfen.
- Footer-Links auf Impressum und Datenschutz testen.

Betroffene Dateien:
- `impressum.html`
- `datenschutz.html`
- `index.html`
- `css/styles.css`

Priorität:
- Hoch.

Zwingend:
- Impressum und Datenschutz vor Veröffentlichung.
- Datenschutz muss zu den wirklich verwendeten Diensten passen.

Später:
- Anpassung bei neuen Diensten wie Formularen, Analytics, externen Tools oder Cookies.

## Phase 5: Tests und Veröffentlichung

Ziel:
- Die Website zuverlässig auf `ldigital.ch` veröffentlichen.

Konkrete Aufgaben:
- Alle Links testen: Navigation, Footer, E-Mail-Link.
- Darstellung auf Desktop, Tablet und Smartphone prüfen.
- Seitentitel und Meta Description sinnvoll ergänzen.
- Ladeverhalten und Lesbarkeit prüfen.
- Veröffentlichung beim Hosting vorbereiten.
- Live-Version auf `ldigital.ch` nach dem Upload kontrollieren.

Betroffene Dateien:
- `index.html`
- `impressum.html`
- `datenschutz.html`
- `css/styles.css`
- `README.md`

Priorität:
- Hoch.

Zwingend:
- Funktionierende Version 1 mit Startseite, Impressum und Datenschutz.
- Mobile und Desktop müssen sauber nutzbar sein.

Später:
- Favicon, Social Preview, technische SEO-Details, Performance-Feinschliff.

## Phase 6: Spätere Erweiterungen

Ziel:
- Die Website nach Version 1 gezielt ausbauen.

Konkrete Aufgaben:
- Eigene Unterseite für CarDesk erstellen, sobald Produktidee und Pilotphase konkreter sind.
- Eigene Leistungsseiten ergänzen, wenn mehr Inhalt vorhanden ist.
- Kontaktseite oder Kontaktformular hinzufügen, falls E-Mail allein nicht reicht.
- Referenzen, Projektbeispiele oder Blog ergänzen.
- Bei neuen Diensten Datenschutz aktualisieren.

Betroffene Dateien:
- Optional später: `leistungen.html`, `webseiten.html`, `systeme.html`, `automatisierung.html`, `cardesk.html`, `kontakt.html`
- `index.html`
- `css/styles.css`
- `datenschutz.html`

Priorität:
- Mittel bis niedrig für Version 1.

Zwingend:
- Nichts davon für die erste Veröffentlichung.

Später:
- Unterseiten, Kontaktformular, Analytics, Blog, Referenzen, mehrsprachige Inhalte.

## Drei nächste konkrete Schritte

1. Reihenfolge der Startseitenabschnitte final bestätigen: Hero, Dienstleistungen, Arbeitsweise/Nutzen, CarDesk, Kontakt.

2. Für jeden Abschnitt 2 bis 4 kurze Sätze in einfacher, professioneller Sprache schreiben.

3. Rechtliche Fakten sammeln: Unternehmensangaben, cyon-Hosting, Kontakt-E-Mail sowie Entscheidung zu Formularen, externen Schriftarten, Analytics und Cookies.
