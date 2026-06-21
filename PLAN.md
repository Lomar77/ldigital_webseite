# LDigital Entwicklungsplan

Aktueller Stand: Das technische Grundgerüst, die Startseite, die Über-uns-Seite, die Kontaktseite sowie die rechtlichen Seiten sind funktionsfähig und über GitHub Pages vorbereitet. Nach dem Gesamtcheck wird Version 1 neu um eine eigene Leistungsseite erweitert. Die Veröffentlichung auf `ldigital.ch` wird nach hinten verschoben.

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

* `index.html` – Startseite
* `leistungen.html` – Leistungsseite
* `ueber-uns.html` – Über LDigital, Haltung, Arbeitsweise und Entwicklung
* `kontakt.html` – Kontaktseite
* `impressum.html`
* `datenschutz.html`

`leistungen.html` ist neu und gehört zwingend zu Version 1.

## Leistungsstruktur für Version 1

1. Webseiten und digitales Auftreten
   * Unternehmenswebsites
   * mobile Darstellung
   * Google Business
   * grundlegende digitale Sichtbarkeit
2. Logodesign und Markenauftritt
   * Logoentwicklung oder Überarbeitung
   * Farben und Typografie
   * Favicon und grundlegende Markenmittel
3. Prozessoptimierung und Automatisierung
   * Abläufe analysieren
   * manuelle Schritte reduzieren
   * einfache digitale Lösungen und Automatisierungen

`Digitale Werkzeuge und Systeme` wird nicht mehr als eigener Leistungsbereich eingeplant.
`Social Media` gehört nicht zu Version 1 und wird als späteres Angebot eingeordnet.

## Geplante Startseiten-Cards

### Gemeinsamer Aufbau

Jede Card erhält später:

* ein lokales Bild
* einen Titel
* drei Leistungszeilen mit Icon
* einen kurzen Nutzen
* einen Link `Mehr erfahren`
* eine Verlinkung zum passenden Abschnitt auf `leistungen.html`

Die Cards dürfen per Klick hervorgehoben werden. Nicht aktive Cards bleiben vollständig lesbar. Es wird keine starke Unschärfe verwendet.

Der alte Card-Code dient nur als Designreferenz und wird nicht direkt übernommen. HTML, CSS und JavaScript werden später sauber getrennt.

### Card 1: Webseiten & digitales Auftreten

* Bildpfad: `Logo/Leistungen/webseiten-digitales-auftreten.png`
* Unterpunkte:
  1. Unternehmenswebsite – Übersichtliche und mobilfreundliche Website mit klaren Inhalten.
  2. Google Business – Unternehmensprofil einrichten oder optimieren, damit wichtige Informationen bei Google auffindbar sind.
  3. Digitale Sichtbarkeit – Struktur, Inhalte und technische Grundlagen für einen professionellen Online-Auftritt.
* Nutzen: Interessenten verstehen schneller, was das Unternehmen anbietet, und finden einfacher den Weg zur Kontaktaufnahme.
* Link: `leistungen.html#webseiten`

### Card 2: Logodesign & Markenauftritt

* Bildpfad: `Logo/Leistungen/logodesign-premium-visitenkarten.png`
* Unterpunkte:
  1. Logoentwicklung – Neues Logo entwickeln oder einen bestehenden Entwurf überarbeiten.
  2. Farben und Typografie – Passende Farben und Schriften für einen einheitlichen Auftritt festlegen.
  3. Premium-Visitenkarten – Hochwertige Formate, besondere Materialien und QR-Code-Integration für einen professionellen ersten Eindruck.
* Nutzen: Logo, Farben, Website und Geschäftsmittel wirken einheitlich und wiedererkennbar.
* Link: `leistungen.html#markenauftritt`

### Card 3: Prozessoptimierung & Automatisierung

* Bildpfad: `Logo/Leistungen/prozessoptimierung-automatisierung.png`
* Unterpunkte:
  1. Abläufe analysieren – Wiederkehrende Aufgaben und unnötige manuelle Schritte erkennen.
  2. Prozesse vereinfachen – Informationen, Dokumente und Aufgaben klarer organisieren.
  3. Sinnvoll automatisieren – Geeignete Arbeitsschritte digital verbinden oder automatisieren.
* Nutzen: Weniger doppelte Arbeit, weniger Fehler und mehr Zeit für das eigentliche Geschäft.
* Link: `leistungen.html#automatisierung`

### Bildvorgaben

Alle drei Bilder:

* Format: PNG
* Auflösung: 1200 x 800 Pixel
* Seitenverhältnis: 3:2
* lokale Dateien im Ordner `Logo/Leistungen/`
* einheitliche Bildsprache
* passende Blau-Gold-Farbwelt
* keine externen Bildlinks

## CarDesk

CarDesk wird später als eigenständige Website entwickelt. Das Projekt erhält ein eigenes Repository sowie eine eigene Marken- und Produktstruktur.

Auf der LDigital-Website bleibt nur ein kurzer CarDesk-Hinweis. Später kann dort ein Link zur eigenständigen CarDesk-Website ergänzt werden.

## Noch nötig für Version 1

### 1. Alten HTML- und CSS-Code prüfen

* Status: Blockiert, bis der Nutzer den alten Code bereitstellt.
* Ziel: geeignete Card-Layouts, Abstände und visuelle Bausteine aus dem alten Entwurf identifizieren.
* Priorität: Hoch
* geschätzte Dauer: 30 bis 60 Minuten
* betroffene Dateien: alte HTML-/CSS-Entwürfe, später eventuell `css/styles.css`
* Abgeschlossen, wenn klar ist, welche Elemente übernommen, angepasst oder verworfen werden.

### 2. Designsystem aus Logo ableiten

* Ziel: Die Website verwendet ein klares, konsistentes Farbsystem, das zum bestehenden Logo passt.
* Zu planen:
  * passendere `font-family`
  * neue Header-Hintergrundfarbe
  * passende Farben für `h1`, `h2`, `h3`
  * neue Button-Farbe
  * neue Button-Hover-Farbe
  * passender Goldton
  * Hintergrundfarbe passend zu Logo und Favicon
  * einheitliche Farbcodes für die gesamte Website
* Priorität: Hoch
* geschätzte Dauer: 45 bis 75 Minuten
* betroffene Dateien: `css/styles.css`, Logo-Dateien als Referenz
* Abgeschlossen, wenn ein schlankes, umsetzbares Designsystem für Version 1 festgelegt ist.

### 3. Cards neu gestalten

* Abhängigkeit: Prüfung des alten HTML- und CSS-Codes.
* Ziel: Drei Startseiten-Cards und die Leistungsdarstellung auf `leistungen.html` sollen sich am früheren Entwurf orientieren und zum neuen Designsystem passen.
* Priorität: Hoch
* geschätzte Dauer: 45 bis 90 Minuten
* betroffene Dateien: `index.html`, `leistungen.html`, `css/styles.css`
* Abgeschlossen, wenn die Cards einheitlich, responsive und passend zum neuen Designsystem gestaltet sind.

### 4. Logo und Favicon technisch überarbeiten

* Status: blockiert
* Grund: Logo/Favicon benötigen eine separate Designentscheidung und sollen den weiteren Website-Aufbau nicht blockieren.
* Ziel: Logo und Favicon technisch sauber für Web, Header und Browser-Tab vorbereiten.
* Zu planen:
  * transparenter Hintergrund
  * saubere Web-Dateiformate
  * Logo für den Header
  * Favicon mit 512 x 512 Pixel
  * Seitenverhältnisse des Kreuzes prüfen
  * Kreuzgeometrie gegebenenfalls separat überarbeiten
* Hinweis: Transparenz und Kreuzgeometrie werden nicht über CSS gelöst.
* Priorität: Mittel
* geschätzte Dauer: 60 bis 120 Minuten
* betroffene Dateien: Logo- und Favicon-Dateien, HTML-Dateien bei Pfad- oder Formatänderungen
* Abgeschlossen, wenn Logo und Favicon technisch sauber eingebunden und auf Desktop sowie Smartphone geprüft sind.

### 5. `leistungen.html` planen

* Ziel: Inhaltliche Struktur der neuen Leistungsseite mit drei Kernleistungen festlegen.
* Priorität: Hoch
* geschätzte Dauer: 30 bis 45 Minuten
* betroffene Dateien: noch keine zwingend
* Abgeschlossen, wenn Reihenfolge, Abschnitte, CTA-Ziele und Abgrenzung der Leistungen definiert sind.

### 6. Inhalte für `leistungen.html` schreiben

* Ziel: Texte für die drei Kernleistungen sachlich, kurz und verständlich formulieren.
* Priorität: Hoch
* geschätzte Dauer: 60 bis 90 Minuten
* betroffene Dateien: später `leistungen.html`
* Abgeschlossen, wenn alle drei Kernleistungen fertig formuliert sind und keine unbelegten Versprechen enthalten sind.

### 7. `leistungen.html` erstellen

* Ziel: neue Leistungsseite mit drei Kernleistungen technisch anlegen und in das bestehende Layout einfügen.
* Priorität: Hoch
* geschätzte Dauer: 60 bis 90 Minuten
* betroffene Dateien: `leistungen.html`, eventuell `css/styles.css`
* Abgeschlossen, wenn die Seite existiert, responsive funktioniert und zur restlichen Website passt.

### 8. Startseite visuell und inhaltlich überarbeiten

* Ziel: Startseite auf die neue Leistungsseite und das neue Designsystem abstimmen.
* Zu planen:
  * Leistungsbereich an neue Leistungsstruktur anpassen
  * `Digitale Werkzeuge und Systeme` entfernen
  * `Logodesign und Markenauftritt` ergänzen
  * `Webseiten und digitales Auftreten` um Google Business ergänzen
  * drei kurze Startseiten-Cards planen
  * Leistungen kürzer darstellen
  * Link zu `leistungen.html`
  * Abschnitt `Schrittweise zu besseren digitalen Abläufen` entfernen oder ersetzen
  * letzten Abschnitt passend zur neuen Struktur anpassen
  * CarDesk kurz halten
  * neue Cards verwenden
* Priorität: Hoch
* geschätzte Dauer: 60 bis 120 Minuten
* betroffene Dateien: `index.html`, eventuell `css/styles.css`
* Abgeschlossen, wenn die Startseite klar auf Einstieg, Kurzüberblick, Vertrauen und Kontaktführung fokussiert ist.

### 9. Über-uns-Seite visuell weiterentwickeln

* Ziel: Die Seite soll nicht nur aus Überschriften und Absätzen bestehen, sondern eine klarere visuelle Gliederung erhalten.
* Priorität: Mittel
* geschätzte Dauer: 45 bis 90 Minuten
* betroffene Dateien: `ueber-uns.html`
* Abgeschlossen, wenn Inhalt und Ton zur neuen Version-1-Struktur passen.

### 10. Kontaktseite visuell weiterentwickeln

* Ziel: Die Kontaktseite soll technisch und visuell klarer aufgebaut werden, ohne Kontaktformular.
* Priorität: Mittel
* geschätzte Dauer: 30 bis 60 Minuten
* betroffene Dateien: `kontakt.html`
* Abgeschlossen, wenn die Kontaktseite zur neuen Navigation und Leistungsstruktur passt.

### 11. Navigation um `Leistungen` ergänzen

* Ziel: Hauptnavigation auf allen Seiten um die neue Leistungsseite ergänzen.
* Priorität: Hoch
* geschätzte Dauer: 30 bis 45 Minuten
* betroffene Dateien: `index.html`, `leistungen.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`
* Abgeschlossen, wenn alle Header- und Footer-Links konsistent sind und keine toten Links entstehen.

### 12. Gesamtcheck

* Ziel: alle sechs Seiten lokal auf Inhalt, Links, Navigation, Footer, responsive Darstellung und offensichtliche Fehler prüfen.
* Priorität: Hoch
* geschätzte Dauer: 60 bis 90 Minuten
* betroffene Dateien: alle HTML-Dateien und `css/styles.css`
* Abgeschlossen, wenn alle Seiten lokal geprüft sind und keine offensichtlichen Fehler mehr vorhanden sind.

### 13. README aktualisieren

* Ziel: README auf die neue Seitenstruktur und den aktuellen Projektstand bringen.
* Priorität: Mittel
* geschätzte Dauer: 20 bis 30 Minuten
* betroffene Dateien: `README.md`
* Abgeschlossen, wenn README Startseite, Leistungen, Über uns, Kontakt, Impressum, Datenschutz und den aktuellen Status korrekt beschreibt.

### 14. Veröffentlichung auf `ldigital.ch`

* Ziel: Website über die eigene Domain erreichbar machen.
* Priorität: Hoch
* geschätzte Dauer: 60 bis 90 Minuten
* betroffene Dateien: Projektdateien für Upload, cyon-/Domain-/DNS-/SSL-Konfiguration
* Abgeschlossen, wenn `ldigital.ch` per HTTPS erreichbar ist und die aktuelle Website ausliefert.

### 15. Open Graph nach Domain-Aufschaltung

* Status: Blockiert
* Abhängigkeit: `ldigital.ch` muss live sein
* Ziel: Social-Media-Vorschau mit absoluten HTTPS-URLs korrekt ausliefern.
* Priorität: Mittel
* geschätzte Dauer: 30 bis 45 Minuten
* betroffene Dateien: `index.html`, `leistungen.html`, `ueber-uns.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, Social-Preview-Bild
* Abgeschlossen, wenn `og:image` und `twitter:image` absolute URLs mit `https://ldigital.ch/...` verwenden und die Vorschau getestet ist.

### 16. Finaler Live-Test

* Ziel: veröffentlichte Version auf Desktop, Tablet und Smartphone prüfen.
* Priorität: Hoch
* geschätzte Dauer: 30 bis 45 Minuten
* betroffene Dateien: keine zwingend, nur bei gefundenen Fehlern
* Abgeschlossen, wenn alle Seiten, Navigation, Logo, Favicon, E-Mail-Links und Rechtsseiten live geprüft sind.

## Geschätzter Gesamtaufwand bis Version 1

Ungefähr 10 bis 16 Stunden bis zur vollständigen LDigital Version 1.

Die tatsächliche Dauer hängt vor allem von der Qualität der alten HTML- und CSS-Entwürfe, der Designsystem-Entscheidung, der Logo-Bearbeitung, der Wiederverwendbarkeit des alten HTML- und CSS-Codes, der neuen Leistungsseite, der Überarbeitung der bestehenden Seiten sowie möglichen technischen Themen bei Domain, DNS oder SSL ab.

## Nächster Arbeitsblock

### Über uns, Kontakt und Gesamtcheck

* Über-uns-Seite visuell weiterentwickeln
* danach Kontaktseite visuell weiterentwickeln
* danach Gesamtcheck der sechs HTML-Seiten vorbereiten

## Nach Version 1

* Social-Media-Angebot entwickeln
  * Profilaufbau
  * Inhaltsplanung
  * Designvorlagen
  * später eventuell laufende Betreuung
* eigenständige CarDesk-Website
* Referenzen
* Blog
* Analytics
* Mehrsprachigkeit
* spätere zusätzliche Leistungsvertiefungen
* Kontaktformular
* weiterer Designausbau

Diese Punkte sind keine Voraussetzung für LDigital Version 1.

## Nächste drei konkrete Ziele

1. Über-uns-Seite visuell weiterentwickeln
2. Kontaktseite visuell weiterentwickeln
3. Danach Gesamtcheck der sechs HTML-Seiten vorbereiten

## Arbeitsverlauf

### 17. Juni 2026

* Arbeitszeit: 3 Stunden
* Erledigt:
  * technisches Grundgerüst und Startseitenstruktur weiterentwickelt
  * Navigation, Inhalte und erste Designgrundlagen aufgebaut
* Aktueller Stand:
  * Startseite technisch funktionsfähig
* Nächster Schritt:
  * rechtliche Seiten, SEO und weitere Struktur ergänzen

### 18. Juni 2026

* Arbeitszeit: 2 Stunden
* Erledigt:
  * Impressum und Datenschutzerklärung erstellt
  * SEO-Grundlagen ergänzt
  * Logo und Favicon vorbereitet und eingebunden
  * Typografie und Abstände verbessert
* Aktueller Stand:
  * Mehrseiten-Struktur vorbereitet
* Nächster Schritt:
  * Über-uns- und Kontaktseite ausbauen

### 19. Juni 2026

* Arbeitszeit: seit 21:30 Uhr, bisher rund 45 Minuten
* Erledigt:
  * Leistungsangebot für Version 1 auf drei Kernleistungen festgelegt
  * Social Media auf eine spätere Phase verschoben
  * alten Card-Code geprüft und als Designreferenz eingeordnet
  * drei Startseiten-Cards mit Inhalten, Links und Bildpfaden geplant
* Aktueller Stand:
  * Card-Struktur und Bilddateinamen sind festgelegt
  * Bilddateien werden vorbereitet
* Nächster Schritt:
  * drei Bilder im Projektordner speichern
  * Designsystem festlegen
  * Cards technisch umsetzen

### 20. Juni 2026

* Arbeitszeit: keine Projektarbeit
* Erledigt:
  * keine Projektarbeit
* Aktueller Stand:
  * Projektstand unverändert
* Nächster Schritt:
  * neuen Arbeitsblock vorbereiten

### 21. Juni 2026

* Arbeitszeit: Start des neuen Arbeitsblocks um 18:00 Uhr
* Erledigt:
  * neuer Arbeitsblock festgelegt
* Aktueller Stand:
  * Fokus liegt auf der visuellen Weiterentwicklung der Über-uns-Seite und danach der Kontaktseite
  * Logo/Favicon bleiben als separate Designentscheidung blockiert und blockieren den weiteren Website-Aufbau nicht
* Nächster Schritt:
  * Über-uns-Seite visuell weiterentwickeln
  * danach Kontaktseite visuell weiterentwickeln
