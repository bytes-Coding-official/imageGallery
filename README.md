# Bilder-Galerie

## Erläuterung
Dies ist eine Web-App, mit welcher Bilder-Galerien dargestellt werden können. Hierfür wird per XMLHttpRequest eine JSON File vom Server angefordert, welche Infos über die Galerien beinhaltet. Auf Basis dieser Infos werden die Galerien geladen und weiter dargestellt.

## Installation
Da beim verwenden von Ajax ein Server vorausgesetzt wird, muss dieser erst auf der lokalen Maschine mit dieser Web-App gestartet werden. Hierfür empfiehlt sich die Verwendung von [Node.js](https://nodejs.org/en).  
  
1. [Node.js](https://nodejs.org/en) auf dem Gerät installieren
2. Eine Command-Line öffnen
    - Windows + R
    - "cmd" eingeben
    - OK klicken
3. `cd [Root-Verzeichnes der Web-App]`
4. `npm install -g http-server`
5. `http-server`

Sofern diese Schritte korrekt durchgeführt wurden, sollte sich nun lokal ein HTTP-Server gestartet haben.  
Dieser ist über **localhost:8080** in jedem Web-Browser erreichbar.  
  
Glückwunsch! Die Bilder-Galerien sollten nun zu sehen sein :D

## Funktionen
- Navigieren durch eine Bilder-Galerie mit den beiden Pfeil-Buttons links und rechts vom aktuellen Bild.
- Auswählen einer Bilder-Galerie mit den Buttons unterhalb des aktuellen Bildes.