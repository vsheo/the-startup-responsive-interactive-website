Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Future Ready Design - AccessDash
<!-- Geef je project een titel en schrijf in één zin wat het is -->


## Inhoudsopgave
[**_Beschrijving_**](#Beschrijving)<br/>
[Responsiveness](#Responsiveness)<br/>
[Responsiveness: overzicht pagina](#Overzicht-pagina)<br/>
[Responsiveness: details pagina](#Details-pagina)<br/>

[interacties](#interacties)<br/>
[Button interacties](#Button-interacties)<br/>
[Menu interactie op grote schermen](#Menu-interactie-op-grote-schermen)<br/>
[Menu interactie op kleine schermen](#Menu-interactie-op-kleine-schermen)<br/>
[Menu interactie zonder JavaScript](#Menu-interactie-zonder-JavaScript)<br/>

[Accessibility van het menu](#Accessibility-van-het-menu)<br/><br/>

[**_Kenmerken_**](#Kenmerken)<br/>
[Styleguide](#Styleguide)<br/>

[Code conventies](#code-conventies)<br/>
[Ademruimte en inspringen in HTML](#Ademruimte-en-inspringen-inHTML)<br/>
[Volgorde en nesten van CSS selectors](#Volgorde-en-nesten-van-CSS-selectors)<br/>
[Nesten van media queries](#Nesten-van-media-queries)<br/>
[Naamgeving](#Naamgeving)<br/>

[HTML](#HTML)<br/>

[CSS](#CSS)<br/>

[JavaScript](#JavaScript)<br/>


## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
### Responsiveness
#### Overzicht pagina
Voordat ik begon met de responsiveness, heb ik een one-column layout gemaakt. Eerst heb ik de HTML geschreven en daarna elk element gestyled zonder het te verplaatsen.<br/>
![one_column_layout-1](https://github.com/user-attachments/assets/d4a28049-7741-4742-92d7-af6ae4cd5ac8)
![one_column_layout-2](https://github.com/user-attachments/assets/663ab3bf-c30b-461d-beba-2921419dae77)
![one_column_layout-3](https://github.com/user-attachments/assets/d5eddc7a-a64d-4e35-8be0-b11bd1fb6ddc)


Daarna ben ik verder gegaan met een mobile-first. Het kleinste apparaat waarop de website goed werkt, heeft een schermbreedte van 320px.<br/>
Hiervoor moest ik de layout van de elementen binnen de overzichtskaartjes aanpassen aan.<br/>
Het menu heb ik van het scherm weggeschoven. Als de gebruiker het menu nodig heeft, kan hij op het hamburger-icoon klikken om het te openen.<br/>
![img-responsive_overzicht-320px](https://github.com/user-attachments/assets/00cef6a3-205a-4a2e-bbdd-0afaa017529b)


De volgende breakpoint is bij 430px. Het enige verschil hier is dat het meter-element in de overzichtskaartjes nu aan de rechterkant staat.<br/>
![img-responsive_overzicht-430px-1](https://github.com/user-attachments/assets/b163ad3a-d08c-4f96-8797-bf0ae1be90d0)
![img-responsive_overzicht-430px-2](https://github.com/user-attachments/assets/8574f774-21d9-4f26-b549-0cdbf689e364)


Vanaf 510px komen de overzichtskaartjes overeen met het Figma design.<br/>
![img-responsive_overzicht-510px-1](https://github.com/user-attachments/assets/525f93f5-de76-4b76-a73b-e5e4312c8450)
![img-responsive_overzicht-510px-2](https://github.com/user-attachments/assets/78bed694-c9b1-4b56-9b05-bb46d655d231)


Bij de breakpoint van 1020px krijgt de layout twee kolommen voor de overzichtskaartjes.
![img-responsive_overzicht-1020px-1](https://github.com/user-attachments/assets/6cbd962a-b085-4061-a56b-26fecc43df7b)
![img-responsive_overzicht-1020px-2](https://github.com/user-attachments/assets/2b6a1017-bb79-4aca-bed2-41af0626f2b4)


Bij de breakpoint van 1250px staat het menu altijd in beeld.
![img-responsive_overzicht-1250px-1](https://github.com/user-attachments/assets/8fc6d7b0-d947-48ea-9229-5eaf4c28d95a)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Details pagina
320px is ook het kleinste scherm waarop de details pagina goed werkt. Op dit scherm staan alle elementen onder elkaar.<br/>
De layout van de automatische scankaart is het meest veranderd, omdat dit het breedste element was in het design.<br/>
Het design was gemaakt voor grote schermen.

https://github.com/user-attachments/assets/0e705b55-3e0c-4224-b6be-e6535c9eca28


Als er één of twee checkmarks zijn, passen ze naast elkaar. Voor drie is er niet genoeg ruimte, dus staan de checkmarks tot 430px onder elkaar.<br/>
![details_checkmark-1](https://github.com/user-attachments/assets/ef921f50-8931-4da9-bb30-8fdc24e0c7f1)
![details_checkmark-2](https://github.com/user-attachments/assets/7d8155ea-796f-40d0-9ea2-cb1624a75170)

vanaf 475px is er genoeg plaats voor een extra kolom in de automatische scankaart.<br/>
![details_aandacht_vereist-1](https://github.com/user-attachments/assets/93aa0919-a919-4f5a-9514-41443073d373)
![details_aandacht_vereist-2](https://github.com/user-attachments/assets/e7be7c58-819d-45c4-a0d2-b27e6f152232)


Bij 520px krijgt de filtersectie een nieuwe kolom.<br/>
![details_filters-1](https://github.com/user-attachments/assets/4f11be53-f668-40fb-9a93-959b4161f3c7)
![details_filters-2](https://github.com/user-attachments/assets/5a40e551-da53-4a45-9515-21ff63fb127e)


Bij 580px komt de knop naast het meter-element in de automatische scankaart.<br/>
![details_auto_scan-1](https://github.com/user-attachments/assets/5cede725-03e4-47af-9c9c-3bb7b0f131a8)
![details_auto_scan-2](https://github.com/user-attachments/assets/95d282c5-3f63-4832-a536-07b1003705d5)


Bij 990px komt er een tweede kolom voor de kaartjes onderaan de pagina.
![details_kaartjes-1](https://github.com/user-attachments/assets/b2379f35-9fa8-4129-b9be-e49f10d905f9)
![details_kaartjes-2](https://github.com/user-attachments/assets/75a20868-1f8d-48ff-a21f-df2530ab2cf0)


Bij 1030px komen alle elementen in de automatische scankaart naast elkaar te staan, net zoals in het design.
![details_auto_scan-2 1](https://github.com/user-attachments/assets/01f1c009-f240-45c0-a9f3-c31d8b3a6995)
![details_auto_scan-2 2](https://github.com/user-attachments/assets/ac7327ac-ede6-463e-a790-9af753a7be5b)


Bij 1250px komt het menu op beeld en verdwijnt het hamburger-menu.
![details_menu-1](https://github.com/user-attachments/assets/d2a07fed-1894-4147-8833-332143699eaa)
![details_menu-2](https://github.com/user-attachments/assets/70fe6784-6319-4b38-b77b-265f63da0f0d)


Bij 1360px komt er een derde kolom voor de kaartjes onderaan de pagina.

https://github.com/user-attachments/assets/93789727-057d-4896-afad-f0a9360764ca


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### interacties
#### Button interacties<br/>
Wanneer een gebruiker met de muis over een knop beweegt (hoveren), wordt de knop groter en krijgt het een schaduw.<br/>
Dit visuele effect geeft aan dat de knop interactief is en dat de gebruiker hiermee iets kan doen.<br/>
Bij een klik op de knop wordt een korte animatie getoond, de knop wordt kleiner en gaat daarna terug naar zijn oorspronkelijke grootte.<br/>
Dit geeft visuele feedback dat de interactie succesvol was.<br/>
De tweede video laat zien hoe de knop functioneert wanneer deze naar een andere pagina gaat.

https://github.com/user-attachments/assets/cf2c50b9-83ed-4683-8ae6-eff5d2585301

https://github.com/user-attachments/assets/bc510f99-884f-4ce6-89ac-73a4bd9c74f6

<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Menu interactie op grote schermen<br/>
Op grote schermen is het menu altijd open.
De linkjes in het menu worden ook groter en krijgen een underline als je eroverheen gaat. Dit laat zien dat je er iets mee kunt doen.<br/>
De namen van de linkjes geven de gebruiker een idee naar welke pagina hij toe gaat.

https://github.com/user-attachments/assets/da94ceb2-706c-4b9a-9209-ed07d78062af


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Menu interactie op kleine schermen<br/>
Op kleine schermen is er een hamburger-menu aan de linkerkant van de pagina. Als je hierop klikt, schuift het menu in beeld.<br/>
Eerst wordt de achtergrond donkerder. Daarna verschijnt de achtergrond van het menu. Dit heet "staging" volgens de Disney animatie principes<br/>
De linkjes verschijnen één voor één van boven naar beneden, met 25 milliseconden vertraging ertussen. Dit heet het "timing" uit de Disney animatie principes<br/>

Het menu kan worden gesloten door op het kruisje bovenaan te klikken, of door buiten het menu te klikken.


https://github.com/user-attachments/assets/370b233c-1e4d-49b8-ab85-5b661f37893e

<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Menu interactie zonder JavaScript<br/>
Als er iets mis is met JavaScript, is er een fallback. Deze werkt met een checkbox en een label.<br/>
Het label heeft het hamburger-menu erin. En de checkbox wordt met CSS van het scherm weggeschoven.

Met de ":checked" selector in CSS wordt gecontroleerd of de checkbox is aangevinkt. Als dat het geval is, slide het menu op beeld.
Omdat het menu eerst met JavaScript is gemaakt en daarna de fallback is toegevoegd, ziet de animatie er iets anders uit.
Ook is er geen aparte sluitknop in het menu. In plaats daarvan schuift het label mee naar rechts, zodat het opnieuw kan worden gebruikt om het menu te sluiten.

https://github.com/user-attachments/assets/a1db0216-9852-4785-a245-3a340c286b29

<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### Accessibility van het menu
Voor het hamburgermenu gebruik ik het inert-attribuut. Dit zorgt ervoor dat gebruikers niet met de menu-elementen kunnen klikken of interactie hebben wanneer het menu dicht is, en voorkomt dat de screenreader deze elementen voorleest.

Als het hamburgermenu wordt geopend, wordt het inert-attribuut via JavaScript verwijderd. Bij het sluiten van het menu komt het attribuut weer terug.

Het inert-attribuut wordt alleen gebruikt op kleine schermen. Als de schermbreedte groter is dan 1250px, wordt het attribuut weggehaald, omdat het menu dan altijd zichtbaar is. 

[JavaScript code](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/8d7e1e46d8a092f77676a231d9bffb6f5be51b0e/scripts/main.js#L85C1-L106C2)
## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### Styleguide
De huisstijl is gebaseerd op dit [figma design](https://www.figma.com/design/jk7gjHw03a0DnXfNAR2PMh/FDND-AccessDash-opdracht-januari-2025?node-id=0-1&t=W1B5NXcLbl0Krwrk-1)<br/>
Dit is een HTML-pagina met alle classes en custom properties van de [Styleguide](https://vsheo.github.io/the-startup-responsive-interactive-website/styleguide.html)

De font sizes voor titels zijn responsive gemaakt met clamp, zodat ze niet te groot lijken op kleine schermen
* [font sizes met clamp](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/c340d6a951260b15b64532749e0210bdee1acfec/styles/stylesheet.css#L50C1-L58C71)

Naamgeving van custom properties
Het eerste, en soms ook het tweede, woord geeft aan waarvoor de custom property bedoeld is, en het laatste woord geeft aan wat het verandert.
* Bijvoorbeeld, 'background-primary': het eerste woord geeft aan dat het voor de achtergrond bedoeld is, en het tweede woord geeft aan dat het de primaire kleur is.
  * [voorbeeld in stylesheet](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/c340d6a951260b15b64532749e0210bdee1acfec/styles/stylesheet.css#L18C1-L19C37)
* In dit voorbeeld gebruik ik twee woorden om aan te geven voor welk element de custom property bedoeld is.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/c340d6a951260b15b64532749e0210bdee1acfec/styles/stylesheet.css#L42C1-L42C49)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### code conventies
#### Ademruimte en inspringen in HTML
* Elk child element is één tab verder ingesprongen dan het vorige. Eén tab staat gelijk aan vier spaties.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L25C1-L33C18)
* Inline-elementen staan op dezelfde regel, ook wanneer er meerdere child-elementen zijn die ook inline zijn.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L45C1-L53C18)
* Block-elementen hebben een lege regel erboven en eronder. De child-elementen staan onder elkaar.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L75C1-L81C23)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Volgorde en nesten van CSS selectors
* De selectors in CSS volgen dezelfde volgorde als de elementen in HTML.
  * [link naar styles.css](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css)
* In HTML heb ik mijn pagina verdeeld in secties, bijvoorbeeld één voor het menu, één voor de heading van de pagina, en één voor de main content. CSS-nesting volgt dezelfde structuur. Binnenin zijn er weer geneste elementen. Deze nesting komt overeen met HTML block-elementen. Bijvoorbeeld, een article in HTML bevat meerdere elementen. In CSS worden alle child-elementen van deze article genest.
  * [Dit is een section in HTML, en deze is genest in CSS](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L328C1-L461C2)
  * [Button met een child element genest](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L413C1-L431C10)
 * Als een element twee classes nodig heeft voordat er iets verandert, gebruik ik de &-selector, die ook genesteld wordt.
   * [nested "&" selector](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L442C1-L460C6)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Nesten van media queries
* Media queries zijn genest en staan bovenaan, direct onder de styling die verandert bij een andere schermbreedte. Als er geen eerdere styling is, staat de media query direct onder de selector.
  * [2 media queries voor een article](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L345C1-L381C10)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Naamgeving
* HTML & CSS
  * In HTML word kebab casing gebruikt. De naam geeft aan waar het element is.
    * bijvoorlbeeld: "overzicht-main-content", dit geeft aan dat het een element is op de overzicht pagina. En de main content staat in deze element
      * [overzicht-main-content](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L72)
    * details-top-content: dit is op de details pagina, en het heeft iets te maken met de elementen die bovenaan de pagina staan
    * [details-top-content](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/details.html#L73)

* JavaScript
  * Voor JavaScript wordt CamelCase gebruikt
  * Als er een HTML/CSS class is die alleen via JavScript wordt toegevoegd, dan heeft deze class ook camelCase.
    * [JS camelCase voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/scripts/main.js#L12C1-L14C63)
    * [CSS camelCase voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L442C1-L460C6)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### HTML
* overzicht pagina
  * De HTML bestaat voornamelijk uit een nav voor het menu, een section voor de heading van de pagina, en een div-container met daarin articles, wat de hoofdinhoud van de pagina is.
  * Ik heb ook een checkbox met een label. Deze is op display: none gezet met JavaScript. Als JavaScript niet laadt, is dit de knop die het hamburger menu opent.
  * Als laatste heb ik ook een div toegevoegd, die de achtergrond wat donkerder maakt wanneer het hamburgermenu open is
  * [link naar index.html](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/main/index.html)

* Details pagina
  * Deze pagina heeft dezelfde elementen als de overzicht pagina
  * In plaats van de div die de hoofdinhoud bevat, is de hoofdinhoud op de detailpagina verdeeld in een section met de twee bovenste elementen, een aside met een zoekbalk en filterknoppen, en een grid met meerdere articles.
  * [link naar details.html](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/main/details.html)

* error pagina
  * Als er op een link wordt geklikt die naar een pagina leidt die nog niet bestaat, komt de gebruiker terecht op een pagina die aangeeft dat de pagina niet gevonden kan worden.
  * [link naar construction.html](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/main/construction.html)

<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### CSS
* Voor CSS maak ik gebruik van twee stylesheets:
  * de eerste bevat de huisstijl
    * [strylesheet.css](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/main/styles/stylesheet.css)
  * en de tweede is voor de styling van alle elementen, de layout van de pagina en de media queries.
    * [styles.css](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/main/styles/styles.css)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### JavaScript
JavaScript wordt gebruikt om het hamburgermenu open en dicht te maken. JS luistert naar een klik op de hamburgerknop, voegt wat classes toe en haalt het inert-attribuut weg.
Als het menu weer dichtgaat, worden de classes verwijderd en het attribuut weer weggehaald.<br/>
[link naar main.js](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/main/scripts/main.js)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
## Bronnen
[meter bar](https://css-tip.com/circular-progress/)<br/>
[hamburger menu](https://www.youtube.com/watch?v=m7YDWNz65iI)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


