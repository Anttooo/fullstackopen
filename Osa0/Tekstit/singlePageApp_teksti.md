title Single Page App

Selain->Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa


Palvelin-->Selain: html
Selain->Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
Palvelin-->Selain: main.css
Selain->Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Palvelin-->Selain: spa.js

note over Selain:
Selain suorittaa javascription, jonka osana
se kutsuu data.json tiedostoa palvelimelta
end note

Selain->Palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Palvelin-->Selain: data.json

note over Selain:
Selain renderöi sivun.
end note

