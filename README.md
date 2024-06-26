## Erste Schritte

Download Zip File von Github

### `npm i`
Um alle dependencies zu installieren.

## Erstellen Sie ein .env file im Projekt.
Fügen Sie dort DB URL + JWT Secret Key hinzu.

( Start der Render Application 
https://roha-ibaw.onrender.com/ )

## Nächste Schritte um die Applikation zu benutzen:

Verwenden Sie im Projekt Terminal:

### `npm start`

Startet die App im Entwicklermodus\
Öffnen Sie  [http://localhost:3000](http://localhost:3000) in Ihrem Browser.

Die Seite wird neu laden wenn Sie änderungen vornehmen.\

### `npm run build`

Erstellt einen  `dist` Ordner.\



Infos zu den npm packages:

    body-parser:
    Der body-parser ist ein npm-Modul für Node.js, das das Parsen von HTTP-Request-Bodies erleichtert, insbesondere für POST- und PUT-Anfragen. Er ermöglicht das Extrahieren von Daten aus dem Body einer HTTP-        Anfrage, wie z.B. Formulardaten oder JSON, und stellt sie im Anwendungscode zur Verfügung. Der body-parser ist ein häufig verwendetes Middleware-Modul in Verbindung mit Frameworks wie Express.js, um Daten aus     Client-Anfragen zu verarbeiten.

    express:
    Express ist ein beliebtes npm-Modul für Node.js, das die Entwicklung von Webanwendungen und RESTful APIs vereinfacht. Es bietet eine robuste und flexible Routing-Engine sowie zahlreiche Middleware-Funktionen,     die das Handling von HTTP-Anfragen und Antworten erleichtern. Express ist bekannt für seine Einfachheit, Geschwindigkeit und Erweiterbarkeit und wird häufig in der Node.js-Community eingesetzt.

    lodash:
    Lodash ist ein npm-Modul für JavaScript, das eine Vielzahl von Hilfsfunktionen für die Arbeit mit Arrays, Objekten und Funktionen bereitstellt. Es optimiert und erleichtert die Entwicklung von JavaScript-         Anwendungen durch eine konsistente und leistungsstarke API.

    morgan:
    Morgan ist ein npm-Modul für Node.js, das als HTTP-Request-Logger dient. Es ermöglicht das einfache Protokollieren von Anfragen, einschließlich Informationen wie HTTP-Methoden, URLs, Statuscodes und               Antwortzeiten.

    nodemon:
    Nodemon ist ein npm-Modul für Node.js, das die Entwicklung von Node-Anwendungen vereinfacht, indem es automatisch den Server neu startet, wenn Änderungen am Quellcode vorgenommen werden. Dadurch entfällt die      Notwendigkeit, den Server manuell neu zu starten, was den Entwicklungsprozess beschleunigt und die Produktivität erhöht.

    Babel-CLI:
    Babel-CLI ist ein npm-Modul für Node.js, das eine Befehlszeilenschnittstelle für Babel bereitstellt. Es ermöglicht Entwicklern, Babel direkt über die Befehlszeile aufzurufen, um JavaScript-Code zu                 transpilieren und so in ältere Versionen umzuwandeln, die von verschiedenen Browsern und Umgebungen unterstützt werden.

    Babel-Preset-Env:
    Babel-Preset-Env ist ein npm-Paket, das eine Babel-Konfiguration bereitstellt, um JavaScript-Code entsprechend der Umgebung zu transpilieren. Es ermöglicht Entwicklern, automatisch nur die Babel-Plugins zu        verwenden, die für die Zielumgebung erforderlich sind, basierend auf den Browsern oder Umgebungen, die sie unterstützen möchten.

    Babel-Preset-Stage-0:
    Babel-Preset-Stage-0 ist ein npm-Paket, das eine Babel-Konfiguration für experimentelle JavaScript-Funktionen bereitstellt, die sich noch in einem frühen Stadium der Standardisierung befinden. Es ermöglicht       Entwicklern, Funktionen aus dem Stage-0-Level von ECMAScript (wie Vorschläge für neue JavaScript-Syntax) zu nutzen und in ihrem Code zu verwenden, wodurch sie auf zukünftige Sprachfunktionen zugreifen können,     bevor sie offiziell in den Sprachstandard aufgenommen werden.

    mongoose:
    Mongoose ist eine Node.js-Bibliothek, die die Interaktion mit MongoDB-Datenbanken erleichtert, indem sie ein objektorientiertes Modell für das Mapping von Daten in die MongoDB-Datenstruktur bereitstellt. Im       Wesentlichen ist Mongoose ein ODM (Object Data Modeling) für MongoDB.

    dotenv:
    Dotenv ist ein Node.js-Modul, das die Verwendung von Umgebungsvariablen in Node.js-Anwendungen vereinfacht, indem es eine .env-Datei im Root-Verzeichnis deiner Anwendung liest und die darin enthaltenen            Umgebungsvariablen in den Prozessumgebungsvariablen verfügbar macht.
