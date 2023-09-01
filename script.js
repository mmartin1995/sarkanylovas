// Az elem kiválasztása
var body = document.body;
var backgroundimage = document.getElementById("backgroundimage");

// Az eseménykezelő hozzáadása a görgetéshez
window.addEventListener('scroll', handleScroll);

// Görgetés eseménykezelő függvény
function handleScroll() {
  // A görgetés pozíciójának lekérdezése
  var scrollPosition = window.scrollY;

  // Háttérszín beállítása a görgetés pozíciójától függően
  var hue = scrollPosition * -0.01 + 90; // Az árnyalat értéke a görgetés pozíciójától függ
  var saturation = scrollPosition * -0.025 + 98;
  var backgroundColor = `hsl(31, ${saturation}%, ${hue}%)`;
  var invert = scrollPosition * 0.01 + 70;
  var filter = `invert(${invert}%)`;


  body.style.backgroundColor = backgroundColor;
  // backgroundimage.style.backgroundColor = backgroundColor;
  backgroundimage.style.filter = filter;

}


