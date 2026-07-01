# LDigital Entwicklungsplan

## Projektsteuerung und aktueller Status

`PLAN.md` ist die zentrale Projektsteuerung für die nächsten Arbeitsphasen. Der frühere Arbeitsrapport ruht, wird nicht weitergeführt und nicht für die aktuelle Priorisierung verwendet.

### LDigital Version 1

LDigital Version 1 ist abgeschlossen und bleibt die stabile interne Ausgangsbasis für Version 2.

### Marco / Garage Rotterdam

Das Projekt Marco / Garage Rotterdam ist aktuell pausiert.

Gründe:

* Zugriff, technische Klärung und Hosting-Support sind noch offen.
* Die Website ist unter den aktuellen Voraussetzungen nicht sinnvoll weiterbearbeitbar.
* Es wird auf eine Antwort sowie auf vollständiges Material gewartet.

Das Projekt wird nicht verworfen. Es bleibt heiss und relevant und soll wieder aufgenommen werden, sobald Zugriff, Material und technische Grundlage vollständig geklärt sind. Bis dahin erfolgt keine weitere aktive Bearbeitung.

Nach der Wiederaufnahme gilt weiterhin:

* Marco / Garage Rotterdam bleibt ein Lern-, Test- und Referenzprojekt.
* Die Garage-Website wird getrennt von der LDigital-Firmenwebsite in einem eigenen Projektordner oder Repository geführt.
* Die bestehende Garage-Dokumentation dient als Grundlage für Projektgrenzen, Briefing, Preisstruktur und spätere Garage-Kundenprojekte.
* Vor der Umsetzung werden Material, Seitenumfang, Funktionen und technische Zuständigkeiten verbindlich geklärt.

### Aktive Hauptpriorität

Die aktive Hauptpriorität ist **LDigital Webseite – Version 2**.

* Die Arbeit soll trotz der Blockierung des Garage-Projekts weitergehen.
* LDigital benötigt eine veröffentlichungsreife und überzeugende eigene Website.
* Die Website soll als Referenzprojekt und Grundlage für die Akquise dienen.
* Version 2 wird erst nach interner Qualitätsprüfung und separater Deployment-Entscheidung veröffentlicht.

### Aktueller Status vom 28. Juni 2026 – LDigital Version 2.4

LDigital Version 2.4 ist intern technisch und lokal im Browser geprüft.

Geprüft wurden:

* 11 HTML-Seiten;
* Desktop `1280x900`;
* Mobile `390x844`;
* Narrow Mobile `320x720`;
* insgesamt 33 Prüfungen.

Ergebnis:

* keine Console-Errors;
* kein horizontaler Overflow;
* keine kaputten Bilder;
* keine überstehenden Elemente;
* keine abgeschnittenen Button- oder Labeltexte;
* Startseite enthält den neuen dunklen Arbeitsweise-Block;
* Platzhalterlabels werden korrekt angezeigt;
* lokale Vorschau wurde nach der Prüfung gestoppt;
* Git-Status war sauber;
* kein Commit erstellt;
* kein cyon-Deployment durchgeführt.

Version 2.4 ist damit intern browsergeprüft, aber noch nicht veröffentlicht.

Die nächste Phase ist **Version 2.5 / interne LDigital-Qualitätsprüfung**. Dabei geht es nicht mehr primär um technische Grundstabilität, sondern um Wirkung, Texte, Verkaufsfähigkeit, Bilder/Mockups, Markenauftritt, Rechtstexte und die spätere Deployment-Entscheidung.

### Arbeitsblock vom 29. Juni 2026 – neue Unterseite `projekte.html`

Die neue Unterseite `projekte.html` wurde geplant und erstellt.

Zweck:

* Projekte, laufende Arbeiten und digitale Konzepte transparent darstellen.
* Den aktuellen Projektstatus klar ausweisen, ohne öffentliche Kundenreferenzen oder fertige Resultate zu behaupten.
* Eine erweiterbare Struktur schaffen, in der spätere echte Kundenprojekte ergänzt werden können.

Erste Inhalte:

* `LDigital Webseite` als eigene Unternehmenswebsite in Pre-Launch-/interner Version.
* `Garage- und Carrosserie-Webseite` als neutrales Kundenprojekt in interner Prüfversion.
* Statuslogik mit wiederverwendbaren Status-Badges eingeführt.

Wichtiger Hinweis:

* Die Garage-/Carrosserie-Karte behauptet keine öffentliche Kundenreferenz und nennt Marco nicht namentlich, solange keine Freigabe besteht.

Neue offene Punkte:

* `projekte.html` im Browser prüfen.
* Navigation auf allen Seiten kontrollieren.
* Mobile Darstellung prüfen.
* Texte menschlich gegenlesen.
* Klären, ab wann Marco namentlich als Referenz genannt werden darf.
* Später echte Live-Referenzen ergänzen.
* Nach Veröffentlichung prüfen, ob die Seite in der Akquise sinnvoll eingesetzt werden kann.

### Korrekturblock vom 29. Juni 2026 – `projekte.html` inhaltlich geschärft

`projekte.html` wurde inhaltlich korrigiert und stärker auf spätere Kundenwirkung ausgerichtet.

Umgesetzt:

* Die eigene LDigital-Webseite wurde von der Projektseite entfernt.
* Der Transparenz-Erklärblock wurde entfernt.
* Das Kundenprojekt Garage-/Carrosserie-Webseite bleibt neutral formuliert und im Status `Interne Prüfversion`.
* Der neue Bereich `Eigene Produkte & Konzepte` wurde ergänzt.
* CarDesk wurde als eigenes Produkt/Konzept mit Status `Konzept / Pilotvorbereitung` ergänzt.
* Es gibt keine Marco-Nennung und keine falschen Referenz-, Live- oder Freigabe-Behauptungen.

Neue offene Punkte:

* `projekte.html` erneut im Browser prüfen.
* Querformat-Karte auf Desktop prüfen.
* Mobile Darstellung prüfen.
* CarDesk-Text gegen bestehende `cardesk.html` abgleichen.
* Später klären, ab wann Garage-/Carrosserie-Projekt namentlich genannt werden darf.
* Später echte Kundenreferenzen ergänzen, sobald Projekte live und freigegeben sind.

### Aktueller Repository-Check vom 26. Juni 2026

Der aktuelle Arbeitsbaum enthält eine statische LDigital-Website mit HTML-Dateien im Repository-Root, einer zentralen CSS-Datei und lokalen Bildassets. Es wurde kein neuer Codebereich begonnen und keine neue Seite gebaut.

Geprüfter Bestand:

* HTML-Seiten im Root: `index.html`, `leistungen.html`, `ueber-uns.html`, `portfolio.html`, `cardesk.html`, `kontakt.html`, `impressum.html`, `datenschutz.html`, `404.html`
* Launch- und Projektdateien: `sitemap.xml`, `robots.txt`, `README.md`, `PLAN.md`
* CSS: `css/styles.css`
* Assets: `Logo/ldigital-logo.png`, `Logo/favicon.png`, `Logo/ldigital-social-preview.png`, drei Leistungsbilder unter `Logo/Leistungen/`
* `js/` existiert als leerer Ordner; es ist aktuell kein JavaScript aktiv eingebunden
* `docs/` wurde nur strukturell als vorhandener Dokumentationsbereich berücksichtigt und inhaltlich nicht weiterbearbeitet

Erledigter Stand:

* Die Website besteht aktuell aus einer mehrseitigen statischen Struktur mit Startseite, Leistungen, Über-mich-Seite, Portfolio, CarDesk-Konzeptseite, Kontakt, Impressum, Datenschutz und 404-Seite.
* Navigation, Footer, Skip-Link, lokale CSS-Einbindung, Favicon und Logo sind auf den aktiven HTML-Seiten vorhanden.
* Die Seiten verwenden lokale Assets und eine zentrale CSS-Datei.
* `sitemap.xml` listet die acht öffentlichen HTML-Seiten ohne 404-Seite.
* `robots.txt` verweist auf die Sitemap und erlaubt das Crawling.
* Eine statische Prüfung der relativen `href`- und `src`-Ziele in den neun HTML-Dateien ergab keine fehlenden lokalen Dateien und keine fehlenden lokalen Anker.
* Es wurden keine aktiven Formulare, externen Skripte, extern geladenen Schriftarten, Iframes oder Tracking-Einbindungen festgestellt.
* `cardesk.html` ist als aktualisierte Konzeptseite innerhalb der LDigital-Website vorhanden; CarDesk wird dort als Pilotprojekt von LDigital in Konzept- und Prototyp-Phase dargestellt.
* Die CarDesk-Seite beschreibt eine digitale Arbeitsübersicht für kleine Garagen, Werkstätten und Carrosserien und stellt klar, dass CarDesk noch keine fertige oder öffentlich buchbare Software ist.
* `datenschutz.html` ist als sachliche Datenschutzerklärung für eine einfache Schweizer KMU-Website vorbereitet.
* Desktop-/Mobile-Prüfung ist als technische QA-Checkliste vorbereitet: `docs/QA_CHECKLIST_V1.md`.
* Interne Links und Navigation wurden anhand `docs/QA_CHECKLIST_V1.md` geprüft; es waren keine HTML-Korrekturen nötig.
* Lighthouse-/Performance-Check ist als technische Prüfliste vorbereitet: `docs/LIGHTHOUSE_CHECKLIST_V1.md`.
* Hosting, WordPress-Ablösung, Backup und Rollback sind als Deployment-Plan vorbereitet: `docs/DEPLOYMENT_PLAN_V1.md`.
* Finale Pre-Launch-Checkliste ist erstellt: `docs/PRE_LAUNCH_CHECKLIST_V1.md`.
* Launch-Entscheidungen für die aktuelle Pre-Launch-Phase sind dokumentiert: `docs/LAUNCH_ENTSCHEIDUNGEN_V1.md`.
* Status: Pre-Launch-Phase, noch nicht final launchbereit.

Noch offen:

* Anbieter- und Zustelladresse: Nutzung als Zustelladresse bestätigt; finale rechtliche und praktische Gesamtprüfung bleibt vor Launch offen.
* Datenschutz und Impressum im rechtlichen und praktischen Gesamtzusammenhang vor Launch final prüfen.
* Logo / Favicon / Social Preview ist aktuell blockiert beziehungsweise verschoben, weil das Logo später manuell gezeichnet und finalisiert wird.
* Menschliche Qualitätsprüfung von Texten, Wirkung, Verkaufslogik und Markenauftritt durchführen.
* Bilder, Mockups und Platzhalter final beurteilen.
* Lighthouse- oder vergleichbare Performance-/Qualitätsprüfung auf Staging oder Zielumgebung durchführen; Vorbereitung liegt in `docs/LIGHTHOUSE_CHECKLIST_V1.md`.
* WordPress-Ablösung, Hosting, Deployment, Backup und Rollback später anhand `docs/DEPLOYMENT_PLAN_V1.md` ausführen; aktuell wurde nichts deployed.
* README bei nächster Gelegenheit auf den aktuellen Version-2.4-Stand bringen, weil sie noch stärker den früheren Version-1-Stand beschreibt.
* CarDesk-Prototyp weiterhin separat im CarDesk-Repository führen.

Bestätigte Anbieter-/Zustelladresse:

* LDigital
* Industriestrasse 1
* 4410 Liestal
* Schweiz

Status:

* Nutzung als Zustelladresse bestätigt.
* Formulierung im Impressum: `Zustelladresse`, nicht `Geschäftssitz`.
* Offener Punkt bleibt die finale rechtliche und praktische Gesamtprüfung vor Launch.
* Datenschutzseite ist mit der bestätigten Zustelladresse vorbereitet.
* Version 2 soll weiterhin ohne Google Analytics veröffentlicht werden.
* Google Search Console ist geplant beziehungsweise erlaubt.
* Analytics und Tracking werden erst später erneut geprüft.
* Logo / Favicon / Social Preview aktuell blockiert beziehungsweise verschoben.
* Grund: Das Logo wird später manuell gezeichnet und finalisiert.
* Vorerst keine weiteren KI- oder Codex-Bildänderungen an Logo, Favicon oder Social Preview.
* Der Block bleibt ein Launch-Blocker, falls die Website mit finaler Marke veröffentlicht werden soll.
* Für eine technische Staging-Prüfung kann die Website trotzdem weiter vorbereitet werden.

Blocker vor Veröffentlichung:

1. Anbieter-/Zustelladresse: Nutzung als Zustelladresse bestätigt; finale rechtliche und praktische Gesamtprüfung vor Launch bleibt offen.
2. Datenschutz und Impressum: finale rechtliche und praktische Gesamtprüfung vor Launch bleibt offen.
3. Logo / Favicon / Social Preview blockiert beziehungsweise verschoben; Launch-Blocker bei Veröffentlichung mit finaler Marke.
4. Menschliche Qualitätsprüfung von Texten, Wirkung, Verkaufslogik, Markenauftritt und Bildern ist noch offen.
5. Lighthouse-Prüfung auf Ziel- oder Staging-Umgebung ist noch offen.
6. Hosting-, Deployment- und WordPress-Ablösung sind vorbereitet, aber noch nicht ausgeführt.

L-BWoods:

* Der Ordner `l-bwoods/` existiert im aktuellen Arbeitsbaum nicht mehr.
* `git ls-files l-bwoods` liefert keine aktuell getrackten `l-bwoods`-Dateien; der aktuelle `git status` zeigt neben dieser Planänderung keine L-BWoods-Änderungen.
* L-BWoods ist jetzt ein eigenes privates Repository und soll im LDigital-Website-Repository nicht weitergeführt, nicht erweitert und nicht inhaltlich bearbeitet werden.
* Falls alte Branches, Backups oder lokale Kopien den früheren Ordner noch enthalten, soll er nicht wieder in dieses Website-Repo übernommen werden.

## Status und Grundlage von Version 1

LDigital Version 1 ist abgeschlossen.

* Version 1 ist eine interne, präsentierbare Arbeitsversion.
* Die Webseite dient als Grundlage und Referenz für weitere LDigital-Arbeiten.
* Version 1 bleibt als dokumentierter Ausgangspunkt erhalten.
* Die nächste aktive Entwicklungsstufe ist Version 2.
* Version 2 wird im Gegensatz zu Version 1 als Veröffentlichungsversion geplant.

## Dokumentation für Garage-Webseiten

Der Dokumentationsblock für künftige Garage-, Carrosserie- und Werkstattprojekte ist abgeschlossen. Folgende Arbeitsgrundlagen stehen zur Verfügung:

* [Interne Garage-Analyse](docs/intern/garage-analyse-intern.md)
* [Garage-Preisstruktur](docs/preise/garage-preisstruktur.md)
* [Pilotpartner-Preisstrategie](docs/preise/pilotpartner-preisstrategie.md)
* [Ausführliches Garage-Kundenbriefing](docs/kunden-briefings/garage-kundenbriefing.md)
* [Kurzbriefing für den Erstkontakt](docs/kunden-briefings/garage-kundenbriefing-kurz.md)
* [Fragebogen für Zusatzwünsche](docs/kunden-briefings/garage-zusatzwuensche.md)
* [Reifenhotel-Pilot](docs/reifenhotel-pilot.md)
* [Reifenhotel-Objektsuche](docs/reifenhotel-objektsuche.md)
* [WheelDepot-Kaufobjekte](docs/wheeldepot-kaufobjekte.md)
* [WheelDepot-Medien-Checkliste](docs/wheeldepot-medien.md)
* [WheelDepot-Recht, Pflichten und offene Prüfungen](docs/wheeldepot-recht-pflichten.md)

Die Preisangaben sind interne Richtwerte beziehungsweise unverbindliche Orientierungswerte. Verbindliche Preise werden erst nach Briefing und klarer Leistungsabgrenzung offeriert. Das Marco-/Familienprojekt mit ungefähr CHF 200 bleibt eine persönliche Lern- und Referenzausnahme und ist kein offizieller Marktpreis.

## Erkenntnisse aus dem Garage-Dokumentationsblock

* Die bestehende LDigital-Webseite kann teilweise als technische und strukturelle Grundlage für Garage-Webseiten dienen.
* Inhalte, Bilder, Logo, Farben, Kontaktwege und rechtliche Angaben müssen pro Kunde individuell ersetzt und geprüft werden.
* Pilotpartnerpreise sollen bewusst günstiger sein als spätere Normalpreise, aber nicht als Billigangebot kommuniziert werden.
* Zusatzleistungen wie zusätzliche Sprachen, Zusatzseiten, Fotografie, Terminbuchung, Google Business, grosse Galerien oder laufende Wartung werden separat offeriert.
* Das Marco-/Familienprojekt mit ungefähr CHF 200 bleibt eine persönliche Ausnahme und ist kein offizieller Marktpreis.
* Für externe Garage-Pilotpartner gelten klare Gegenleistungen, Projektgrenzen und Mindestpreise.

## Offene Feinschliffe aus den Dokumenten

Die folgenden Feinschliffe wurden ursprünglich als offene Aufgaben identifiziert und inzwischen umgesetzt:

* [x] `garage-preisstruktur.md` preislich an die aktuelle Aufbauphase von LDigital anpassen
* [x] `pilotpartner-preisstrategie.md` um Zahlungsbedingungen, Korrekturrunden, Pausierung/Abbruch und Nutzungsrechte ergänzen
* [x] `garage-zusatzwuensche.md` um Datenschutzhinweise, Fotografenkosten, Bildübermittlung, Wartungsbeispiele und Zeitplan ergänzen
* [x] `garage-kundenbriefing.md` als ausführliches Projektbriefing belassen
* [x] kurze Erstkontakt-Version des Kundenbriefings erstellen

Die Dokumente werden beim ersten realen Kundengespräch praktisch getestet. Neue Rückfragen oder Unklarheiten werden danach separat dokumentiert und bei Bedarf ergänzt.

## Abgeschlossen

* HTML- und CSS-Grundgerüst
* Responsive Design
* Startseite
* Leistungen
* CarDesk-Hinweis
* Kontaktbereich auf der Startseite
* Impressum
* Datenschutz
* Logo und Favicon eingebunden
* SEO-Grundlagen
* Typografie und Abstände
* PLAN.md auf den aktuellen Mehrseiten-Stand gebracht
* technische und visuelle Prüfung
* Seitenarchitektur und Navigation finalisiert
* `ueber-uns.html` erstellt
* Inhalte der Über-uns-Seite überarbeitet und geprüft
* `kontakt.html` erstellt
* Inhalte der Kontaktseite überarbeitet und geprüft
* Header-Navigation auf allen sechs Seiten vereinheitlicht
* Footer-Navigation auf allen sechs Seiten vereinheitlicht
* Kontaktadresse auf `info@ldigital.ch` vereinheitlicht
* Startseiten-CTAs auf `kontakt.html` umgestellt
* CarDesk-Bereich auf der Startseite gekürzt und als eigenständiges Zukunftsprojekt eingeordnet
* Startseite für Version 1 inhaltlich abgeschlossen
* Leistungsseite mit Cards und bestehenden Bildern visuell gestärkt
* Über-uns-Seite auf Intro, Gründer, Quinas und CTA reduziert
* Kontaktseite als schlanke E-Mail-Seite umgesetzt
* Abschlusskorrekturen aus dem Gesamtcheck umgesetzt
* README auf den aktuellen Version-1-Stand gebracht
* PLAN.md auf den aktuellen Abschlussstand bereinigt
* LDigital Version 1 als interne, präsentierbare Arbeitsversion abgeschlossen
* Dokumentationsblock für Garage-Webseiten erstellt und verlinkt

## Seitenstruktur für LDigital Version 1

* `index.html` – Startseite
* `leistungen.html` – Leistungsseite
* `ueber-uns.html` – Über LDigital, Gründer und Werte
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

## Aktueller Stand der Startseiten-Cards

Die Startseiten-Cards sind umgesetzt und verlinken auf die passenden Abschnitte der Leistungsseite:

* Webseiten & digitales Auftreten → `leistungen.html#webseiten`
* Google Business & lokale Sichtbarkeit → `leistungen.html#sichtbarkeit`
* Digitale Werkzeuge & Automatisierungen → `leistungen.html#automatisierung`
* Betreuung, Pflege und Weiterentwicklung → `leistungen.html#betreuung`

Die lokalen PNG-Bilder liegen unter `Logo/Leistungen/`. Die Cards sind statisch, vollständig lesbar und benötigen kein JavaScript.

## CarDesk

CarDesk ist ein Pilotprojekt von LDigital für kleine Garagen, Werkstätten und Carrosserien. `cardesk.html` dient innerhalb der LDigital-Website als aktualisierte Konzeptseite und beschreibt Problem, Lösungsansatz, geplante Bausteine, Zielgruppe, Status und Pilotinteresse.

CarDesk befindet sich aktuell in Konzept- und Prototyp-Phase. Es ist kein fertiges Produkt, keine öffentlich buchbare Software und kein abgeschlossenes Kundenprojekt. Die Konzeptseite verspricht keine fertigen Funktionen oder Resultate.

Der statische CarDesk-Prototyp bleibt separat im CarDesk-Repository. Die LDigital-Seite verlinkt vorerst von Startseite und Leistungsseite auf die interne Konzeptseite. Die lokale Browserprüfung der LDigital-Seite inklusive CarDesk-Seite ist abgeschlossen. Nächste Schritte sind menschliche Qualitätsprüfung, spätere Staging-/Lighthouse-Prüfung und erst danach eine separate Deployment-Entscheidung.

## Reifenhotel / Rädereinlagerung

WheelDepot / Reifenhotel ist als modernes lokales Räderlager für Privatkunden und als möglicher langfristiger CarDesk-Baustein geplant. Zielgruppe sind Privatkunden in der Nordwestschweiz, Basel-Landschaft, Basel-Stadt, Aargau und Fricktal. Das Angebot soll Sommer- und Winterräder strukturiert einlagern, zuhause Platz schaffen, den Saisonwechsel vereinfachen, Radsätze sauber dokumentieren, Partnergaragen einbinden und Garagenkunden langfristig mit CarDesk in ein digitales System bringen.

Der Startumfang bleibt bewusst begrenzt: aktuell gibt es 3 potenzielle Kunden und zusätzlich die Möglichkeit, eigene Räder als internen Testfall zu verwalten. Die geplante Start-/Zielkapazität liegt bei bis ca. 250 Radsätzen in der Nordwestschweiz, entsprechend bis ca. 1'000 einzelnen Rädern. Die Kapazität wird abhängig von Nachfrage, Lagerort, Transportaufwand und geklärten Rahmenbedingungen aufgebaut.

Aktueller Angebotsstand für den Saisonwechsel-Pilot:

* CHF 39.- pro Halbjahr
* CHF 75.- pro Jahr
* 1 Radsatz / 4 Räder
* begrenzte Startplätze
* verpackt beziehungsweise sauber vorbereitet
* geplante eindeutige Zuordnung per Etikett oder QR-Code
* Foto-Dokumentation
* Lagerplatz-Zuordnung
* definitive Zusage erst nach Klärung von Lagerort, Kapazität, Versicherung und Nutzung

Es werden keine garantierten Plätze, kein fixer Lagerort, keine bereits geklärte Versicherung und keine unbegrenzte Kapazität versprochen.

Die Lieferung zur Garage ist nicht pauschal für alle Reifenhotel-Kunden inklusive. Direktkunden ohne CarDesk-Bezug erhalten die Einlagerung zum Pilotpreis, aber keine automatisch inkludierte Lieferung zur Garage. Garagen ohne CarDesk-Zugang können Kunden vermitteln, erhalten aber keine automatisch inkludierte CarDesk-Lieferlogik. Lieferung für Direktkunden oder Garagen ohne CarDesk kann später optional gegen Aufpreis oder nach separater Absprache angeboten werden.

Die Lieferung zur Garage soll bewusst als Vorteil für CarDesk- beziehungsweise Partnergaragen positioniert werden. Sie gilt nur nach klar definiertem Gebiet, Lieferfenstern, Vorlaufzeit und mit Sammelfahrten. Sonderfahrten, Expressfahrten oder Fahrten ausserhalb definierter Lieferfenster sind nicht im Basispreis enthalten. Es gibt keine kostenlose Einzellogistik für alle Direktkunden.

Eigener Reifenwechsel ist nicht Bestandteil der Startphase. Annahme, geschützte Vorbereitung beziehungsweise Verpackung, geplante QR-/Etikett-Zuordnung, Foto-Dokumentation und einfache Sichtprüfung sind vorgesehen; Reifenwechsel wird zunächst über Partnergaragen vermittelt. Eine professionelle Reifenprüfung, rechtliche Sicherheit oder versicherungstechnische Absicherung wird ohne vorgängige Prüfung nicht zugesagt.

Strategisch soll der Pilot nicht primär maximale Einlagerungsmarge erzeugen, sondern Garagen an LDigital / CarDesk binden, wiederkehrenden Kundeneingang über Saisonwechsel schaffen und einen konkreten Software- und Logistikbaustein für CarDesk vorbereiten. Die Lieferlogik soll Garagen motivieren, CarDesk zu nutzen, und nicht jeden Direktkunden mit kostenloser Einzellogistik bedienen.

Für Partnergaragen ist ein konservatives Provisionsmodell als Pilotannahme dokumentiert: 5 % für einfache Vermittlung ohne CarDesk-Zugang und 10 % für strukturierte Vermittlung mit CarDesk-Zugang, jeweils nur auf tatsächlich bezahlte Einlagerungen. Die Konditionen müssen später wirtschaftlich, rechtlich und buchhalterisch geprüft werden.

Zusätzlich soll WheelDepot in der Startphase Reifenwechsel nicht selbst anbieten, sondern passende Partnergaragen vermitteln. Wenn ein Kunde keinen Reifenwechsel organisiert hat, kann WheelDepot beziehungsweise später CarDesk eine Partnergarage vorschlagen, die freie Kapazität hat und den Auftrag selbst annimmt oder ablehnt. Der Reifenwechsel wird durch die Partnergarage erbracht; der Werkvertrag für den Reifenwechsel entsteht grundsätzlich zwischen Kunde und Partnergarage. WheelDepot übernimmt in diesem Modell Vermittlung, Koordination und gegebenenfalls Logistik, aber keine eigene Reifenwechsel-Leistung.

Für vermittelte Reifenwechsel-Aufträge ist als Pilotannahme eine Vermittlungsgebühr von 7 % vorgesehen. Diese gilt nur auf erfolgreich abgeschlossene und bezahlte Reifenwechsel-Aufträge, nicht auf reine Anfragen, abgesagte Termine oder nicht bezahlte Aufträge. Reifenlager-Vermittlung an WheelDepot und Reifenwechsel-Vermittlung an Partnergaragen bleiben getrennte Modelle und sollen später getrennt abgerechnet werden. Die 7-%-Logik muss wirtschaftlich, rechtlich und buchhalterisch geprüft werden; es werden keine garantierten Einnahmen versprochen.

Ein eigener Reifenwechsel durch WheelDepot ist aktuell nicht Teil der Startphase. Er bleibt eine spätere Ausbauoption, weil er höhere Haftung, Werkleistung, Arbeitssicherheit, Werkzeug-/Hebemittel-Anforderungen, Versicherungsfragen, Qualitätskontrolle, mögliche Fahrzeugschäden und klare Prozesse auslöst. Vor einem eigenen Reifenwechsel wären mindestens geeignete Räume beziehungsweise Werkstattnutzung, sichere Hebemittel, Drehmomentdokumentation, SOPs, geschultes Personal, Haftpflichtdeckung, Unfall-/Arbeitssicherheit, Entsorgung, Kundendokumentation, Zustandsprotokoll und Nachkontrolle zu klären.

Die detaillierte Planungsgrundlage steht in [`docs/reifenhotel-pilot.md`](docs/reifenhotel-pilot.md). Eine spätere Verbindung zu CarDesk ist möglich, wird aber erst nach praktischer Pilot-Erfahrung bewertet. Aktuell wird keine Software-Funktionalität gebaut.

`wheeldepot.html` existiert als moderne Voranmelde-/Landingpage innerhalb der LDigital-Website. Die Seite positioniert WheelDepot mit dem Hero `Räder einlagern, Platz zurückholen.`, sichtbarem Pilotpreis, klarem Nutzen für Privatkunden und CTA zur Vormerkung über `kontakt.html#kontakt-direkt`. Die CarDesk-Verknüpfung führt zu `cardesk.html#wheeldepot-partner`; dieser Abschnitt existiert auf der CarDesk-Seite und ordnet WheelDepot als möglichen CarDesk-Vorteil für Garagen ein.

Die WheelDepot-Unterseite ist stärker visuell und medienorientiert aufgebaut. Aktuell sind keine echten WheelDepot-Fotos eingebunden; die Medienbereiche nutzen bewusst HTML-/CSS-Platzhalter, damit keine kaputten Bildpfade oder fremde Medien entstehen. Die lokale Browserprüfung inklusive mobiler Darstellung und CTA-Zielen wurde durchgeführt.

Die Medienstrategie ist in [`docs/wheeldepot-medien.md`](docs/wheeldepot-medien.md) dokumentiert. Echte eigene Fotos und kurze Videos sollen später gezielt erstellt werden; KI-Bilder und fremde Bilder ohne Nutzungsrechte sind nicht vorgesehen. Geplante Motive sind 4 Räder / 1 Radsatz sauber vorbereitet, verpackter Radsatz mit geplanter QR-/Etikett-Zuordnung, QR-/Etikett-Detail auf der Verpackung, Lagerplatz mit verpackten Radsätzen, Übergabe oder Transport und Lieferung zur Garage im CarDesk-/Partnergaragen-Modell. Alte Motive wie Vorher-/Nachher-Kellerbilder oder einfache Beschriftung direkt am Reifen werden nicht mehr als Priorität geführt.

Für den Pilot soll ein geeignetes Lager-/Gewerbeobjekt gesucht werden. Die Such- und Bewertungsübersicht steht in [`docs/reifenhotel-objektsuche.md`](docs/reifenhotel-objektsuche.md). Die Objektsuche wurde für Lager-/Gewerbeflächen durchgeführt und preis-/wirtschaftlich ergänzt. Operativ wird ein Mietobjekt oder eine flexible Lagerlösung priorisiert. Interessant sind grob 80-150 m², ideal rund 100 m², trocken, abschliessbar, gut zugänglich, mit Zufahrt für Auto/Transporter und schriftlich erlaubter Nutzung als Räder-/Reifenlager. Offene Prüfungen bleiben Nutzungsbewilligung, Trockenheit, Zufahrt, Brandschutz, Versicherung, Kaution, Mindestlaufzeit, Nebenkosten sowie Regale und Lagerstruktur.

Ein Kaufobjekt bleibt als langfristiges strategisches Ziel in der Planung, ist aber keine Voraussetzung für den WheelDepot-Start. Der Start soll kurzfristig über ein Mietobjekt, eine flexible Lagerlösung oder eine andere schlanke Lösung möglich bleiben. Kaufobjekte werden weiter beobachtet, um Marktverständnis für Gewerbe- und Lagerflächen aufzubauen.

Die Kaufobjekt-Recherche steht in [`docs/wheeldepot-kaufobjekte.md`](docs/wheeldepot-kaufobjekte.md). Kaufobjekte dienen aktuell der langfristigen Marktbeobachtung und als mögliches erstes Immobilienziel ab 2027, nicht als kurzfristige Kaufentscheidung. Die Kaufstrategie wird frühestens im Frühling 2027, alternativ im Herbst 2027, neu bewertet. Ein Kauf wird nur geprüft, wenn Eigenkapital, Bankfinanzierung, Nachfrage, Alternativnutzung und laufende Kosten realistisch sind. Externe Investoren sind aktuell nicht als aktive Startoption vorgesehen; WheelDepot, CarDesk und LDigital sollen möglichst unter eigener Kontrolle bleiben und später bevorzugt aus eigenem aufgebautem Kapital beziehungsweise sauberer Bankfinanzierung wachsen.

Rechtliche Grundlagen, Pflichten und offene Prüfungen sind als interne Recherchegrundlage in [`docs/wheeldepot-recht-pflichten.md`](docs/wheeldepot-recht-pflichten.md) dokumentiert. Diese Datei ist keine Rechtsberatung. Vor einem operativen Start müssen insbesondere Lagerobjekt-Nutzung, Vermieterfreigabe, Gemeinde/Bauamt, Brandschutz/Feuerpolizei, Versicherung, Vertragsunterlagen, Datenschutz, Partnerverträge und die Abgrenzung zur Reifenwechsel-Vermittlung mit zuständigen Stellen beziehungsweise Fachpersonen geprüft werden.

## LDigital Webseite – Version 2

### Ziel von Version 2

Version 2 entwickelt die bestehende Version 1 zu einer professionellen, veröffentlichungsreifen Unternehmenswebsite weiter.

Die Website soll:

* Vertrauen schaffen;
* die Marke LDigital stärken;
* als überzeugende Referenz in Kundengesprächen dienen;
* zeigen, dass LDigital seriös, strukturiert und pragmatisch arbeitet;
* besonders für KMU, Garagen, Dienstleister und lokale Unternehmen in der Schweiz glaubwürdig wirken;
* nach der Veröffentlichung die aktive Ansprache von Garagen und anderen Betrieben unterstützen.

**Leitsatz: Nicht einfach mehr Funktionen, sondern mehr Überzeugungskraft.**

### Website-Struktur und Inhalte

Version 2 soll folgende Bereiche enthalten oder so vorbereiten, dass sie später ohne grundlegenden Umbau ergänzt werden können:

* professionellere Startseite;
* stärkere Hero-Section;
* klare Positionierung von LDigital;
* bessere und verständlichere Leistungsdarstellung;
* Über-mich-Seite;
* Portfolio- und Referenzbereich;
* sichtbarer Projektablauf und verständliche Arbeitsweise;
* FAQ-Bereich;
* Kontaktbereich mit stärkerem Call-to-Action;
* vorbereitete Landingpage-Struktur für einzelne Leistungen;
* stärkere Vertrauenselemente;
* bessere Bildsprache, Mockups und visuelle Elemente.

Die überzeugende Hauptwebsite hat Vorrang. Nicht alle vorbereiteten Landingpages müssen bereits in Version 2 vollständig umgesetzt werden.

### Über-mich-Seite und fünf Grundsätze

Die Über-mich-Seite ist ein zentraler Bestandteil von Version 2. Sie soll nicht nur persönliche Angaben wiedergeben, sondern nachvollziehbar erklären:

* wer hinter LDigital steht;
* warum LDigital existiert;
* welche Haltung die Arbeit prägt;
* weshalb Schweizer KMU von pragmatischen digitalen Lösungen profitieren;
* weshalb persönliche Betreuung wichtig ist.

Die bestehenden **As Cinco Quinas – fünf Grundsätze** werden als Marken- und Arbeitsprinzipien übernommen:

1. **Clareza – Klarheit**
2. **Confiança – Vertrauen**
3. **Estrutura – Struktur**
4. **Eficiência – Effizienz**
5. **Evolução – Weiterentwicklung**

Die Begriffe sind bereits vorhanden. Ihre Texte, Reihenfolge und visuelle Darstellung dürfen für Version 2 weiter geschärft werden, ohne künstlich neue Prinzipien zu erfinden.

### Logo und Marke

Für Version 2 sind folgende Markenarbeiten einzuplanen:

* Logo finalisieren oder überarbeiten;
* Proportionen, Lesbarkeit und Darstellung prüfen;
* Schweizer Kreuz und historische portugiesische Quinas als Markenelemente sauber berücksichtigen;
* konsistente Verwendung des Logos auf der Website sicherstellen;
* Favicon prüfen;
* Social-Media-Profilbild vorbereiten;
* OpenGraph-Bild vorbereiten;
* einheitliche Darstellung für Website, GitHub, Social Media, Dokumente und E-Mail-Signatur planen.

Codex kann Platzhalter, Dateipfade, technische Einbindungen und Verwendungsregeln vorbereiten. Die professionelle Feinbearbeitung des Logos und der finalen Assets bleibt eine eigenständige Designaufgabe.

### Geschichte des Logos

Die Logo-Geschichte soll kurz und glaubwürdig auf der Über-mich-Seite oder in einer kompakten Markenbox erklärt werden:

* Verbindung von Schweiz, Portugal und Digitalisierung;
* Schweizer Kreuz und portugiesische Quinas als Herkunfts- und Wertebezug;
* kurze, verständliche Darstellung ohne überlange Geschichtsseite.

Eine ausführlichere Unterseite zur Logo-Geschichte wird für Version 3 vorgemerkt.

### Vertrauen und Seriosität

Version 2 soll Vertrauen durch konkrete und nachvollziehbare Inhalte aufbauen:

* FAQ;
* sichtbarer Projektablauf;
* klare Kontaktmöglichkeit;
* transparente Arbeitsweise;
* keine versteckten Kosten;
* individuelle Offerte nach dem Erstgespräch;
* glaubwürdige Referenz- und Portfolio-Struktur;
* klare Beschreibung der Zielgruppen;
* seriöser, ruhiger Ton ohne Übertreibungen oder Billigwirkung.

### Leistungen

Die Leistungen werden klarer gegliedert und priorisiert. Mögliche Bereiche:

* Webseiten und digitale Sichtbarkeit;
* Google Business und lokale Sichtbarkeit;
* einfache Automatisierungen;
* digitale Werkzeuge;
* Website-Wartung;
* Markenauftritt, Logo und einfache Gestaltung;
* Beratung für kleine Unternehmen.

Die finale Leistungsstruktur wird vor der inhaltlichen Umsetzung festgelegt. Version 2 bereitet Navigation und Landingpage-Struktur vor, ohne jede mögliche Leistung sofort als vollständige Einzelseite umzusetzen.

### Portfolio und Referenzen

Der Portfolio-Bereich wird auch bei zunächst wenigen Projekten strukturell vorbereitet. Jedes veröffentlichte Projekt soll nach Möglichkeit enthalten:

* Ausgangslage;
* Ziel;
* Lösung;
* Ergebnis;
* verwendete Leistungen.

Mögliche erste Einträge:

* die LDigital-Website als eigenes Referenzprojekt;
* Marco / Garage Rotterdam nach Wiederaufnahme und tatsächlichem Abschluss;
* weitere zukünftige Kundenprojekte.

Es werden keine falschen Referenzen, Ergebnisse, Bewertungen oder Testimonials erfunden. Platzhalter müssen klar als geplant oder vorbereitet gekennzeichnet sein.

### Design-System und Style Guide

Version 2 soll ein einfaches, wiederverwendbares Design-System vorbereiten:

* Farben;
* Schriftgrössen und typografische Hierarchie;
* Buttons;
* Karten;
* Abstände;
* Icons;
* Schatten;
* Rundungen;
* Bildstil;
* Call-to-Action-Stil;
* wiederverwendbare Komponenten.

Ziel ist ein konsistenter LDigital-Auftritt und eine schnellere Grundlage für neue Seiten und spätere Kundenprojekte.

### SEO, Technik und Qualität

Version 2 soll technisch sauber und veröffentlichungsbereit sein:

* Meta-Titles und Meta-Descriptions prüfen;
* OpenGraph-Daten vorbereiten;
* semantische HTML-Struktur verbessern;
* Navigation klar und konsistent halten;
* Mobile-Darstellung optimieren;
* Performance optimieren;
* Bildgrössen und Ladezeiten prüfen;
* Accessibility-Grundlagen umsetzen;
* Lighthouse-Ziele definieren;
* Datei- und Ordnerstruktur sauber halten;
* keine unnötigen oder leeren Dateien einbinden;
* Hosting, Domain, Impressum und Datenschutz vor Veröffentlichung prüfen.

Als Zielwerte für den finalen Lighthouse-Test gelten auf den zentralen Seiten mindestens 90 Punkte in Performance, Accessibility, Best Practices und SEO, soweit dies mit dem gewählten Hosting und den finalen Assets realistisch erreichbar ist.

### Preisstrategie

Auf der Website werden vorerst keine festen Preise veröffentlicht.

Begründung:

* Projekte und Anforderungen sind individuell.
* Feste Einstiegspreise können falsche Erwartungen erzeugen.
* Aussagen wie „Ab CHF 490“ ziehen möglicherweise vor allem Interessenten an, die nur den tiefsten Preis suchen.
* LDigital soll nicht wie ein Billiganbieter wirken.
* Der Preis wird passend zum tatsächlichen Projektumfang kalkuliert.

Kommunikation auf der Website:

* kostenloses Erstgespräch;
* individuelles Angebot;
* transparente Kalkulation;
* keine versteckten Kosten.

Intern wird später eine Kalkulations- und Preisliste erstellt beziehungsweise aus den bestehenden Preisgrundlagen weiterentwickelt. Diese interne Grundlage ist nicht automatisch für die Veröffentlichung bestimmt.

## Version 2.1 – Sichtbarkeit, Vertrieb und Drumherum

Version 2.1 betrifft primär den Marktauftritt nach der Veröffentlichung, nicht den grundlegenden Umbau der Website.

**Ziel:** Nach Version 2.1 ist LDigital bereit, Garagen und andere lokale Unternehmen aktiv anzusprechen und seriöse Angebote abzugeben.

Geplante Inhalte:

* Google-Business-Profil erstellen oder optimieren;
* LinkedIn-Unternehmensseite erstellen oder optimieren;
* Instagram prüfen, erstellen oder vorbereiten;
* Facebook prüfen, sofern es für die Zielgruppe sinnvoll ist;
* Social-Media-Profilbilder und Banner vorbereiten;
* E-Mail-Signatur erstellen;
* Angebotsvorlage erstellen;
* Rechnungsvorlage prüfen;
* einfache Präsentations- oder Pitch-Unterlage vorbereiten;
* Flyer oder Visitenkarte vorbereiten;
* erste Social-Media-Beiträge planen;
* Google Search Console einrichten;
* Google Analytics oder andere Trackinglösungen gemeinsam mit dem Datenschutz erneut prüfen;
* lokale Branchenverzeichnisse prüfen;
* Akquise-Liste für Garagen und lokale Betriebe vorbereiten;
* Gesprächsleitfaden für den Erstkontakt vorbereiten;
* einfache Angebotsstruktur für Garagen vorbereiten.

Version 2.1 ist der Schritt von **„Website ist veröffentlicht“** zu **„LDigital kann aktiv verkaufen.“**

## Nicht Teil von Version 2 – für Version 3 vormerken

Version 2 darf nicht durch zusätzliche Ideen überladen oder verzögert werden. Folgende Themen werden bewusst für Version 3 oder eine spätere Ausbauphase vorgemerkt:

* Mehrsprachigkeit Deutsch, Portugiesisch und Englisch;
* Blog oder Wissensbereich;
* Kundenportal;
* Online-Terminbuchung;
* interaktive Tools;
* KI-Assistent;
* grosse Fallstudien;
* Videos;
* Newsletter;
* Downloadbereich;
* komplexe Animationen;
* ausführliche Logo-Geschichtsseite;
* vollständige Plattform-Funktionen;
* umfassendes CRM;
* automatisierte Kundenprozesse.

## Zuständigkeiten: Was Codex übernehmen kann und was nicht

### Codex kann übernehmen

* `PLAN.md` strukturieren und aktuell halten;
* HTML-Struktur und bestehende Seiten technisch verbessern;
* CSS überarbeiten;
* neue statische Seiten anlegen;
* Navigation erweitern;
* Meta-Daten und OpenGraph-Tags vorbereiten;
* leere oder unnötige Einbindungen entfernen;
* Bildpfade und Platzhalter vorbereiten;
* einfache wiederverwendbare Komponenten erstellen;
* FAQ-Bereich technisch einbauen;
* Über-mich-Seite als HTML-Struktur vorbereiten;
* Portfolio- und Landingpage-Strukturen vorbereiten;
* Mobile-Darstellung, Performance und Accessibility-Grundlagen verbessern;
* `README.md` bei einem späteren, ausdrücklich beauftragten Arbeitsschritt aktualisieren;
* saubere Git-Änderungen vorbereiten.

### Codex kann nicht oder nur begrenzt übernehmen

* finale Logo-Gestaltung als professionelle Designarbeit;
* professionelle Bildbearbeitung;
* finale Auswahl echter Bilder ohne bereitgestellte Assets;
* Google Business oder Social-Media-Profile ohne Zugriff tatsächlich einrichten;
* reale Einträge in Branchenverzeichnissen vornehmen;
* echte Kunden kontaktieren;
* Preise strategisch endgültig festlegen;
* rechtliche Prüfung von Datenschutz und Impressum ersetzen;
* Hosting- oder Support-Probleme mit Cyon selbst lösen;
* persönliche Haltung und Geschichte ohne Bestätigung final festlegen;
* Kundenreferenzen, Bewertungen oder Testimonials erfinden.

### Codex kann vorbereiten, der Nutzer entscheidet final

* Texte der Über-mich-Seite;
* Formulierungen und Darstellung der fünf Grundsätze;
* Logo-Geschichte;
* Positionierung;
* Preislogik;
* Angebotsstruktur;
* Zielgruppen;
* Reihenfolge der Version-2-Arbeitsblöcke;
* Veröffentlichung;
* Akquise-Start.

## Definition of Done für Version 2

Version 2 gilt als fertig, wenn:

* die Website lokal fehlerfrei läuft;
* die Startseite professionell und überzeugend wirkt;
* die Über-mich-Seite vorhanden und inhaltlich bestätigt ist;
* die fünf Grundsätze integriert sind;
* das Logo konsistent eingebunden ist;
* Projektablauf und Arbeitsweise sichtbar sind;
* ein FAQ vorhanden ist;
* der Kontaktbereich einen klaren Call-to-Action enthält;
* keine festen Preise veröffentlicht werden;
* SEO- und OpenGraph-Grundlagen gesetzt sind;
* die Mobile-Darstellung auf gängigen Breiten funktioniert;
* Performance und Accessibility die definierten Qualitätsziele erfüllen oder begründete Abweichungen dokumentiert sind;
* Impressum und Datenschutz vorhanden und vor Veröffentlichung geprüft sind;
* die Portfolio-Struktur vorbereitet ist;
* alle internen Links und verwendeten Assets funktionieren;
* der Git-Status vor Veröffentlichung sauber ist;
* Domain, Hosting und Veröffentlichung vorbereitet oder abgeschlossen sind.

## Definition of Done für Version 2.1

Version 2.1 gilt als fertig, wenn:

* LDigital online auffindbar ist;
* Google Business vorbereitet oder eingerichtet ist;
* die relevanten Social-Media-Grundprofile vorbereitet sind;
* eine E-Mail-Signatur vorhanden ist;
* eine Angebotsvorlage vorhanden ist;
* einfache Akquise-Unterlagen vorhanden sind;
* eine erste Zielkundenliste erstellt ist;
* ein Gesprächsleitfaden für Garagen vorhanden ist;
* LDigital bereit ist, erste Kunden aktiv anzusprechen.

## Risiken und Abhängigkeiten

* Marco / Garage Rotterdam bleibt von Zugriff, Material und Support abhängig.
* Version 2 darf nicht zu gross werden.
* Logo / Favicon / Social Preview sind bewusst verschoben und werden später manuell finalisiert; die technische Staging-Vorbereitung darf trotzdem weiterlaufen.
* Die fünf Grundsätze müssen klar und glaubwürdig formuliert bleiben.
* Die Preisstrategie muss flexibel bleiben.
* Rechtliche Texte müssen vor Veröffentlichung sauber geprüft werden.
* Hosting, Domain und öffentliche Geschäftsangaben müssen rechtzeitig geklärt werden.
* Social Media und Google Business gehören zu Version 2.1 und dürfen die Kernumsetzung von Version 2 nicht verzögern.
* Version-3-Ideen dürfen Version 2 nicht aufhalten.
* Fehlende Bilder oder finale Design-Assets dürfen durch klar gekennzeichnete Übergangslösungen aufgefangen werden, nicht durch erfundene Inhalte.

## Nächste konkrete To-dos

### Nächste fünf sinnvolle Aufgaben nach Version 2.4

1. Interne LDigital-Qualitätsprüfung durchführen: Texte, Wirkung, Verkaufslogik und Markenauftritt prüfen.
2. Bilder, Mockups, Platzhalter, Logo, Favicon und Social Preview bewusst beurteilen.
3. Datenschutz und Impressum im rechtlichen und praktischen Gesamtzusammenhang final prüfen.
4. Lighthouse-/Performance-Check auf Staging oder Zielumgebung anhand `docs/LIGHTHOUSE_CHECKLIST_V1.md` ausführen.
5. Danach entscheiden, ob Version 2.5 als Feinschliff-Version nötig ist oder ob die Deployment-Vorbereitung starten kann.

### Sofortige Planung

- [x] Garage-/Marco-Projekt als pausiert markieren
- [x] Version 2, Version 2.1 und Version 3 im Plan trennen
- [x] Codex-Aufgaben und Grenzen ergänzen
- [x] Definition of Done für Version 2 ergänzen
- [x] Definition of Done für Version 2.1 ergänzen
- [x] Reihenfolge der ersten Version-2-Arbeitsblöcke festlegen

### Reifenhotel-Pilot bis Saisonwechsel

Abgeschlossen beziehungsweise dokumentiert:

- [x] WheelDepot-Konzept als modernes Räderlager / Reifenhotel dokumentiert
- [x] WheelDepot-Unterseite `wheeldepot.html` erstellt
- [x] WheelDepot-Landingpage visuell stärker ausgerichtet
- [x] CarDesk-Verknüpfung über `cardesk.html#wheeldepot-partner` ergänzt
- [x] Lieferlogik korrigiert: Lieferung nicht automatisch für alle Direktkunden enthalten
- [x] Partnergaragen-Modell mit 5 % / 10 % als Pilotannahme dokumentiert
- [x] Mietobjekt-Recherche in `docs/reifenhotel-objektsuche.md` durchgeführt
- [x] Kaufobjekt-Recherche in `docs/wheeldepot-kaufobjekte.md` erstellt
- [x] Kaufstrategie auf Frühling/Herbst 2027 verschoben
- [x] Medienstrategie / Medien-Checkliste in `docs/wheeldepot-medien.md` erstellt
- [x] lokale Browserprüfung der WheelDepot-Seite durchgeführt
- [x] Reifenwechsel-Vermittlungsmodell mit 7 % Pilotannahme ergänzt
- [x] rechtliche Grundlagen / Pflichten als interne Recherchedatei dokumentiert

Nächste konkrete To-dos:

- [ ] WheelDepot-Seite vom Nutzer final visuell prüfen
- [ ] aktuelle Website-Änderungen bei Zufriedenheit committen und pushen
- [ ] PLAN-/Doku-Änderungen separat committen und pushen
- [ ] echte Medien planen und später erstellen: Radsatz, Verpackung, QR-/Etikett, Lagerplatz, Transport/Übergabe, Garage-Lieferung
- [ ] Mietobjekt-Favoriten weiter prüfen
- [ ] Versicherung / Haftung mit Versicherungsberater klären
- [ ] Nutzungsfreigabe / Brandschutz vor Mietvertrag prüfen
- [ ] Lager- und QR-/Etikett-Prozess konkretisieren
- [ ] einfache Kundentabelle / Radsatzverwaltung vorbereiten
- [ ] Einlagerungsschein / Annahmeformular vorbereiten
- [ ] Partnervertrag für Garagen vorbereiten
- [ ] Reifenwechsel-Vermittlungsmodell mit 7 % prüfen
- [ ] Liefergebiet und Lieferfenster definieren
- [ ] Garagenansprache vorbereiten
- [ ] WheelDepot-Voranmeldetext / Social-Media-Text vorbereiten
- [ ] Kaufobjekte nur langfristig beobachten und 2027 neu bewerten
- [ ] eigenen Reifenwechsel erst später separat prüfen

### Inhaltliche To-dos für Version 2

- [x] Seitenstruktur für Version 2 definieren
- [ ] Über-mich-Seite planen und Texte bestätigen
- [x] Texte der fünf Grundsätze weiter schärfen
- [ ] Logo / Favicon / Social Preview später manuell finalisieren; vorerst keine KI- oder Codex-Bildänderungen
- [x] kurze Logo-Geschichte für Version 2 formulieren
- [x] Leistungsbereiche für Version 2 priorisieren
- [x] Portfolio-Struktur und internes Referenzprojekt vorbereiten
- [x] FAQ-Fragen sammeln und sachlich beantworten
- [x] Projektablauf formulieren
- [x] Call-to-Actions definieren
- [x] technisches Design-System als Grundlage skizzieren

### Technische To-dos für die spätere Umsetzung mit Codex

- [x] HTML-Struktur prüfen
- [x] CSS-Struktur prüfen und Version-2-Grundlage erstellen
- [x] Mobile-Darstellung bei 390 px prüfen
- [x] Meta-Daten prüfen
- [x] OpenGraph-Basistags mit seitenspezifischen URLs vorbereiten
- [x] Bildpfade und vorhandene Assets prüfen
- [x] Lighthouse-/Performance-Checkliste vorbereitet (`docs/LIGHTHOUSE_CHECKLIST_V1.md`)
- [ ] Performance und Lighthouse-Werte später auf Staging oder Zielumgebung prüfen
- [x] Accessibility-Grundlagen prüfen und verbessern
- [x] Navigation für Über mich und Portfolio vorbereiten
- [x] QA-Checkliste für Desktop-/Mobile-, Link-, Recht-/Launch- und Performance-Prüfung erstellt (`docs/QA_CHECKLIST_V1.md`)
- [x] Interne Links und Navigation anhand der QA-Checkliste geprüft; keine Korrekturen nötig
- [x] CarDesk-Konzeptseite für Version 2 vorbereiten und als Pilotprojekt in Konzept- und Prototyp-Phase schärfen
- [x] Tracking- und externe Dienste statisch prüfen
- [x] Pre-Launch-Entscheidungen zu Anbieter, Kontakt, Rechtstexten und Veröffentlichung dokumentieren
- [x] Deployment- und Rollback-Plan vorbereitet (`docs/DEPLOYMENT_PLAN_V1.md`)
- [x] Finale Pre-Launch-Checkliste erstellt (`docs/PRE_LAUNCH_CHECKLIST_V1.md`)
- [x] Launch-Entscheidungen für aktuelle Pre-Launch-Phase dokumentiert (`docs/LAUNCH_ENTSCHEIDUNGEN_V1.md`)
- [x] Lokale Browserprüfung für Version 2.4 abgeschlossen
- [x] 11 HTML-Seiten auf Desktop `1280x900`, Mobile `390x844` und Narrow Mobile `320x720` geprüft
- [x] Keine Console-Errors, kein horizontaler Overflow, keine kaputten Bilder und keine überstehenden Elemente festgestellt
- [ ] Interne LDigital-Qualitätsprüfung von Texten, Wirkung, Verkaufslogik und Markenauftritt durchführen
- [ ] Verbliebene Launch-Blocker einzeln abarbeiten
- [ ] Hosting-, Domain- und rechtliche Launchvoraussetzungen vor Live-Schaltung prüfen

### To-dos für Version 2.1 nach Veröffentlichung

- [ ] Google Business vorbereiten
- [ ] LinkedIn-Unternehmensseite vorbereiten
- [ ] Instagram und Facebook prüfen
- [ ] E-Mail-Signatur erstellen
- [ ] Angebotsvorlage erstellen
- [ ] Akquise-Liste für Garagen erstellen
- [ ] Gesprächsleitfaden vorbereiten
- [ ] erste Social-Media-Beiträge planen
- [ ] einfache Werbemittel vorbereiten

## Aktueller Arbeitsstand Version 2

### Arbeitsblock 1 – technische Grundlage

* Start: 25. Juni 2026, 17:30 Uhr
* Fokus: technische Grundlage für Version 2
* Status: technisch umgesetzt und geprüft

Vorprüfung:

* Die Version-1-Struktur bestand aus sechs HTML-Seiten, einer gemeinsamen CSS-Datei und lokalen Bilddateien.
* Es war kein JavaScript eingebunden.
* Sprache, UTF-8 und die lokalen Datei- und Bildpfade waren grundsätzlich funktionsfähig.
* Die gemeinsame Navigation und das Design-System benötigten eine Version-2-Grundlage.
* OpenGraph-Metadaten waren noch nicht vorhanden.

Umgesetzt:

* einheitliche Seitenhülle mit Skip-Link, Container, Hauptnavigation, Fussnavigation und aktiver Seitenauszeichnung;
* Hauptnavigation auf Startseite, Leistungen, Über mich, Portfolio und Kontakt erweitert;
* bestehende URL `ueber-uns.html` erhalten und sichtbar als Über-mich-Seite weiterentwickelt;
* neue Seite `portfolio.html` mit transparent gekennzeichnetem internem Referenzprojekt erstellt;
* Marco / Garage Rotterdam nur als pausiertes und nicht abgeschlossenes Projekt eingeordnet;
* FAQ auf der Startseite ohne JavaScript mit nativen HTML-Elementen ergänzt;
* CSS-Grundsystem auf Königsblau `#0A2A66` und Gold `#D6A94D` ausgerichtet;
* wiederverwendbare Grundlagen für Buttons, Cards, Grids, Sections, CTA, Status und FAQ erstellt;
* Fokuszustände, Skip-Link, reduzierte Bewegungen und mobile Umbrüche ergänzt;
* Meta-Titles und Meta-Descriptions geprüft und angepasst;
* OpenGraph-Basistags mit individueller URL pro Seite ergänzt;
* vorhandenes Social-Preview-Bild geprüft und über eine absolute OpenGraph-URL eingebunden;
* vorhandene Bilddateien nicht verändert;
* keine JavaScript-, Tracking- oder externen Plattformfunktionen ergänzt;
* keine festen Preise, erfundenen Referenzen oder Testimonials veröffentlicht.

Prüfung:

* alle sieben HTML-Seiten lokal auf Desktop und mit 390 px Breite geladen;
* keine horizontalen Überläufe, fehlenden Bilder oder Browser-Konsolenfehler festgestellt;
* genau eine Hauptüberschrift und fünf Hauptnavigationspunkte pro Seite geprüft;
* FAQ-Funktion, aktive Navigation und lokale Links geprüft;
* alle `og:url`-Werte und das vorhandene OpenGraph-Bild geprüft;
* Version 2.1 und Version 3 nicht umgesetzt.

### Arbeitsblock 2 – Inhalte, Marke und Veröffentlichungsqualität

* Start: 25. Juni 2026
* Fokus: Inhalte, Marke und Veröffentlichungsqualität
* Status: umgesetzt und technisch geprüft; menschliche Textabnahme bleibt offen

Umgesetzt:

* Hero und Positionierung auf Webseiten, lokale Sichtbarkeit und praktische digitale Lösungen für Schweizer KMU ausgerichtet;
* Startseiten-CTAs auf kostenloses Erstgespräch und Leistungsübersicht vereinheitlicht;
* drei Hauptleistungen festgelegt: Webseiten und digitales Auftreten, Google Business und lokale Sichtbarkeit sowie digitale Werkzeuge und Automatisierungen;
* Betreuung, Pflege und Weiterentwicklung als unterstützenden Bereich ergänzt;
* Markenauftritt als ergänzende Leistung erhalten, aber nicht als Hauptpositionierung geführt;
* vierstufigen Projektablauf mit Erstgespräch, Klärung und Offerte, Umsetzung und Abstimmung sowie Prüfung und Weiterentwicklung ergänzt;
* Vertrauenselemente zu persönlicher Betreuung, verständlicher Kommunikation, individueller Offerte und fehlenden versteckten Kosten ergänzt;
* bestehenden CarDesk-Pilotpartner-Aufruf auf der Startseite unverändert erhalten;
* FAQ auf sieben kurze, sachliche Fragen und Antworten erweitert;
* Leistungsseite mit fünf Ankern für Haupt- und Zusatzleistungen strukturiert;
* die drei Hauptleistungen auf Desktop kompakter als Bild-Text-Bereiche und mobil weiterhin gestapelt dargestellt;
* Über-mich-Seite persönlicher formuliert und kaufmännischen Hintergrund, Schweizer Tätigkeit, portugiesische Herkunft und Motivation verbunden;
* Clareza, Confiança, Estrutura, Eficiência und Evolução als konkrete Arbeitsprinzipien ausgearbeitet;
* Logo-Geschichte zu Schweiz, Portugal und Digitalisierung kurz geschärft;
* Portfolio als transparente Projektübersicht weiterentwickelt und den Status von LDigital Version 2 präzisiert;
* Marco / Garage Rotterdam weiterhin klar als pausiert und nicht als Referenz gekennzeichnet;
* Kontaktseite auf kostenloses Erstgespräch, transparente Klärung und individuelle Offerte ausgerichtet;
* Footer aller sieben Seiten auf die aktuelle Kernpositionierung vereinheitlicht;
* Meta-Titles und Meta-Descriptions der fünf Marketingseiten aktualisiert;
* OpenGraph-Titel und -Beschreibungen angepasst, seitenspezifische `og:url`-Werte unverändert erhalten;
* vorhandene Bilddateien ohne Bearbeitung weiterverwendet;
* keine neue Hauptseite, kein JavaScript und keine festen Preise ergänzt.

Prüfung:

* alle sieben Seiten lokal auf Desktop mit 1280 px und mobil mit 390 px geprüft;
* keine horizontalen Überläufe, fehlenden Bilder oder Browser-Konsolenfehler festgestellt;
* Navigation, aktive Seitenauszeichnung, Leistungsanker, FAQ und Mailto-Links geprüft;
* lokale Datei- und Bildpfade, UTF-8, Überschriftenstruktur und OpenGraph-URLs geprüft;
* keine erfundenen Referenzen, Testimonials oder Leistungsversprechen ergänzt;
* Version 2.1 und Version 3 weiterhin nicht umgesetzt;
* keine Bild-, README- oder Dokumentationsdateien verändert;
* kein Commit für Arbeitsblock 2 erstellt.

### Arbeitsblock 3 – Abschluss vor Veröffentlichung

**Datum:** 25. Juni 2026

**Fokus:** finale technische und inhaltliche Qualitätsprüfung sowie Freigabeentscheid

**Status:** Prüfung abgeschlossen – **technisch vorbereitet, noch nicht zur Veröffentlichung freigegeben**

#### Prüfungsumfang und bestandene Kontrollen

* Ausgangsstand vor Arbeitsblock 3: sauberer Git-Status, `main` mit `origin/main` synchron;
* alle sieben HTML-Seiten statisch und lokal bei 1280 Pixel sowie 390 Pixel geprüft;
* pro Seite genau eine Hauptüberschrift, `lang="de"`, UTF-8 und nachvollziehbare Überschriftenhierarchie bestätigt;
* Seitentitel, Meta-Descriptions, OpenGraph-Daten und je Seite genau eine korrekte `og:url` geprüft;
* Skip-Link und Hauptinhaltsziel, Navigation, aktive Seitenauszeichnung sowie einheitliche Fussnavigation geprüft;
* interne Links, alle fünf Leistungsanker, Mailto-Links und lokale Bildpfade geprüft;
* FAQ-Funktion, Fokusdarstellung, mobile Navigation und gestapelte Leistungsblöcke geprüft;
* keine horizontalen Überläufe, fehlenden Bilder oder Browser-Konsolenfehler festgestellt;
* keine JavaScript-Dateien, externen Schriftarten, Tracking-Dienste oder externen Medien eingebunden;
* keine festen Website-Preise, Testimonials, Garantien, erfundenen Referenzen oder als umgesetzt dargestellten Funktionen aus Version 2.1 und Version 3 gefunden;
* LDigital Version 2 bleibt im Portfolio korrekt als eigenes Projekt in Entwicklung bezeichnet;
* Marco / Garage Rotterdam bleibt pausiert und ausdrücklich nicht als Referenz dargestellt;
* keine objektiv notwendige Text-, HTML- oder CSS-Kleinkorrektur festgestellt oder ausgeführt;
* keine Veröffentlichung, Migration oder Änderung an externen Plattformen durchgeführt.

#### Assets und Performance

Die vorhandenen Bilddateien wurden nicht verändert. Ihre aktuellen Grössen sind vor einer Veröffentlichung bewusst zu beurteilen:

* Favicon: rund 284 KB;
* Logo: rund 307 KB;
* Social Preview: rund 1,7 MB;
* Leistungsbilder: rund 222 bis 295 KB je Bild.

Lighthouse ist in der lokalen Arbeitsumgebung nicht verfügbar. Die statisch prüfbaren Performance-Faktoren wurden kontrolliert; der eigentliche Lighthouse-Test bleibt für Staging oder die spätere Zielumgebung offen.

#### Freigabeentscheid

* **Technische Seitenstruktur:** voraussichtlich freigabefähig;
* **tatsächliche Veröffentlichung:** blockiert;
* **verbindlicher Gesamtstatus:** technisch vorbereitet, noch nicht zur Veröffentlichung freigegeben.

Die erreichbare Website unter `https://ldigital.ch/` enthält weiterhin das ältere WordPress-Angebot. Dessen Anbieter-, Kontakt-, Hosting- und Datenschutzangaben unterscheiden sich teilweise von den lokalen Dateien und werden nicht automatisch übernommen. Die lokale statische Website wurde nicht deployed.

#### Abschliessende Pre-Launch-To-dos und Blocker

1. Die festgelegten Anbieterangaben `LDigital`, Rafael Lomar und Einzelunternehmen ohne Handelsregistereintrag mit der bestätigten Zustelladresse abstimmen; finale rechtliche und praktische Gesamtprüfung bleibt vor Veröffentlichung offen.
2. Hosting-Anbieter, Zielumgebung und tatsächliche Datenbearbeitung festlegen.
3. Impressum und Datenschutz mit einer seriösen Schweizer Vorlage oder einem Generator auf den realen Veröffentlichungsstand bringen und anschliessend extern rechtlich prüfen lassen.
4. Ablösung der bestehenden WordPress-Seite einschliesslich Backup, Testversion, Deployment und Rückweg planen und separat umsetzen.
5. Texte, Logo und Markenauftritt menschlich final prüfen und freigeben.
6. Aktuelle Asset-Grössen optimieren oder bewusst für die Veröffentlichung akzeptieren.
7. Lighthouse-Test auf Staging oder der späteren Zielumgebung durchführen und Ergebnisse beurteilen.

#### Grenzen und Abschluss von Arbeitsblock 3

* Rechtstexte wurden nicht inhaltlich umgeschrieben;
* Anbieter-, Adress- und Hosting-Angaben wurden nicht eigenmächtig ersetzt;
* Bilder, README und weitere Dokumentationsdateien blieben unverändert;
* ausschließlich dieser Freigabebericht in `PLAN.md` wurde ergänzt;
* kein Commit wurde erstellt.

### Arbeitsblock 4 – CarDesk und Pre-Launch-Entscheidungen

**Datum:** 25. Juni 2026

**Fokus:** CarDesk als vorsichtige Konzeptseite vorbereiten und offene Pre-Launch-Entscheidungen verbindlich dokumentieren

**Status:** umgesetzt und technisch geprüft; Veröffentlichung weiterhin blockiert

#### CarDesk-Konzeptseite

* `cardesk.html` als eigene Konzeptseite innerhalb der LDigital-Website vorbereitet;
* CarDesk als Pilotprojekt von LDigital für kleine Garagen, Werkstätten und Carrosserien eingeordnet;
* Problem, Lösungsansatz, geplante Bausteine, Zielbetriebe und Status in Konzept- und Prototyp-Phase sachlich beschrieben;
* deutlich festgehalten, dass CarDesk keine fertige oder öffentlich buchbare Software und kein abgeschlossenes Kundenprojekt ist;
* keine Preise, erfundenen Pilotkunden, Resultate, Testimonials, Garantien oder fertigen Funktionen ergänzt;
* Hauptnavigation unverändert gelassen;
* CarDesk von der Startseite und der Leistungsseite sichtbar verlinkt;
* bestehende Footer unverändert und ohne zusätzlichen CarDesk-Hauptlink belassen;
* seitenspezifische Meta- und OpenGraph-Daten mit `https://ldigital.ch/cardesk.html` ergänzt;
* vorhandenes Social-Preview-Bild eingebunden, da die lokale Datei existiert.

#### Datenschutz und Tracking

Aktuelle Entscheidung:

* Version 2 wird ohne Google Analytics und ohne andere Analyse- oder Trackingtools veröffentlicht.
* Google Search Console gehört zu Version 2.1 und wird nicht in Arbeitsblock 4 eingerichtet.
* Google Analytics oder andere Trackinglösungen werden frühestens in Version 2.1 gemeinsam mit den tatsächlichen Datenschutzanforderungen erneut beurteilt.

Statische Projektsuche:

* keine aktive Laufzeitintegration für Google Analytics, Google Tag Manager, Meta Pixel, Hotjar oder andere Trackingdienste gefunden;
* keine extern geladenen Google Fonts, Videos, Karten, Kalender, Iframes oder externen Skripte gefunden;
* kein Kontaktformular und kein externes Formularziel gefunden;
* `datenschutz.html` nennt Google Analytics inzwischen ausdrücklich im verneinenden Hinweis, weil Version 2 ohne Google Analytics veröffentlicht werden soll; daraus ergibt sich keine technische Integration;
* `PLAN.md` nennt Analytics, Facebook und Google Search Console ausschließlich als dokumentierte Entscheidung oder spätere Aufgabe für Version 2.1;
* Garage-Dokumentationen enthalten Facebook und YouTube nur als mögliche Briefing- beziehungsweise Checklistenpunkte, nicht als aktive Website-Einbindungen.

Es wurden keine externen Dienste entfernt und keine neuen Trackingwerkzeuge eingebaut.

#### Rechtstexte – Option B

Für Impressum und Datenschutz gilt Option B:

* eine seriöse Schweizer Vorlage oder einen geeigneten Generator verwenden;
* den Entwurf an den tatsächlichen Anbieter, das Hosting und die wirklich verwendeten Dienste anpassen;
* keine rechtliche Eigenfreigabe durch Codex;
* finale externe rechtliche Prüfung bleibt vor der Veröffentlichung erforderlich.

Die in Arbeitsblock 4 festgestellte Bezeichnung `Lomar Digital` wurde in Arbeitsblock 6 auf den aktiven Rechtsseiten bereinigt. Die Nutzung der Adresse `Industriestrasse 1, 4410 Liestal, Schweiz` als Zustelladresse ist inzwischen bestätigt. Die finale rechtliche und praktische Gesamtprüfung sowie der tatsächliche Hosting-Anbieter bleiben vor Veröffentlichung offen.

#### Anbieter- und Kontaktentscheidungen

* Anbietername: LDigital;
* verantwortliche Person: Rafael Lomar;
* Rechtsform-Formulierung: Einzelunternehmen ohne Handelsregistereintrag;
* Standortkommunikation: Liestal, Schweiz;
* die Privatadresse wird vor der Veröffentlichung noch nicht öffentlich final freigegeben;
* vorerst keine öffentliche Telefonnummer;
* WhatsApp und ein Kontaktformular werden erst später geprüft;
* aktueller Kontaktweg bleibt E-Mail über `info@ldigital.ch`;
* Rafael Lomar bleibt auf der Website sichtbar;
* der Schweiz-/Portugal-Bezug bleibt Bestandteil der Marke.

In Arbeitsblock 4 werden keine Privatadresse, Telefonnummer oder Kontaktformular ergänzt.

#### Veröffentlichung und bestehende WordPress-Seite

Nach aktuellem Projektstand läuft unter `ldigital.ch` weiterhin die ältere WordPress-Seite. Die statische Version soll sie später ersetzen, aber erst nach einem eigenen gründlichen Veröffentlichungscheck.

* **Staging:** eine nicht öffentliche oder getrennte Testversion der neuen Website;
* **Backup:** eine Sicherung der bisherigen WordPress-Seite und ihrer benötigten Daten;
* **Deployment:** die eigentliche Veröffentlichung der neuen statischen Website;
* **Rollback:** der vorbereitete Rückweg zur bisherigen Version, falls bei der Veröffentlichung ein Problem auftritt.

Staging, Backup, Deployment und Rollback gehören zu einem separaten späteren Auftrag. Der sichere Ablauf ist inzwischen in `docs/DEPLOYMENT_PLAN_V1.md` vorbereitet. Es wurde keine Testumgebung eingerichtet, kein WordPress ersetzt und nichts veröffentlicht.

#### Logo und weitere Assets

* Logo / Favicon / Social Preview ist aktuell blockiert beziehungsweise verschoben;
* Grund: Das Logo wird später manuell gezeichnet und finalisiert;
* vorerst keine weiteren KI- oder Codex-Bildänderungen an Logo, Favicon oder Social Preview;
* der Block bleibt ein Launch-Blocker, falls die Website mit finaler Marke veröffentlicht werden soll;
* für eine technische Staging-Prüfung kann die Website trotzdem weiter vorbereitet werden;
* in Arbeitsblock 4 werden keine Bilddateien verändert.

#### Offene Punkte vor der Veröffentlichung

1. Anbieter-/Zustelladresse bestätigt; finale rechtliche und praktische Gesamtprüfung vor Launch bleibt offen.
2. Hosting, Zielumgebung und tatsächliche Datenbearbeitung festlegen.
3. Rechtstexte nach Option B vorbereiten, an reale Dienste anpassen und extern prüfen lassen.
4. WordPress-Ablösung mit Staging, Backup, Deployment und Rollback anhand `docs/DEPLOYMENT_PLAN_V1.md` später ausführen.
5. Texte und Marke menschlich final freigeben; Logo / Favicon / Social Preview später manuell finalisieren.
6. Bildgrössen optimieren oder ihren aktuellen Umfang bewusst akzeptieren.
7. Lighthouse-Test auf der späteren Test- oder Zielumgebung durchführen.

#### Abschlussprüfung von Arbeitsblock 4

* alle acht HTML-Seiten statisch auf Sprache, UTF-8, Hauptüberschrift, Meta-Daten, OpenGraph-Daten und lokale Ressourcen geprüft;
* alle acht `og:url`-Werte als korrekt und seitenspezifisch bestätigt;
* alle lokalen Datei-, Bild- und Ankerziele als vorhanden bestätigt;
* Startseiten- und Leistungsseiten-Link zur CarDesk-Konzeptseite funktional geprüft;
* CarDesk-CTA zur Kontaktseite funktional geprüft;
* alle acht Seiten lokal bei 1280 Pixel und 390 Pixel geprüft;
* keine horizontalen Überläufe, fehlenden Bilder oder Browser-Konsolenfehler festgestellt;
* Hauptnavigation mit fünf Punkten und bestehende Fussnavigation mit sieben Punkten unverändert bestätigt;
* keine aktiven Trackingdienste, externen Skripte, Iframes oder Formulare gefunden oder ergänzt;
* keine festen Preise, erfundenen Kundenreferenzen, Testimonials, Garantien oder falschen Produktversprechen ergänzt;
* keine CSS-Erweiterung erforderlich;
* Bilder, Rechtsseiten, README und weitere Dokumentationsdateien unverändert gelassen;
* kein Deployment und kein Commit erstellt.

### Arbeitsblock 5 – technische Launch-Vorbereitung

**Datum:** 25. Juni 2026

**Fokus:** SEO- und Veröffentlichungsdateien sowie eindeutige Canonical-URLs vorbereiten

**Status:** umgesetzt und technisch geprüft; Veröffentlichung weiterhin blockiert

#### Launch-Dateien

* `sitemap.xml` mit den acht bestätigten öffentlichen Seiten der statischen Website erstellt;
* ausschließlich absolute URLs unter `https://ldigital.ch/` aufgenommen;
* keine WordPress-URLs, Fehlerseite oder nicht existierenden Seiten aufgenommen;
* bewusst keine erfundenen Änderungsdaten, Prioritäten oder Änderungsfrequenzen ergänzt;
* `robots.txt` im Projektstamm erstellt;
* allgemeines Crawling mit `User-agent: *` und `Allow: /` zugelassen;
* Sitemap über `https://ldigital.ch/sitemap.xml` referenziert;
* `404.html` mit bestehender Seitenhülle sowie Links zur Start- und Kontaktseite erstellt;
* Fehlerseite mit `noindex` gekennzeichnet und ohne Canonical oder `og:url` belassen;
* festgehalten, dass die tatsächliche Auslieferung mit HTTP-Status 404 erst in der späteren Hosting- und Deployment-Konfiguration geprüft werden kann.

#### Canonical- und Linkprüfung

* alle acht öffentlichen HTML-Seiten mit genau einem absoluten, selbstreferenzierenden Canonical-Link ergänzt;
* Canonical-URLs an die bestehenden seitenspezifischen `og:url`-Werte angeglichen;
* Startseite einheitlich über `https://ldigital.ch/` kanonisiert;
* Hauptnavigation, Footer, CTAs, CarDesk-Verlinkungen, Leistungsanker, Mailto-Links sowie Impressum und Datenschutz werden in der Abschlussprüfung erneut kontrolliert;
* keine neue Navigation und keine inhaltlichen Marketingbereiche ergänzt.

#### Weiterhin offene Launch-Blocker

1. Anbieter-/Zustelladresse bestätigt (`Industriestrasse 1, 4410 Liestal, Schweiz`); finale rechtliche und praktische Gesamtprüfung vor Launch bleibt offen.
2. Rechtstexte mit einer seriösen Schweizer Vorlage oder einem Generator vorbereiten, an reale Dienste anpassen und extern prüfen lassen.
3. Logo / Favicon / Social Preview später manuell finalisieren; bis dahin keine KI- oder Codex-Bildänderungen.
4. Lighthouse-Test auf der späteren Test- oder Zielumgebung durchführen.
5. WordPress-Ablösung, Hosting und Deployment einschließlich Backup und Rollback sind in `docs/DEPLOYMENT_PLAN_V1.md` vorbereitet; Ausführung bleibt offen.
6. Menschlichen Gesamtcheck von Texten, Marke, Rechtstexten und Veröffentlichung durchführen.

Arbeitsblock 5 umfasst kein Deployment, keine WordPress- oder Hosting-Änderung, keine Trackingintegration und keine Bild- oder Asset-Arbeiten.

#### Abschlussprüfung von Arbeitsblock 5

* XML-Struktur der Sitemap erfolgreich validiert;
* exakt acht eindeutige öffentliche URLs und keine Fehlerseite in der Sitemap bestätigt;
* keine erfundenen Änderungsdaten, Prioritäten oder Änderungsfrequenzen gefunden;
* Robots-Datei mit drei vorgesehenen Direktiven und ohne unnötige Sperren bestätigt;
* alle neun HTML-Seiten auf Sprache, UTF-8, genau eine Hauptüberschrift, Skip-Link und Hauptinhaltsziel geprüft;
* auf allen acht öffentlichen Seiten genau einen korrekten Canonical und den unveränderten passenden `og:url` bestätigt;
* auf `404.html` keinen Canonical, keinen `og:url` und genau eine `noindex`-Anweisung bestätigt;
* alle lokalen Datei-, Bild- und Ankerziele geprüft;
* Hauptnavigation, Footer, CTAs, CarDesk-Links, Leistungsanker, Mailto-Links sowie Rechtsseitenverweise geprüft;
* Links der Fehlerseite zur Start- und Kontaktseite funktional geprüft;
* alle neun Seiten lokal bei 1280 Pixel und 390 Pixel geprüft;
* keine horizontalen Überläufe, fehlenden Bilder oder Browser-Konsolenfehler festgestellt;
* keine aktiven Trackingtools, externen Skripte, Iframes oder Formulare gefunden oder ergänzt;
* keine festen Preise, erfundenen Referenzen oder Testimonials ergänzt;
* Bilder, Logo, Favicon, Social Preview, CSS, README und Dokumentationsdateien unverändert gelassen;
* keine WordPress-, Hosting- oder externe Plattformänderung und kein Deployment durchgeführt;
* kein Commit erstellt.

### Arbeitsblock 6 – Impressum, Datenschutz und Anbieterlogik

**Datum:** 25. Juni 2026

**Fokus:** aktive Rechtstexte auf die festgelegte Anbieterlogik und den tatsächlichen technischen Stand vorbereiten

**Status:** umgesetzt und statisch geprüft; erneute visuelle Browserprüfung in diesem Arbeitsblock technisch blockiert

#### Impressum

* Anbietername auf `LDigital` vereinheitlicht;
* Rafael Lomar als Inhaber und verantwortliche Person beibehalten;
* Rechtsform als `Einzelunternehmen ohne Handelsregistereintrag` präzisiert;
* Standortkommunikation `Liestal, Schweiz` ergänzt;
* E-Mail `info@ldigital.ch` als einzigen aktuellen Kontaktweg beibehalten;
* `Geschäftsadresse: auf Anfrage` und die Abhängigkeit von einer späteren separaten Geschäftsadresse entfernt;
* stattdessen deutlich festgehalten, dass Anbieter- und Zustellangaben vor Veröffentlichung final abgeglichen werden müssen;
* Haftungs- und Urheberrechtsabschnitte inhaltlich beibehalten und auf `LDigital` vereinheitlicht;
* keine Privatadresse, Telefonnummer oder WhatsApp-Angabe ergänzt.

#### Datenschutz

* verantwortliche Stelle auf `LDigital`, Rafael Lomar, Einzelunternehmen ohne Handelsregistereintrag und Liestal, Schweiz vereinheitlicht;
* Anbieter- und Zustellangaben weiterhin ausdrücklich als vor Veröffentlichung zu ergänzen markiert;
* veraltete Aussagen zur internen Version 1 entfernt;
* Server-Logfiles und Hosting allgemein beschrieben, ohne einen Hosting-Anbieter zu erfinden;
* E-Mail-Kontakt als einzigen aktuellen Kontaktweg beibehalten;
* kein Kontaktformular als tatsächlichen technischen Stand festgehalten;
* Analyse- und Trackingdienste allgemein als nicht verwendet beschrieben;
* nicht eingesetzte Trackingwerkzeuge im aktiven Rechtstext nicht als verwendet beschrieben;
* keine eigenen Analyse- oder Marketing-Cookies als aktuellen Stand festgehalten;
* keine extern geladenen Schriftarten, Karten, Videos, Kalender oder Social-Media-Inhalte als aktuellen Stand dokumentiert;
* Option B ausdrücklich beibehalten: seriöse Schweizer Vorlage oder geeigneten Generator verwenden, an reale Dienste anpassen und extern prüfen lassen.

Diese Überarbeitung ist eine technische und inhaltslogische Vorbereitung. Sie ist keine Rechtsberatung und keine rechtliche Freigabe.

#### Anbieter- und Kontaktentscheidungen

* Anbieter: LDigital;
* verantwortliche Person: Rafael Lomar;
* Rechtsform: Einzelunternehmen ohne Handelsregistereintrag;
* Standortkommunikation: Liestal, Schweiz;
* bestätigte Anbieter-/Zustelladresse: Industriestrasse 1, 4410 Liestal, Schweiz;
* Nutzung als Zustelladresse bestätigt;
* Formulierung im Impressum: `Zustelladresse`, nicht `Geschäftssitz`;
* finale rechtliche und praktische Gesamtprüfung vor Launch bleibt offen;
* keine öffentliche Telefonnummer;
* WhatsApp wird später geprüft;
* ein Kontaktformular wird später geprüft;
* aktueller Kontaktweg bleibt E-Mail über `info@ldigital.ch`;
* Datenschutzseite ist sachlich vorbereitet;
* Version 2 bleibt ohne Google Analytics und ohne andere Trackingtools;
* Google Search Console gehört zu Version 2.1 und ist geplant beziehungsweise erlaubt;
* Analytics und Tracking werden frühestens später gemeinsam mit dem Datenschutz erneut geprüft;
* finale rechtliche und praktische Gesamtprüfung vor Launch bleibt offen.

#### Projektweite Anbieter- und Drittanbieterprüfung

* keine aktiven Trackingtools oder Analytics-Skripte gefunden;
* keine externen Skripte, extern geladenen Fonts, Iframes, Karten, Videos, Kalender oder Formulare gefunden;
* frühere Toolnamen in `datenschutz.html` waren reine verneinende Texttreffer und wurden durch generische Aussagen zum tatsächlichen technischen Stand ersetzt;
* Facebook- und YouTube-Treffer in Garage-Dokumentationen sind interne Briefing- beziehungsweise Checklistenpunkte und bleiben unverändert;
* ältere Angaben in README und historischem Arbeitsverlauf bleiben als Projekthistorie unverändert;
* `Telefon` und `WhatsApp` in `cardesk.html` beschreiben Kommunikationskanäle im Garagenalltag und keine Kontaktangebote von LDigital;
* keine GmbH, AG, Handelsregistereintragung, Telefonnummer oder Privatadresse auf den aktiven Webseiten ergänzt.

#### Weiterhin offene Launch-Blocker

1. Datenschutzseite vorbereitet; finale rechtliche sowie praktische Gesamtprüfung vor Launch offen halten.
2. Impressum und Datenschutz im Gesamtzusammenhang prüfen.
3. Google Search Console für Version 2.1 vorbereiten; Analytics später erneut prüfen.
4. Logo / Favicon / Social Preview später manuell finalisieren; bis dahin keine KI- oder Codex-Bildänderungen.
5. Lighthouse-Test auf der späteren Test- oder Zielumgebung durchführen.
6. WordPress-Ablösung, Hosting und Deployment einschließlich Backup und Rollback sind in `docs/DEPLOYMENT_PLAN_V1.md` vorbereitet; Ausführung bleibt offen.
7. Menschlichen Gesamtcheck von Texten, Marke, Rechtstexten und Veröffentlichung durchführen.

Arbeitsblock 6 umfasst keine rechtliche Eigenfreigabe, keine neuen externen Dienste, keine Trackingintegration, keine Veröffentlichung und keine Änderung an WordPress oder Hosting.

#### Abschlussprüfung von Arbeitsblock 6

* beide Rechtsseiten auf UTF-8, `lang="de"`, genau eine Hauptüberschrift, Skip-Link und Hauptinhaltsziel geprüft;
* Meta-Daten, Canonical-Links und bestehende OpenGraph-URLs unverändert als korrekt bestätigt;
* Navigation, Footer, Mailto-Link sowie alle lokalen Datei- und Bildpfade statisch geprüft;
* keine aktiven Vorkommen von `Lomar Digital`, `Geschäftsadresse: auf Anfrage` oder veralteten Version-1-Hostingaussagen in den Rechtsseiten gefunden;
* keine Analytics-, Pixel-, Font-, Karten-, Video- oder Kalenderprodukte als aktiv verwendet beschrieben;
* keine GmbH-/AG-Angabe, Telefonnummer, WhatsApp-Angabe oder Privatadresse in Impressum und Datenschutz gefunden oder ergänzt;
* projektweit keine aktiven Trackingtools, externen Skripte, extern geladenen Fonts, Iframes oder Formulare gefunden;
* reine Texttreffer in `PLAN.md`, README, Garage-Dokumentationen und historischem Arbeitsverlauf eingeordnet und bewusst nicht blind geändert;
* `Telefon` und `WhatsApp` in `cardesk.html` weiterhin nur als sachliche Beschreibung verteilter Kommunikationskanäle bestätigt;
* CSS, Bilder, Logo, Favicon, Social Preview, README, Dokumentationen und übrige HTML-Seiten unverändert gelassen;
* kein Deployment und kein Commit erstellt.

Die vorgesehene erneute visuelle Prüfung bei 1280 Pixel und 390 Pixel konnte in diesem Arbeitsblock nicht ausgeführt werden, weil die lokale Browserverbindung durch die aktuelle Browserumgebung ausdrücklich blockiert wurde. Es wurde keine alternative Browsertechnik zur Umgehung eingesetzt. Die gemeinsame CSS-Datei und die Seitenhülle wurden nicht verändert; beide Rechtsseiten hatten dieselben Darstellungen in Arbeitsblock 5 erfolgreich bestanden. Eine erneute visuelle Kontrolle bleibt dennoch vor Veröffentlichung erforderlich.

### Arbeitsblock 7 – lokale Browserprüfung und interner technischer Abschluss

**Datum:** 28. Juni 2026

**Fokus:** echte lokale Browserprüfung der aktuellen LDigital-Version nach Abschluss der statischen Prüfungen

**Status:** abgeschlossen – intern technisch/browsergeprüft, nicht veröffentlicht

#### Prüfungsumfang

Geprüft wurden:

* 11 HTML-Seiten;
* Desktop `1280x900`;
* Mobile `390x844`;
* Narrow Mobile `320x720`;
* insgesamt 33 Prüfungen.

#### Ergebnis

* keine Console-Errors;
* kein horizontaler Overflow;
* keine kaputten Bilder;
* keine überstehenden Elemente;
* keine abgeschnittenen Button- oder Labeltexte;
* Startseite enthält den neuen dunklen Arbeitsweise-Block;
* Platzhalterlabels werden korrekt angezeigt;
* lokale Vorschau wurde nach der Prüfung gestoppt.

#### Abgrenzung

* kein cyon-Deployment durchgeführt;
* keine WordPress- oder Hosting-Änderung vorgenommen;
* kein Commit erstellt;
* Git-Status war sauber.

#### Bedeutung

Die technische lokale Browserprüfung ist abgeschlossen. Version 2.4 gilt damit als intern browsergeprüfter Zwischenstand.

Die nächste Phase ist **Version 2.5 / interne LDigital-Qualitätsprüfung**. Dabei werden Wirkung, Texte, Verkaufsfähigkeit, Bild-/Mockup-Qualität, Markenauftritt, Logo/Favicon/Social Preview, Rechtstexte und Deployment-Entscheidung geprüft.

### Arbeitsblock 8 – CarDesk-Unterseite als Produkt-Showcase

**Status:** abgeschlossen und gepusht

Die CarDesk-Unterseite wurde innerhalb der LDigital-Webseite als eigenständiger Produkt-Showcase umgesetzt.

Geänderte Dateien:

* `cardesk.html`
* `css/styles.css`

Umsetzung:

* CarDesk-Unterseite nutzt ab Hauptinhalt eine eigene Anthrazit/Rot/Weiss-Produktoptik.
* LDigital bleibt global blau/gold.
* Header, Navigation und Footer bleiben LDigital-konform.
* Design ist über `.cardesk-page` und zugehörige CarDesk-Klassen gekapselt.
* CarDesk wird weiterhin klar als Konzept-/Pilotprojekt dargestellt, nicht als fertiges Serienprodukt.
* Kein finales CarDesk-Logo-Asset eingebaut; stattdessen Text-Wordmark verwendet.
* Keine Scripts, kein Tracking, keine externen Abhängigkeiten.
* Kein cyon-Deployment durchgeführt.

Browserprüfung:

* `cardesk.html` Desktop `1440x1000`: sauber.
* Tablet `834x1112`: sauber.
* Mobile `390x844`: sauber.
* Kein horizontaler Overflow.
* Keine Console-Errors.
* Keine defekten Bilder.
* Buttons, Karten, CarDesk-Wordmark und CTA lesbar.
* Kontrollseite `index.html` bleibt blau/gold.

Offene Folgepunkte:

* Finales CarDesk-Logo später separat erstellen.
* CarDesk-Bild/Mockup später final prüfen.
* Inhalte bei echter Pilotpartner-Phase mit Marco oder einer realen Garage schärfen.
* Kein Deployment erfolgt.

## Verbindliche Roadmap

1. Marco / Garage Rotterdam pausiert lassen, bis Zugriff, Material und technische Grundlage geklärt sind.
2. LDigital Version 2.4 als intern browsergeprüften Zwischenstand festhalten.
3. Version 2.5 / interne LDigital-Qualitätsprüfung durchführen.
4. Nach der Qualitätsprüfung entscheiden, ob Feinschliff, Staging/Lighthouse oder Deployment-Vorbereitung folgt.
5. LDigital erst nach separater Freigabe und vorbereitetem Deployment veröffentlichen.
6. Version 2.1 für Sichtbarkeit, Vertriebsgrundlagen und Akquise nach Veröffentlichung umsetzen.
7. Marco / Garage Rotterdam wieder aufnehmen, sobald die Abhängigkeiten gelöst sind.
8. Version 3 später als grössere Ausbauphase planen.

## Historischer Arbeitsverlauf – ruhend

Der folgende Verlauf bleibt als Projekthistorie erhalten. Er wird nicht weitergeführt und nicht für die aktuelle Projektsteuerung verwendet. Frühere Prioritäten werden durch den aktuellen Status und die verbindliche Roadmap am Anfang dieses Dokuments ersetzt.

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

* Arbeitsblock 1: 18:00 bis 19:10 Uhr
* Pause 1: 19:00 bis 19:10 Uhr
* Arbeitsblock 2: 19:10 bis 20:20 Uhr
* Pause 2: keine; Arbeitstag endete nach Arbeitsblock 2
* Erledigt:
  * Arbeitsblock 1: manueller Gesamtcheck der Startseite
  * Arbeitsblock 2: Bereinigung und Aktualisierung von `PLAN.md` auf den aktuellen Version-1-Stand
* Aktueller Stand:
  * Startseite wirkt noch zu überladen mit CTAs
  * CarDesk-Hinweis auf der Startseite wirkt wie eine interne Notiz und soll als professioneller Pilotpartner-Aufruf neu eingeordnet werden
  * Hero-Text soll stärker auf Schweizer Unternehmen ausgerichtet werden
  * Nutzen-Texte in den Cards sollen professioneller formuliert werden
  * `PLAN.md` wurde auf den aktuellen Version-1-Stand bereinigt
  * die aktuelle aktive Runde bleibt `Version-1 Text- und Verkaufslogik schärfen`
  * CarDesk bleibt als separates Projekt und Pilotpartner-Aufruf dokumentiert
  * Logo/Favicon bleiben blockiert
  * Version-2-Themen sind klar von Version 1 getrennt
* Nächster Schritt:
  * Leistungsseite visuell stärken
  * Kontaktseite final entschärfen
  * Über-uns-Seite kürzen und vertrauensbildender formulieren

### 22. Juni 2026

* Arbeitsblock 1: abgeschlossen um 21:20 Uhr
* Pause: 21:20 bis 21:30 Uhr
* Arbeitsblock 2: 21:30 bis 22:30 Uhr
* Danach: Arbeitsende / Schlafpause
* Kein weiterer Arbeitsblock am heutigen Abend geplant
* Tätigkeit Arbeitsblock 1: Weiterarbeit an der Runde `Version-1 Text- und Verkaufslogik schärfen`
* Tätigkeit Arbeitsblock 2: Fortsetzung der Version-1-Bereinigung und Vorbereitung der nächsten offenen Aufgaben
* Erledigt:
  * der gestern geplante Prompt wurde umgesetzt
  * `PLAN.md` wurde auf den aktuellen Version-1-Stand bereinigt
  * Startseite sprachlich und verkaufslogisch geschärft
  * CarDesk-Text auf der Startseite als kurzer Pilotpartner-Aufruf präzisiert
  * Einstieg und finaler CTA der Leistungsseite geschärft
  * Abschnitt `Webseiten und digitales Auftreten` auf der Leistungsseite geschärft
  * Abschnitt `Logodesign und Markenauftritt` auf der Leistungsseite geschärft
  * Abschnitt `Prozessoptimierung und Automatisierung` auf der Leistungsseite geschärft
  * Kontaktseite für Version 1 vereinfacht
  * Kontakt-Cards entfernt
  * Kontaktaufnahme bleibt über `info@ldigital.ch`
  * Formular-Option geprüft und auf später verschoben
  * Kontaktseite final entschärft
  * Anfrage-Angaben weicher formuliert
  * Angaben zur ersten Anfrage als hilfreich, aber nicht zwingend eingeordnet
  * Anfrage-Liste entfernt
  * Abschnitt `Erste Anfrage` eingeführt
  * Kontaktbereich sprachlich nachgeschärft
  * erster Arbeitsblock um 21:20 Uhr abgeschlossen
  * strategische Entscheidung getroffen: Version 1 wird vorerst nicht auf `ldigital.ch` veröffentlicht
  * Version 1 bleibt als interne Arbeitsversion, präsentierbare Grundlage und Vorbereitung für das Marco-Projekt bestehen
  * Marco-Projekt als nächster strategischer Schritt nach Version 1 eingeordnet
  * Veröffentlichung von `ldigital.ch` wird erst nach dem Marco-Projekt beziehungsweise in Version 2 erneut geprüft
  * Leistungsseite mit Cards und bestehenden Bildern visuell gestärkt
  * bestehende Bilder auf der Leistungsseite eingebunden
  * Gestaltung der Leistungsseite an die Startseite angeglichen
  * keine neuen Leistungen ergänzt
  * Arbeitsblock 2 um 22:30 Uhr abgeschlossen
  * Arbeitsende / Schlafpause dokumentiert
  * `PLAN.md` entsprechend aktualisiert
* Aktueller Stand:
  * Startseite ist für Version 1 inhaltlich abgeschlossen
  * Startseite wird nur noch im finalen Gesamtcheck geprüft
  * Leistungsseite wurde textlich und visuell geschärft
  * Cards und bestehende Bilder sind auf der Leistungsseite eingebaut
  * Kontaktseite wurde vereinfacht und die Kontakt-Cards wurden entfernt
  * Kontaktseite bleibt ohne Formular in Version 1
  * die Angaben für eine erste Anfrage sind nicht mehr als Liste dargestellt und wirken weniger fordernd
  * Über-uns-Seite ist noch offen und braucht noch stärkere Vertrauensbildung
  * CarDesk-Unterseite wird nicht in Version 1 umgesetzt, sondern in Version 2
  * auf der Startseite bleibt CarDesk nur als kurzer Pilotpartner-Aufruf sichtbar
  * die aktuelle aktive Runde bleibt `Version-1 Text- und Verkaufslogik schärfen`
  * CarDesk bleibt als separates Projekt und Pilotpartner-Aufruf dokumentiert
  * Logo/Favicon bleiben blockiert
  * Version-2-Themen sind klar von Version 1 getrennt
  * Version 1 wird sauber fertiggestellt, aber vorerst nicht öffentlich auf `ldigital.ch` veröffentlicht
  * nach Version 1 folgt das Marco-Projekt als praktische Referenz und Erfahrungsgrundlage
* Nächster Schritt:
  * Über-uns-Seite kürzen und vertrauensbildender formulieren
  * danach erneuter Gesamtcheck

### 23. Juni 2026

* Arbeitsblock 1: Start um 13:30 Uhr
* Unterbrechung: 15:00 Uhr wegen Meeting
* Nach dem Meeting: zusätzliches Workout
* Arbeitsblock 2: 21:15 bis 24:00 Uhr
* Tagesabschluss: 24:00 Uhr
* Status: Arbeitsblock 2 und Arbeitstag abgeschlossen
* Fokus: Version 1 intern fertigstellen
* Hinweis:
  * Version 1 bleibt eine interne, präsentierbare Arbeitsversion und wird noch nicht veröffentlicht
* Aktueller Stand vor Arbeitsbeginn:
  * Startseite ist für Version 1 inhaltlich abgeschlossen
  * Leistungsseite wurde textlich und visuell gestärkt
  * Kontaktseite wurde vereinfacht und der Anfragebereich professioneller formuliert
  * Version 1 wird nicht direkt veröffentlicht
  * nach Version 1 folgt zuerst das Marco-Projekt
  * Veröffentlichung von `ldigital.ch` wird im Rahmen von Version 2 erneut geprüft
* Fokus dieses Arbeitsblocks:
  * Über-uns-Seite analysieren
  * Über-uns-Seite kürzen und vertrauensbildender formulieren
  * danach prüfen, ob die Über-uns-Seite für Version 1 ausreichend ist
  * falls Zeit bleibt: erster Gesamtcheck der internen Version-1-Arbeitsversion
* Fokus Arbeitsblock 2:
  * Über-uns-Seite prüfen und korrigieren
  * entscheiden, ob die Über-uns-Seite für Version 1 akzeptiert werden kann
  * `As Cinco Quinas – fünf Grundsätze` als ruhigen Text- und Wertebereich beibehalten
  * grossen Korrekturblock für die Über-uns-Seite umsetzen
  * Positionierung, persönliche Verantwortung, visuelle Hierarchie und technische Sauberkeit gemeinsam prüfen
  * Gründertext persönlicher, ruhiger und glaubwürdiger formulieren
  * Quinas-Bereich typografisch weiter verfeinern
* Stand vor dem Meeting:
  * Über-uns-Seite war aktiver Fokus des heutigen Arbeitsblocks
  * die erste neue Version der Über-uns-Seite wirkte zu card-lastig und im Design nicht überzeugend
  * daraufhin wurde eine Korrektur geplant und an Codex übergeben
  * Abschnitt `Arbeitsweise` soll vollständig entfernt sein
  * Über-uns-Seite soll auf Intro, Gründer Rafael Lomar, `As Cinco Quinas – fünf Grundsätze` und CTA reduziert sein
  * Design soll ruhiger, hochwertiger und näher an der bestehenden LDigital-Gestaltung ausgerichtet sein
  * weniger Boxen, weniger Schatten und weniger Card-Optik
  * visuelle und inhaltliche Prüfung erfolgt erst nach dem Meeting
* Wichtige Entscheidungen:
  * die Über-uns-Seite ist nach der letzten Umsetzung noch nicht final abgenommen
  * der bisherige Gründertext wirkte zu distanziert und stellenweise zu werblich
  * der Gründertext wird deshalb in einer natürlichen Ich-Form formuliert
  * `As Cinco Quinas – fünf Grundsätze` bleibt auf der Über-uns-Seite, aber ruhiger und weniger card-lastig
  * für Version 1 wird keine Quinas-, Canva-, SVG- oder andere grafische Quinas-Darstellung eingebaut
  * die Idee einer visuellen Quinas-Grafik bleibt erhalten und wird für Version 2 vorgemerkt
  * Grund: Die Idee ist stark, aber die aktuelle grafische Umsetzung ist noch nicht professionell genug
  * CarDesk bleibt auf der Über-uns-Seite entfernt
  * keine Buchhaltung, Treuhand oder Finanzverwaltung in Version 1
  * im Hauptinhalt der Über-uns-Seite wird von `Unternehmen` gesprochen, nicht von `KMU`
  * Footer bleibt vorerst unverändert
  * seitenweite Sprachprüfung `KMU` vs. `Unternehmen` bleibt Thema für den Gesamtcheck
  * Version 1 bleibt eine interne, präsentierbare Arbeitsversion und wird noch nicht veröffentlicht
* Erledigt:
  * Über-uns-Seite für Version 1 gekürzt
  * Über-uns-Seite vertrauensbildender und weniger wie eine Projektbeschreibung formuliert
  * LDigital klarer als pragmatischer digitaler Partner positioniert
  * CarDesk auf der Über-uns-Seite entfernt
  * CarDesk bleibt als separates Projekt und Startseiten-Pilotpartner-Aufruf dokumentiert
  * Über-uns-Seite mit stärkerer LDigital-Identität neu aufgebaut
  * Rafael Lomar als Gründer und Inhaber eingeordnet
  * Wertebereich `As Cinco Quinas – fünf Grundsätze` eingeführt
  * keine Buchhaltung, Treuhand oder Finanzverwaltung ergänzt
  * spätere seitenweite Sprachprüfung `KMU` vs. `Unternehmen` im Gesamtcheck vorgemerkt
  * Über-uns-Seite nach erster Sichtprüfung korrigiert
  * Abschnitt `Arbeitsweise` entfernt
  * Über-uns-Seite auf Intro, Gründer, Quinas und CTA reduziert
  * Design ruhiger und näher an die bestehende LDigital-Gestaltung angepasst
  * grossen Korrekturblock für die Über-uns-Seite umgesetzt
  * Intro gekürzt und Positionierung auf Unternehmen in der Schweiz präzisiert
  * Gründerbereich technisch korrigiert, sodass die Gründertexte gemeinsam in der rechten Spalte stehen
  * Rafael Lomar klar als Gründer, Inhaber und direkte Ansprechperson positioniert
  * Quinas-Texte gekürzt und als ruhigen Wertebereich beibehalten
  * CTA zurückhaltender und klarer formuliert
  * keine Quinas-Grafik in Version 1 eingebaut
  * keine Buchhaltung, Treuhand, Finanzverwaltung, Behördennähe oder CarDesk im Über-uns-Hauptinhalt ergänzt
  * Version 1 bleibt eine interne, präsentierbare Arbeitsversion
  * Gründertext in eine persönliche und zurückhaltende Ich-Form überführt
  * werbliche Formulierungen im Gründerbereich entfernt
  * Quinas-Erklärung mit Bezug auf die portugiesische Symbolik präzisiert
  * Quinas als nummerierten Wertebereich `01–05` gestaltet
  * Quinas-Bereich ohne Grafik, Cards oder Schatten typografisch verfeinert
  * zweiten Gründerabsatz weiter verfeinert, weil die vorherige Fassung noch zu bürokratisch wirkte
  * Gründertext persönlich, ruhig und frei von Selbstlob gehalten
  * sichtbare Quinas-Nummern wieder entfernt
  * Quinas auf Desktop in einer subtilen Quinas-Anordnung positioniert
  * `Confiança – Vertrauen` als zentralen Wert in die Mitte gesetzt
  * Quinas auf Mobile in einer logischen einspaltigen Reihenfolge beibehalten
  * Quinas weiterhin ohne Grafik dargestellt
* Stand zum Tagesabschluss:
  * die Über-uns-Seite wurde weiter überarbeitet und ist deutlich näher an einer Version-1-Abnahme
  * der Gründerbereich wurde persönlicher formuliert
  * der distanzierte und leicht werbliche Gründertext wurde durch eine natürlichere Ich-Form ersetzt
  * der zweite Gründerabsatz wurde nochmals vereinfacht, weil die vorherige Fassung noch zu bürokratisch wirkte
  * die Quinas-Erklärung wurde verbessert
  * die sichtbaren Quinas-Zahlen wurden entfernt
  * die Quinas bleiben ohne Grafik
  * die Quinas wurden gestalterisch gegliedert, damit die Formidee subtil erhalten bleibt
  * `Confiança – Vertrauen` steht als zentraler Wert in der Mitte
  * die Über-uns-Seite ist noch nicht endgültig abgenommen und muss nochmals visuell sowie mobil geprüft werden
  * Version 1 bleibt eine interne, präsentierbare Arbeitsversion
  * nach Version 1 folgt weiterhin zuerst das Marco-Projekt
  * die Veröffentlichung von `ldigital.ch` wird später im Rahmen von Version 2 erneut geprüft
* Nächster Schritt:
  1. Über-uns-Seite final prüfen:
     * Desktop-Ansicht prüfen
     * Mobile-Ansicht prüfen
     * Gründertext prüfen
     * Quinas-Anordnung prüfen
     * CTA prüfen
  2. Danach entscheiden:
     * Über-uns-Seite für Version 1 akzeptieren
     * oder letzte kleine Korrekturen durchführen
  3. Anschliessend Gesamtcheck der internen Version-1-Arbeitsversion vorbereiten:
     * Startseite
     * Leistungen
     * Kontakt
     * Über uns
     * Impressum
     * Datenschutz
     * Navigation
     * Footer
     * Mobile Darstellung
     * Links
     * Bilder
     * Umlaute
     * Sprachregel `KMU` vs. `Unternehmen`
  4. Danach README aktualisieren.
* Offene Version-1-Aufgaben:
  * Über-uns-Seite verbessern: kürzer, vertrauensbildender, klarer erklären, wofür LDigital steht, nicht überladen
  * Gesamtcheck: Startseite, Leistungsseite, Kontaktseite, Über-uns-Seite, Impressum, Datenschutz, Navigation, Footer, mobile Ansicht, Links, Bilder, Umlaute / Sonderzeichen, seitenweite Sprachprüfung `KMU` vs. `Unternehmen`
  * README aktualisieren: Status als interne Version-1-Arbeitsversion festhalten, keine direkte Veröffentlichung auf `ldigital.ch`, Marco-Projekt als nächster strategischer Schritt

### 24. Juni 2026

* Arbeitsblock 1: Start um 19:50 Uhr
* Fokus: Gesamtcheck und Abschlussblock für die interne Version 1
* Ausgangslage:
  * Version 1 ist fast abgeschlossen, aber erst nach Korrekturblock und finalem Test intern abgenommen
  * Version 1 bleibt eine interne, präsentierbare Arbeitsversion
  * nach Version 1 folgt zuerst das Marco-Projekt
  * Veröffentlichung von `ldigital.ch` wird in Version 2 erneut geprüft
* Gesamtcheck:
  * alle sechs HTML-Seiten, CSS, JavaScript, Bilder, README und PLAN geprüft
  * Navigation, Footer, Links, Anker, Metadaten und Bilder kontrolliert
  * Desktop sowie Smartphone mit 390 px und 320 px geprüft
  * mobilen Überlauf bei `Datenschutzerklärung` gefunden
  * gemischte Sprachregel `KMU` und `Unternehmen` gefunden
  * veraltete Hosting-, README- und PLAN-Angaben gefunden
  * leere und ungenutzte JavaScript-Datei sowie ungenutzte CSS-Regeln gefunden
* Korrekturblock umgesetzt:
  * Marketingtexte, Metadaten und Footer auf `Unternehmen` vereinheitlicht
  * Kontaktseite von einer doppelten Aufforderung bereinigt
  * Datenschutzerklärung auf den aktuellen lokalen, nicht öffentlichen Stand korrigiert
  * mobilen Umbruch langer Überschriften ergänzt
  * Service-Link-Hover kontrastreicher gestaltet
  * leere JavaScript-Datei und alle Script-Einbindungen entfernt
  * eindeutig ungenutzte CSS-Regeln entfernt
  * README auf den aktuellen Stand der internen Version 1 gebracht
  * PLAN auf den aktuellen Abschlussstand bereinigt
* Aktueller Stand:
  * Korrekturblock ist umgesetzt
  * README und PLAN sind aktualisiert
  * technischer Desktop-, Mobile-, Link- und Inhaltscheck ist erfolgreich abgeschlossen
  * alle sechs Seiten wurden auf Desktop sowie mit 390 px und 320 px geprüft
  * Navigation, Footer, Links, Mailto-Links, Bilder, Metadaten und Umlaute wurden geprüft
  * keine horizontalen Überläufe, kaputten Links, fehlenden Bilder oder Konsolenfehler gefunden
  * mobile Trennung der langen Überschrift `Datenschutzerklärung` verbessert
  * Version 1 wartet nur noch auf die menschliche visuelle Abnahme
* Nächster Schritt:
  1. menschliche visuelle Abnahme durchführen
  2. gegebenenfalls letzte kleine Fehler korrigieren
  3. Version 1 intern abschliessen

### 28. Juni 2026

* Arbeitsblock: visuelle Professionalisierung mit HTML/CSS-Bildplatzhaltern
* Fokus:
  * bestehende LDigital-Seite hochwertiger, ruhiger und strukturierter darstellen
  * Blau/Gold-Farbwelt kontrollierter einsetzen
  * Inhalte und Positionierung beibehalten, aber die visuelle Hierarchie verbessern
  * klare Platzhalterflächen für spätere Bilder, Screenshots und Mockups ergänzen
* Rahmenbedingungen:
  * kein Commit
  * kein Deployment auf cyon
  * keine externen Scripts
  * kein Tracking
  * kein neues Framework
  * kein PHP
  * keine WordPress-Dateien
  * keine echten Bilder, KI-Bilder oder Stockbilder ergänzt
* Umgesetzt:
  * Startseite mit stärkerem Hero-Aufbau und Dashboard-Platzhalter ergänzt
  * Leistungsbereich auf `Webseiten & Sichtbarkeit`, `Digitale Werkzeuge & Systeme` sowie `Prozessoptimierung & Automatisierung` geschärft
  * echte Leistungsbilder durch professionelle HTML/CSS-Platzhalter ersetzt
  * Arbeitsweise mit breitem Platzhalter für Analyse, Umsetzung und Weiterentwicklung ergänzt
  * CarDesk auf Startseite, Leistungsseite und CarDesk-Seite als Konzept/Pilotprojekt mit Mockup-Platzhalter dargestellt
  * Über-mich-Seite mit neutralem Platzhalter für Beratung / Arbeitsplatz ergänzt, ohne Personendarstellung zu erfinden
  * Kontakt-CTA mit Platzhalter für Erstgespräch / Projektstart ergänzt
  * Header, Typografie, Cards, Abstände und responsive Layouts ruhiger und professioneller gestaltet
  * Dokument `docs/ldigital-bild-und-mockup-liste.md` für spätere Visual-Produktion erstellt
* Nächste Aufgaben:
  1. echte Bilder und neutrale Mockups erstellen oder freigeben
  2. Inhalte final prüfen und auf Schweizer Hochdeutsch kontrollieren
  3. Mobile-Darstellung und Performance nochmals prüfen
  4. erst nach finaler Freigabe ein späteres Deployment auf cyon planen

* Arbeitsblock: gezielte Integration ausgewählter Noir-Elemente
* Rahmenbedingungen:
  * aktueller Hero bewusst beibehalten und nicht durch den Hero aus `index.noir.html` ersetzt
  * keine komplette Noir-Version übernommen
  * kein Commit
  * kein Deployment auf cyon
  * keine externen Scripts, kein Tracking, kein PHP, keine WordPress-Dateien
* Umgesetzt:
  * `index.noir.html` ausgewertet und nur passende Struktur-/Designideen übernommen
  * Abschnitt direkt nach dem Hero als kompakte Positionierungssektion neu aufgebaut
  * Leistungsbereich auf der Startseite kompakter gemacht und stärker mit Nummerierung, kurzen Aussagen und klarer Card-Hierarchie strukturiert
  * Platzhalter-Beschriftungen präzisiert: `Website-Mockup folgt`, `System-Mockup folgt`, `Workflow-Visual folgt`, `CarDesk-Mockup folgt` und `Projektbild folgt`
  * dunklen Arbeitsweise-Block nach Noir-Vorbild integriert
  * bestehende helle Arbeitsweise-Dopplung mit Prozess-Platzhalter entfernt
  * Arbeitsweise-Schritte auf `01 Verstehen`, `02 Strukturieren`, `03 Umsetzen`, `04 Weiterentwickeln` harmonisiert
* Hinweis zu `index.noir.html`:
  * relevante Bestandteile wurden integriert
  * Datei bleibt vorerst bestehen
  * später prüfen, ob `index.noir.html` archiviert oder gelöscht werden soll
  * möglicher Archivpfad: `docs/archive/index.noir.html`, aber erst nach Prüfung und Commit
* Nächste Aufgaben:
  1. neue Startseitenstruktur visuell final prüfen
  2. Mobile-Ansicht und technische Checks wiederholen
  3. `index.noir.html` nach finaler Freigabe archivieren oder löschen

* Arbeitsblock 8 – CarDesk-Unterseite als Produkt-Showcase
* Ziel:
  * `cardesk.html` innerhalb der LDigital-Webseite als eigenständigen Produkt-Showcase für CarDesk darstellen.
  * CarDesk klar als Konzept-/Pilotprojekt positionieren und nicht als fertiges Serienprodukt verkaufen.
* Geänderte Dateien:
  * `cardesk.html`
  * `css/styles.css`
* Designentscheidung:
  * Die CarDesk-Unterseite nutzt ab dem Hauptinhalt eine eigene Anthrazit/Rot/Weiss-Produktoptik.
  * Die LDigital-Dachmarke bleibt global blau/gold.
  * Header, Navigation und Footer bleiben LDigital-konform.
  * Die neue Gestaltung ist über `.cardesk-page` und zugehörige CarDesk-Klassen gekapselt.
  * Es wurde kein finales CarDesk-Logo-Asset eingebaut; stattdessen wird eine Text-Wordmark verwendet.
* Browserprüfung:
  * lokale Vorschau unter `http://127.0.0.1:8080` geprüft.
  * `cardesk.html` auf Desktop `1440x1000` geprüft: sauber.
  * `cardesk.html` auf Tablet `834x1112` geprüft: sauber.
  * `cardesk.html` auf Mobile `390x844` geprüft: sauber.
  * kein horizontaler Overflow.
  * keine Console-Errors.
  * keine defekten Bilder.
  * Buttons, Karten, CarDesk-Wordmark und CTA lesbar.
  * Kontrollseite `index.html` bleibt blau/gold.
  * keine CarDesk-Klassen im Hauptinhalt der Startseite.
* Abgrenzung:
  * keine Scripts ergänzt.
  * kein Tracking ergänzt.
  * keine externen Abhängigkeiten ergänzt.
  * keine Assets geändert.
  * kein cyon-Deployment durchgeführt.
  * kein Commit erstellt.
* Offene Folgepunkte:
  * finales CarDesk-Logo später separat erstellen.
  * CarDesk-Bild oder Mockup später final prüfen.
  * Inhalte bei echter Pilotpartner-Phase mit Marco oder realer Garage schärfen.
  * kein Deployment erfolgt.

### Arbeitsblock 9 – CarDesk-Hero-Visual integriert

**Ziel:**

  * Das lokal vorhandene CarDesk-Hero-Visual in die CarDesk-Unterseite integrieren.
  * Den Hero-Bereich von `cardesk.html` stärker als hochwertiges Produktvisual für CarDesk darstellen.

**Geänderte Dateien im Umsetzungsblock:**

  * `cardesk.html`
  * `css/styles.css`
  * `assets/images/cardesk-hero-rs6-tech.png`

**Umsetzung:**

  * Das Bild `assets/images/cardesk-hero-rs6-tech.png` wurde im Hero-Bereich von `cardesk.html` eingebunden.
  * Das Visual zeigt die CarDesk-Produktwelt in Anthrazit/Rot/Weiss mit Fahrzeug-, Technik- und Software-Bezug.
  * Auf Desktop sitzt das Bild prominent rechts im Hero.
  * Auf Tablet und Mobile skaliert das Bild sauber.
  * Das Bild wurde mit Rahmen, Rundung, Schatten/Glow und Caption in die bestehende CarDesk-Optik integriert.
  * Der Hero-Text bleibt lesbar.
  * Der Alt-Text wurde gesetzt: `CarDesk Hero-Visual mit digitalisiertem Fahrzeug und roten Techniklinien`.

**Browserprüfung:**

  * Lokale Browserprüfung unter `http://127.0.0.1:8080` durchgeführt.
  * Desktop geprüft: sauber.
  * Tablet geprüft: sauber.
  * Mobile geprüft: sauber.
  * Keine Console-Errors.
  * Kein horizontaler Overflow.
  * Bild lädt korrekt.
  * Bildgrösse: `1672x941`.
  * Hero-Text bleibt lesbar.

**Abgrenzung:**

  * LDigital bleibt global blau/gold.
  * CarDesk bleibt nur auf der CarDesk-Unterseite anthrazit/rot/weiss.
  * Kein Tracking ergänzt.
  * Keine Scripts ergänzt.
  * Keine externen Abhängigkeiten ergänzt.
  * Kein cyon-Deployment durchgeführt.
  * Keine weiteren Designänderungen in diesem Dokumentationsschritt vorgenommen.

**Offene Folgepunkte:**

  * Finales CarDesk-Logo bleibt separat offen.
  * CarDesk-Bild oder Mockup später final auf Markenqualität prüfen.
  * Inhalte bei echter Pilotpartner-Phase mit Marco oder einer realen Garage weiter schärfen.
  * Kein Deployment erfolgt.

### Arbeitsblock 10 – Startseite für Version 2.5 geschärft

**Status:** abgeschlossen, visuell geprüft, committed und gepusht

**Ziel:**

* Die Startseite wurde im Rahmen von Version 2.5 sichtbar aufgeräumt, geschärft und näher an einen launchfähigen Stand gebracht.
* Ziel war eine klarere Verkaufswirkung, weniger Entwurfscharakter und eine professionellere Darstellung von LDigital als Anbieter für Schweizer KMU.

**Geänderte Dateien im Umsetzungsblock:**

* `index.html`
* `css/styles.css`
* `leistungen.html`
* `cardesk.html`
* `ueber-uns.html`
* `kontakt.html`
* `impressum.html`
* `datenschutz.html`

**Umsetzung:**

* Navigation auf den Hauptseiten vereinheitlicht: `Leistungen | CarDesk | Über uns | Kontakt`.
* `Startseite` aus der Navigation entfernt; das Logo bleibt Startseiten-Link.
* `Über mich` zu `Über uns` geändert.
* `Portfolio` aus der öffentlichen Hauptnavigation entfernt.
* Hero der Startseite geschärft.
* H1 ohne das überflüssige erste Wort `Ein` umgesetzt.
* Zweiter Hero-Satz gesetzt: `Für Schweizer Unternehmen, die professionell auftreten möchten – ohne unnötige Komplexität.`
* Überflüssige Hero-Kacheln entfernt.
* Hero-Mockup überarbeitet und ruhiger gestaltet.
* Positionierungsabschnitt entfernt, weil er redundant wirkte.
* Leistungsbereich auf der Startseite verbessert.
* Nummern und sichtbare Platzhalter aus den Leistungskarten entfernt.
* Neue abstrakte HTML/CSS-Visuals für die Leistungsbereiche ergänzt.
* Texte der Leistungsbereiche kürzer und kundennäher formuliert.
* CarDesk-Startseitenblock an die neue Anthrazit/Rot/Weiss-Produktoptik angepasst.
* CarDesk weiterhin klar als Konzept-/Pilotprojekt dargestellt.
* Vorhandenes CarDesk-Hero-Visual eingebunden: `assets/images/cardesk-hero-rs6-tech.png`.
* Arbeitsweise auf einen kompakten 3-Schritt-Block reduziert.
* FAQ auf der Startseite in eine kurze Q&A-Struktur umgewandelt.
* Letzten grossen CTA entfernt.
* Footer auf den Hauptseiten reduziert: LDigital-Hinweis, `info@ldigital.ch`, Impressum, Datenschutz.

**Prüfung:**

* Startseite wurde vom Nutzer visuell geprüft.
* Nutzer bewertet die neue Startseite als deutlich besser.
* Statische Checks bestanden.
* Keine leeren `href` oder `src`.
* Keine Script- oder Tracking-Treffer.
* CSS-Klammercheck bestanden.
* `git diff --check` ohne Whitespace-Fehler; nur bekannte LF→CRLF-Warnungen.
* Kein cyon-Deployment durchgeführt.

**Abgrenzung:**

* Unterseiten-Inhalte wurden noch nicht final bereinigt.
* Kontaktseite wird als nächster separater Prüf- und Arbeitsblock behandelt.
* Leistungsunterseite und Über-uns-Seite bleiben eigene Folgeblöcke.
* Rechtstexte bleiben weiterhin offen.
* Sonderdateien bleiben vor Launch zu klären: `portfolio.html`, `index.noir.html`, `css/noir.css`, `vision-koenigshaus.html`.
* Logo, Favicon und Social Preview bleiben separate offene Punkte.
* Kein Deployment erfolgt.

**Offene Folgepunkte:**

* Kontaktseite anhand der visuellen Prüfung überarbeiten.
* Leistungsunterseite prüfen und schärfen.
* Über-uns-Seite prüfen und schärfen.
* Sichtbare Platzhalter auf Unterseiten entfernen.
* Impressum und Datenschutz finalisieren.
* Sonderdateien vor Deployment entfernen, absichern oder bewusst ausschliessen.
* Lighthouse/Staging/Deployment erst nach Abschluss der Version-2.5-Inhalte.

### Arbeitsblock 11 – Version 2.5 Unterseiten und Startseite nachgeschärft

**Status:** umgesetzt, intern geprüft, kein Deployment
**Hinweis:** `ueber-uns.html` bleibt inhaltlich/visuell noch offen und wird separat nochmals geprüft.

#### Umgesetzte Bereiche

* Kontaktseite für Version 2.5 ruhiger und klarer aufgebaut.
* Kontakt-Hero, Kontaktbereich, Transparenz-Block und Bildintegration überarbeitet.
* Lokales Kontaktbild eingebunden: `assets/images/kontakt-erstgespraech-visual.png`.
* Footer-Satz auf den Hauptseiten konsistent angepasst.
* Startseite visuell nachgeschärft:

  * Hero-Mockup ruhiger gestaltet.
  * Leistungskarten sauberer ausgerichtet.
  * Q&A-Bereich klarer strukturiert.
* Leistungsseite geschärft:

  * Einleitung aktualisiert.
  * sichtbare Mockup-Platzhalter entfernt.
  * HTML/CSS-Visuals für die drei Leistungsbereiche ergänzt.
  * Texte praxisnäher für Schweizer KMU formuliert.
  * Bereich „Weitere Unterstützung für Ihre digitale Grundlage“ aufgewertet.
  * CarDesk-Block an Startseiten-/CarDesk-Optik angeglichen.
  * finaler CTA auf Erstgespräch ausgerichtet.
* Über-uns-Seite technisch und strukturell überarbeitet:

  * gültige HTML-Struktur geprüft.
  * Hero auf „Über LDigital“ ausgerichtet.
  * Gründerabschnitt ohne Ich-Perspektive formuliert.
  * Arbeitsweise mit Klarheit, Struktur, Pragmatismus und Verlässlichkeit ergänzt.
  * Zielgruppenbezug gestärkt.
  * Quinas-/Markenstory erhalten und weiter unten platziert.
  * CTA angepasst.

#### Geänderte Dateien

* `kontakt.html`
* `index.html`
* `leistungen.html`
* `ueber-uns.html`
* `cardesk.html`
* `impressum.html`
* `datenschutz.html`
* `css/styles.css`
* `assets/images/kontakt-erstgespraech-visual.png`

#### Prüfungen

* Lokale Browserprüfungen unter `http://127.0.0.1:8080` durchgeführt.
* Desktop, Tablet und Mobile geprüft.
* Keine Console-Errors gemeldet.
* Kein horizontaler Overflow gemeldet.
* Keine leeren `href`/`src` gemeldet.
* Keine Script- oder Tracking-Treffer gemeldet.
* `git diff --check` ohne Whitespace-Fehler.
* LF/CRLF-Warnungen vorhanden, aber ohne Fehler.

#### Bewusst offen

* `ueber-uns.html` ist noch nicht final freigegeben. Einzelne Punkte gefallen visuell/inhaltlich noch nicht und werden später separat geprüft.
* Finale Bild-/Portraitlösung für `ueber-uns.html` fehlt noch.
* Logo, Favicon und Social Preview bleiben separat offen.
* Rechtstexte bleiben weiterhin final zu prüfen.
* Kein Deployment auf cyon erfolgt.
* Version 2.5 bleibt interne Arbeitsversion.
