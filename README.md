Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Future Ready Design - AccessDash

## Inhoudsopgave
[Beschrijving](#Beschrijving)<br/>

[Responsiveness](#Responsiveness)<br/>
[Responsiveness: overzicht pagina](#Overzicht-pagina)<br/>
[Responsiveness: details pagina](#Details-pagina)<br/>

[interacties](#interacties)<br/>
[Button interacties](#Button-interacties)<br/>
[Menu interactie op grote schermen](#Menu-interactie-op-grote-schermen)<br/>
[Menu interactie op kleine schermen](#Menu-interactie-op-kleine-schermen)<br/>
[Menu interactie zonder JavaScript](#Menu-interactie-zonder-JavaScript)<br/>

[Accessibility van het menu](#Accessibility-van-het-menu)<br/><br/>


[Kenmerken](#Kenmerken)<br/>

[Styleguide](#Styleguide)<br/>

[Code conventies](#code-conventies)<br/>
[Ademruimte en inspringen in HTML](#Ademruimte-en-inspringen-inHTML)<br/>
[Volgorde en nesten van CSS selectors](#Volgorde-en-nesten-van-CSS-selectors)<br/>
[Nesten van media queries](#Nesten-van-media-queries)<br/>

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
### Responsiveness
#### Overzicht pagina
Voordat ik begon met de responsiveness, heb ik een one-column layout gemaakt. Eerst heb ik de HTML geschreven en daarna elk element gestyled zonder het te verplaatsen.
![one_column_layout-1](https://github.com/user-attachments/assets/d4a28049-7741-4742-92d7-af6ae4cd5ac8)
![one_column_layout-2](https://github.com/user-attachments/assets/663ab3bf-c30b-461d-beba-2921419dae77)
![one_column_layout-3](https://github.com/user-attachments/assets/d5eddc7a-a64d-4e35-8be0-b11bd1fb6ddc)


Daarna ben ik verder gegaan met een mobile-first. Het kleinste apparaat waarop de website goed werkt, heeft een schermbreedte van 320px.<br/>
Hiervoor moest ik de layout van de elementen binnen de overzichtskaartjes aanpassen aan.<br/>
Het menu heb ik van het scherm weggeschoven. Als de gebruiker het menu nodig heeft, kan hij op het hamburger-icoon klikken om het te openen.

https://github.com/user-attachments/assets/1d5f4e66-92a2-4442-a4f2-35c0d8dea155


De volgende breakpoint is bij 430px. Het enige verschil hier is dat het meter-element in de overzichtskaartjes nu aan de rechterkant staat.<br/>
Bij 510px verandert dit element nog een keer. Vanaf 510px gaan de overzichtskaartjes weer terug naar de layout van de oorspronkelijke one-column layout.

https://github.com/user-attachments/assets/0566321e-bf5c-4046-bd99-d38c52c5e583

https://github.com/user-attachments/assets/7194a94d-8676-4f8d-8e32-478b77990078


Bij de breakpoint van 1020px krijgt de layout twee kolommen voor de overzichtskaartjes.

https://github.com/user-attachments/assets/cf0026cc-ff2d-4352-8e1f-6cc738df6f66


Bij de breakpoint van 1250px staat het menu altijd in beeld.

https://github.com/user-attachments/assets/7a420915-3a07-4852-a48e-339bb7e754ba


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Details pagina
320px is het kleinste scherm waarop deze website goed werkt. Op dit scherm staan alle elementen onder elkaar.<br/>
De layout van de automatische scankaart is het meest veranderd, omdat dit het breedste element was in het design.<br/>
Het design was gemaakt voor grote schermen.

https://github.com/user-attachments/assets/0e705b55-3e0c-4224-b6be-e6535c9eca28


Bij 440px verandert de layout van de checkmarks in de kaartjes onderaan de pagina.<br/>
![details_checkmark-1](https://github.com/user-attachments/assets/ef921f50-8931-4da9-bb30-8fdc24e0c7f1)
![details_checkmark-2](https://github.com/user-attachments/assets/7d8155ea-796f-40d0-9ea2-cb1624a75170)

Bij 475px krijgt de automatische scankaart een extra kolom.<br/>
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

https://github.com/user-attachments/assets/0faf1d8f-6ceb-4819-8c8b-5b991b78c177

<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Menu interactie op kleine schermen<br/>
Op kleine schermen is er een hamburger-menu aan de linkerkant van de pagina. Als je hierop klikt, schuift het menu in beeld.<br/>
Eerst wordt de achtergrond wat donkerder, daarna verschijnt het menu zelf.<br/>
De linkjes komen vervolgens één voor één van boven naar beneden tevoorschijn, met 25 milliseconden extra vertraging tussen elke link.<br/>

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

skip link

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### Styleguide


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
### code conventies
#### Ademruimte en inspringen in HTML
* Elk child element is één tab verder ingesprongen dan het vorige. Eén tab staat gelijk aan vier spaties.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L25C1-L33C18)
* Inline-elementen staan op dezelfde regel, ook wanneer er meerdere child-elementen zijn die ook inline zijn.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L45C1-L53C18)
* Block-elementen hebben een lege regel boven en onder zich.
  * [voorbeeld](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/index.html#L75C1-L81C23)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Volgorde en nesten van CSS selectors
* De element selectors in CSS volgen dezelfde volgorde als de elementen in HTML.
  * [link naar styles.css](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css)
* In HTML heb ik mijn pagina verdeeld in secties, bijvoorbeeld één voor het menu, één voor de heading van de pagina, en één voor de main content. CSS-nesting volgt dezelfde structuur. Binnenin zijn er weer geneste elementen. Deze nesting komt overeen met HTML block-elementen. Bijvoorbeeld, een article in HTML bevat meerdere elementen. In CSS worden alle child-elementen van deze article genest.
  * [Dit is een section in HTML, en deze is genest in CSS](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L328C1-L461C2)
  * [Button met een child element genest](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L413C1-L431C10)
 * Als een element twee classes nodig heeft voordat er iets verandert, gebruik ik de &-selector, die ook genesteld wordt.
   * [nested "&" selector](https://github.com/vsheo/the-startup-responsive-interactive-website/blob/576e6c17d58fd6b5e62ce4e18033db5f77a006fa/styles/styles.css#L442C1-L460C6)


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Nesten van media queries


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Naamgeving
[voorbeeld]()

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


