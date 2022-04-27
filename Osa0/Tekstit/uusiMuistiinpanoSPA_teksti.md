title Uusi muistiinpano - SPA

note over Selain:
Selain luo uuden muistiinpanon notes-listalle
ja renderöi muistiinpanojen listan uudestaan
end note

Selain->Palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa

note over Palvelin:
Palvelin lisää uuden muistiinpanon 
data.jason listalle
end note

Palvelin --> Selain: Message: note created