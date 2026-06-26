# Deployment Plan v1.0

## Zweck

Dieser Plan beschreibt, wie die statische L-Digital Website spaeter sicher auf das Hosting gebracht wird und wie ein Rollback moeglich bleibt.

## Grundregel

Vor jeder Live-Aenderung muss ein Backup der bestehenden WordPress-Installation und der aktuellen Website-Dateien vorhanden sein.

## Ausgangslage

* Aktuell existiert eine WordPress-Website auf dem Hosting.
* Die neue Website liegt als statische HTML/CSS-Version im GitHub-Repository.
* Die neue Website soll WordPress spaeter ersetzen.
* Der Logo-/Favicon-/Social-Preview-Block ist aktuell noch verschoben.
* Rechtliche/praktische Gesamtpruefung bleibt vor Launch offen.

## Vor Deployment pruefen

* Repository ist aktuell und gepusht.
* Impressum vorhanden.
* Datenschutz vorhanden.
* Interne Links geprueft.
* QA-Checkliste vorhanden.
* Lighthouse-Checkliste vorhanden.
* Logo/Favicon/Social Preview entweder final oder bewusst als spaeterer Block akzeptiert.
* Alte WordPress-Seite gesichert.
* Zugang zu Hosting/FTP/Adminbereich funktioniert.
* Zielordner auf dem Hosting bekannt.
* Domain-Zuordnung bekannt.
* HTTPS aktiv.
* Rollback-Plan vorhanden.

## Backup-Plan

* WordPress-Dateien sichern.
* Datenbank sichern, falls WordPress noch aktiv ist.
* Upload-Ordner sichern.
* Aktuelle `.htaccess` sichern.
* Aktuelle `robots.txt` sichern, falls vorhanden.
* Aktuelle `sitemap.xml` sichern, falls vorhanden.
* Backup lokal und/oder extern ablegen.
* Backup nicht ins oeffentliche GitHub-Repository committen.

## Deployment-Plan

1. Backup erstellen.
2. Zielordner pruefen.
3. Statische Website-Dateien vorbereiten.
4. Upload auf Test-/Staging-Umgebung, falls moeglich.
5. Website im Browser pruefen.
6. Interne Links pruefen.
7. Impressum und Datenschutz pruefen.
8. Mobile Darstellung pruefen.
9. Lighthouse-Test ausfuehren.
10. Erst danach Live-Schaltung.

## Rollback-Plan

Wenn nach dem Deployment etwas schiefgeht:

1. Neue statische Dateien nicht weiter aendern.
2. Alte WordPress-Dateien aus Backup wiederherstellen.
3. `.htaccess` wiederherstellen.
4. `robots.txt` und `sitemap.xml` wiederherstellen, falls noetig.
5. Website im Browser pruefen.
6. DNS/Domain/HTTPS pruefen.
7. Fehler dokumentieren.

## Risiken

* WordPress wird ueberschrieben ohne Backup.
* `.htaccess` wird falsch ersetzt.
* Domain zeigt auf falschen Ordner.
* Bilder oder CSS fehlen nach Upload.
* Links funktionieren lokal, aber nicht live.
* Impressum/Datenschutz nicht erreichbar.
* `robots.txt` oder `sitemap.xml` falsch.
* Kein Rollback moeglich.

## Nicht jetzt ausfuehren

Dieser Plan fuehrt noch kein Deployment aus. Er bereitet nur den spaeteren sicheren Ablauf vor.
