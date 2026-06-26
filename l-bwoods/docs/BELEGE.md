# Belege

L-BWoods verwendet eindeutige Beleg-IDs im Format:

```text
B-JAHR-NUMMER
```

Beispiel:

```text
B-2026-0001
```

Empfohlener Dateiname:

```text
B-2026-0001_bueromaterial_tipp-ex-karteikarten-zeichenblock_9-97.jpg
```

## Regeln

- Jeder Beleg erhaelt eine eindeutige Beleg-ID.
- Dateinamen beginnen immer mit der Beleg-ID.
- Keine Dateinamen wie `IMG_1234.jpg`.
- Der Dateiname soll kurz beschreiben, was gekauft oder dokumentiert wurde.
- Belege duerfen nicht versehentlich oeffentlich versioniert werden.
- Echte Belegbilder gehoeren nur in dieses Repository, wenn es privat ist.

## Ablage

Belegbilder koennen im Ordner `belege/` abgelegt werden. Die `.gitignore` schliesst echte Belegdateien standardmaessig aus, laesst aber `belege/README.md` und `belege/.gitkeep` im Repository.
