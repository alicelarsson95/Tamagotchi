Tamagotchi Bikkjen
1. HMTL
    - Tamagotchi
        - knappar (äta, sova, leka)
        - textfält
        - ikoner för status (hunger, energi, glädje) (font awesome)
    - Ev. textfält

2. CSS

3. JavaScript
    - kunna hålla koll på tid
    - kunna hålla koll på statusnivåer
    - kunna ändra färg/form beroende på hur den mår
    - använda sig av localStorage
    - setTimeIntervall

    - const eneryLevel

    - startTamagotchi
    - feedTamagotchi
    - sleepTamagotchi
    - playWithTamagotchi
    - changeTamagotchiColor
    - resetTamagotchi



Spelregler:
- när tamagotchi skapas är den ett ägg först
- när Bikkjen har slut på energi/mat/lust ska den dö
- 



Uppgiftsbeskrivning
Du ska skapa ett interaktivt virtuellt husdjur med HTML, CSS och JavaScript. Husdjuret ska kunna matas, lekas med och sova. Ditt mål är att hålla ditt husdjur nöjt och vid liv så länge som möjligt!

steg
skapa ditt husdjur med HTML och CSS. det behöver inte vara den snyggaste lilla figuren. det räcker med en fyrkanting eller rundaktig blob. vill ni så får ni gärna försöka er på att göra den lite roligare också såklart.

interaktionsknappar. det ska finnas knappar för att kunna mata, leka och sova.

statusindikatorer. ni behöver kunna hålla reda på djurets status (hunger, glädje och energi). varje gång ni klickar på en knapp så ska indikatorn för motsvarande status öka. t ex om ni klickar på mata så ska djuret bli mindre hungrig.

implementera tidsbaserade händelser. efter en viss tid gått så ska djuret bli mer hungrig, tröttare och mindre glad.

ändra utseendet på djuret baserat på deras humör eller hälsa. det räcker med att ändra färg på djuret från att djuret kanske är grönt till gult, till rött. ni får såklart göra det hur ni vill. men det ska synas någon förändring beroende på hur djuret mår.

vad händer när djurets status når 0? kom på era egna spelregler över vad som händer om ni inte tar hand om ert djur? ska djuret dö? ska djuret rymma? bara fantasin kan sätta gränser!

informationen ska sparas i local storage så att ert djur finns kvar med samma status som senast när ni kommer tillbaka och spelar igen.

EXTRA
påverkas av tid även när ni inte spelar! använd er utav Date.now() för att spara tid och sen jämföra tiden när ni kommer tillbaka med tiden som sparats senast. hur lång tid har gått? hur mycket har den tiden påverkat hunger? sömn? glädje?

lägg till pengar i spelet. en funktion för att skicka iväg ert djur på äventyr för att hitta saker som går att sälja? skicka iväg ert djur på att jobba? kom på något sätt att tjäna pengar åt djuret (eller att djuret fixar pengarna själv) för att ha råd att köpa mat.

Tekniker
När ni gör det här projektet kommer det bli mycket av samma tekniker som ni redan använt.

variabler
olika datatyper
conditionals
loopar
funktioner
DOM manipulation
event hantering
Och utöver det så kommer vi även kolla på:

Local storage
setInterval
setTimeout
inbyggda funktioner