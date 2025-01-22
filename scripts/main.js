// wat doet deze script?
// 1: haalt display none weg van het hamburger menu
// zodat er geen hamburger menu is als JS niet inlaad (het menu is dan open)
// 2: add class om menu te krijgen.
// 3: voegt de atribute inert toe of haalt het weg wanneer dat nodig is.
// zodat je niet met tab in het menu kan als het menu gesloten is.
// source: https://www.youtube.com/watch?v=m7YDWNz65iI

// selecteer de checkbox hamburger menu die zonder JS werkt
const hamburgerMenuCheckbox = document.querySelector('.checkbox-label');

// selecteer de buttons om het menu open en dicht te maken
const menuButtonOpen = document.querySelector('.open-menu');
const menuButtonClose = document.querySelector('.close-menu');

// selecteer de overlay
const menuOverlay = document.querySelector('.overlay');

// selecteer het menu
const menuNav = document.querySelector('.menu');

// selecteer de heading en main content
const paginaHeading = document.querySelector('.pagina-heading');
const overzichtMainContent = document.querySelector('.overzicht-main-content');

// details pagina main content
const detailTopContent = document.querySelector('.details-top-content');
const detailSearchFilters = document.querySelector('.details-search-filters');
const detailMainContent = document.querySelector('.details-pagina-kaartjes-container');

// geef een true of false terug als het scherm kleiner of groter is dan 1250px
const screenSize = window.matchMedia("(width < 1250px)");

// selecteer alle nav links
const navLinks = document.querySelectorAll('nav a');


// selecteer de li in het menu
const liAnimation = document.querySelectorAll('.menu li');



// add classes
// zet hamburger menu checkbox op display none
hamburgerMenuCheckbox.classList.add('hidden');

// breng de buttons op scherm
menuButtonOpen.classList.remove('hidden');
menuButtonClose.classList.remove('hidden');

// schuif het menu weg van beeld
menuNav.classList.add('menu-hamburger');

// add de classes alleen als de 2 elementen bestaan op de pagina.
if (paginaHeading && overzichtMainContent) {
    // overzicht pagina nieuwe positie heading + main content (met hamburger menu)
    paginaHeading.classList.add('metHamburger');
    overzichtMainContent.classList.add('metHamburger');
}
else {
    console.log('elements not found');
}

// add de classes alleen als de elementen bestaan op de pagina.
if (detailTopContent && detailSearchFilters && detailMainContent) {
    // detail pagina nieuwe positie top content + search & filters + pagina kaartjes (met hamburger menu)
    paginaHeading.classList.add('metHamburger');
    detailTopContent.classList.add('metHamburger');
    detailSearchFilters.classList.add('metHamburger');
    detailMainContent.classList.add('metHamburger');
}
else {
    console.log('elements not found');
}




// run de functie updateMenu wanneer er een verandering in scherm plaats vindt
screenSize.addEventListener('change', (e) => updateMenu(e));

// als het scherm kleiner is dan 1250px dan krijgt het menu de attribute inert
// is het scherm groter, dan wordt inert weg gehaald
function updateMenu(e) {
    const isMobile = e.matches;
    console.log(isMobile)
    if (isMobile) {
        menuNav.setAttribute('inert', 'true');
        // haal inert weg zodat het hamburgermenu geklikt kan worden op kleine schermen
        menuButtonOpen.removeAttribute('inert');
    }
    else {
        menuNav.removeAttribute('inert');
        // voeg inert toe zodat tab index niet perongeluk naar het hamburger menu icon gaat.
        menuButtonOpen.setAttribute('inert', 'true');
    }
}

// loop over alle nav links en voeg een event listener toe
// als een link geklikt wordt, gaat het menu dicht
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // sluit het menu
        closeMenu();
    });
});



// functies
// dit moet gebeuren als het menu open gaat
function openMenu() {
    // laat de screen reader weten dat het menu nu open is
    menuButtonOpen.setAttribute('aria-expanded', 'true');

    // haal inert weg als het menu open is
    menuNav.removeAttribute('inert');

    menuNav.classList.add('active');

    // animation
    // li 1 voor 1 op scherm
    liAnimation.forEach(li => {
        li.classList.add('li-animation');
    });
};

// dit moet gebeuren als het menu dicht gaat
function closeMenu() {
    // laat de screen reader weten dat het menu gesloten is
    menuButtonOpen.setAttribute('aria-expanded', 'false');

    // plaats inert terug als het menu dicht is
    menuNav.setAttribute('inert', 'true');  

    menuNav.classList.remove('active');

    // animation
    liAnimation.forEach(li => {
        li.classList.remove('li-animation');
    });
};



// roep de functies aan
updateMenu(screenSize);

// open en close het menu als de buttons geklikt worden
// open menu
menuButtonOpen.addEventListener('click', openMenu);
// sluit menu
menuButtonClose.addEventListener('click', closeMenu);

// close het menu als er buyiten het menu geklikt wordt
menuOverlay.addEventListener('click', closeMenu);
