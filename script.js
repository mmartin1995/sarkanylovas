// Az elem kiválasztása
var body = document.body;

// Az eseménykezelő hozzáadása a görgetéshez
window.addEventListener('scroll', handleScroll);

// Görgetés eseménykezelő függvény
function handleScroll() {
  // A görgetés pozíciójának lekérdezése
  var scrollPosition = window.scrollY;

  // Háttérszín beállítása a görgetés pozíciójától függően
  var hue = scrollPosition * -0.05 + 90; // Az árnyalat értéke a görgetés pozíciójától függ
  var saturation = scrollPosition * -0.09 + 100;
  var backgroundColor = `hsl(31, ${saturation}%, ${hue}%)`;

  body.style.backgroundColor = backgroundColor;
}
