title Uusi muistiinpano

Selain->Palvelin: HTTP POST /new_note

note over Palvelin:
Palvelin lisää selaimen lähettämän
uuden muistiinpanon /notes listaan ja
kehottaa selainta tekemään uuden HTTP GET
pyynnön /notes osoitteseen.
end note

Palvelin-->Selain: redirect request /notes
Selain->Palvelin: HTTP GET /notes
Palvelin-->Selain: html-koodi
Selain->Palvelin: HTTP GET /main.css
Palvelin-->Selain: main.css
Selain->Palvelin: HTTP GET /main.js
Palvelin-->Selain: main.js

note over Selain:
Selain suorittaa javascription, jonka osana
se kutsuu data.json tiedostoa palvelimelta
end note

Selain->Palvelin: HTTP GET /data.json
Palvelin-->Selain: data.json

note over Selain:
Selain renderöi sivun loppuun
onreadystatechange tapahtuman-
käsittelijän perusteella.
end note
