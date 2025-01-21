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
[Ademruimte en inspringen](#Ademruimte-en-inspringen)<br/>
[Volgorde en nesten van CSS selectors](#Volgorde-en-nesten-van-CSS-selectors)<br/>
[Nesten van media queries](#Nesten-van-media-queries)<br/>

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
### Responsiveness
#### Overzicht pagina
Voor de responsiveness ben ik begonnen met een one-column layout. Ik heb eerst de HTML geschreven en daarna elk element gestyled zonder het te verplaatsen.
![one_column_layout-1](https://github.com/user-attachments/assets/d4a28049-7741-4742-92d7-af6ae4cd5ac8)
![one_column_layout-2](https://github.com/user-attachments/assets/663ab3bf-c30b-461d-beba-2921419dae77)
![one_column_layout-3](https://github.com/user-attachments/assets/d5eddc7a-a64d-4e35-8be0-b11bd1fb6ddc)


Daarna ben ik verder gegaan met een mobile-first aanpak. Het kleinste apparaat waarop de website goed te bekijken is, heeft een schermbreedte van 320px.<br/>
Hiervoor moest ik de layout van de elementen binnen de overzichtskaartjes aanpassen aan.<br/>
Het menu heb ik van het scherm weggeschoven. Als de gebruiker het menu nodig heeft, kan hij op het hamburger-icoon klikken om het te openen.

https://github.com/user-attachments/assets/1d5f4e66-92a2-4442-a4f2-35c0d8dea155


De volgende breakpoint is bij 430px. Het enige verschil hier is dat het meter-element in de overzichtskaartjes nu aan de rechterkant staat.
Bij 510px verandert dit element nog een keer. Vanaf 510px gaan de overzichtskaartjes weer terug naar de layout van de oorspronkelijke one-column layout.

https://github.com/user-attachments/assets/0566321e-bf5c-4046-bd99-d38c52c5e583

https://github.com/user-attachments/assets/7194a94d-8676-4f8d-8e32-478b77990078


Bij de breakpoint van 1020px krijgt de layout twee kolommen voor de overzichtskaartjes.

https://github.com/user-attachments/assets/cf0026cc-ff2d-4352-8e1f-6cc738df6f66


Bij de breakpoint van 1250px staat het menu altijd in beeld.

https://github.com/user-attachments/assets/7a420915-3a07-4852-a48e-339bb7e754ba


<!-- ----------------------------------------------------------------------------------------------------------------------------------------- -->
#### Details pagina




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



## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### Styleguide

### code conventies

#### Ademruimte en inspringen

#### Volgorde en nesten van CSS selectors

#### Nesten van media queries

#### Naamgeving

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


