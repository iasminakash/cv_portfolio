# CV PORTFOLIO WEBBAPPLIKATION
En enkel responsiv cs portfolio webbsida som anpassar sig till olika skärmstorlekar.

## Tekniker
- HTML
- CSS
- JavaScript

## HTML
Jag använde semantiska taggar för att organisera innehållet på ett tydligt sätt och för att förbättra SEO, genom att anvånda korrekta HTML taggar.

## CSS
Med CSS har jag skapat layout, färger, fonts, mellanrum mellan objekt och effekter vid hover. Jag gjorde även ett bildspel i about.html och anpassade utseendet för mindre skärmar med media queries.

## JavaScript
Jag använde JavaScript för att: gömma footern på alla sidor, växla till gråläge, bläddra i karusellen i skills.html, visa beskrivning av en färdighet i skills.html.

# Reflektion över projektet

## CSS uppbyggnad

För dena webutvekling uppgift hade jag valt att ha 6 html sidor och en gemensam css fil. CSS filenär uppldelat i olika delar. 

- ALL PAGES STYLING tar hand om generella layoten, t. ex. för att nollställa margin och padding för varje sida. ALL PAGES STYLING definierar bakgrundfärger på varje sida. 

- I delen NAVIGATION BAR stylar man huvudmenyn i header horisontellt uppe och till höger på sidan (i detsktop- och surfplatta- varianten), samt horisontellt uppe och centerat (i mobilskärm- varianten). 

- I delen FOOTER NAGIVATION stylas footer knapp verktyget med länkar till främjande websidor samt till lokala sidan "contact". Sista knapperna i footer bar har funktioner som ljusläge eller dölja fotern. Ikonerna förstoras vid hover. Förutom stylingen den css delen gör att footern är positionerad fast längst ner på sidan. 

- I delarna HOME, ABOUT, SKILLS, PROJECTS, RESUME, CONTACT av css filen styrs stylingen av varje enkild html sida.

- I delen MEDIA QUARIES görs sidan responsiv genom att anpassa layouten och design på minst tre olika skärmstorlekar (iPhone 12PRO 390x844, iPad (1024x768), MackBook Pro 1440x900), men fungerar bra och responsiv på de flesta skärmar. I mina media quaries justerar jag bland annat storlek på text, padding och margin samt omstrukturerar innehåll för att passa skärmens dimensioner genom flexbox direction.

Att ha en stor gemensam CSS-fil för alla sidor kan bli svårt att hantera, särskilt när man gör ändringar eller försöker lösa problem för en enskilf sida. Det kan ledde till konflikter, överlappande stilar eller oväntade förändringar på andra sidor. För att undika der had ejag försökt använda unika klasser eller styla med unik kombination av className. Men om jag skulle ta hand om en större ptojekt så hade jag valt att dela upp CSS-filen i mindre delar för att göra koden mer överskådlig och lättare att underhålla.

Eftersom vi inte har hunnit lära oss om komponenter då, har jag valt att kopiera footer och header till varje sida. Vilket blev jobbigt eftersom det kräver dubbelarbete för att göra ändringar, gör underhåll svårt och kan leda till inkonsekvenser på webbplatsen.


# Limitations
I min footer navigation finns en knapp för att dölja footern. Men eftersom jag inte har implementerat någon funktion för att visa den igen, kan man inte få tillbaka footern utan att ladda om sidan.

Jag har lagt till en knapp för att ändra till gråläge (ljus-/mörkerläge) på en enskild sida. Men eftersom varje HTML-sida är separat, påverkas inte resten av webbplatsen – färgtemat ändras bara på den aktuella sidan. Om man sparar användarens val  i localStorage så kan man läsa det valet varje gång en ny sida öppnas. Då visas rätt färgtema automatiskt, oavsett vilken sida man är på.

Jag borde ha använt av ARIA atributter eller alt atribbuter. Det hade gjort min webbplats mer tillgänglig för en bredare användargrupp och hjälper till att förbättra SEO och användarupplevelsen.
