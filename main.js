/*
LOS BOTONES QUE TIENE QUE TENER:
info

play/pause
velocidad
ir arriba de todo
ir abajo de todo

fuente
tamaño de letra
justificado
márgenes

invertir colores

*/

var scroll_speed = 1.5;
var scroll_position = 0;
var font_size = 9;
var is_scrolling = false;

document.addEventListener("click", clickDocument);

document.addEventListener('keydown', key);

font_selector = document.getElementById("font_selector");
font_selector.addEventListener("change", font_selector_change, false);

text_size_selector = document.getElementById("text_size_selector");
text_size_selector.addEventListener("change", text_size_selector_change, false);

margins_selector = document.getElementById("margins_selector");
margins_selector.addEventListener("change", margins_selector_change, false);

invert = document.getElementById("invert");
invert.addEventListener("change", invert_change, false);


margins_selector = document.getElementById("margins_selector");


pageScroll();

updateVars();

function key(e) {
  if (e.location === 3 || event.key === 'Escape') {
    document.getElementById("ELTEXTO").blur();
  }
  if (event.key === '7') {
    if (scroll_speed < 80) {
      scroll_speed *= 1.5;
    }
  }
  if (event.key === '4') {
    if (scroll_speed > 1.5) {
      scroll_speed /= 1.5;
    }
  }
  if (event.key === '0') {
    is_scrolling = !is_scrolling;
  }
  if (event.key === '9') {
    font_size += 1;
    text_size_selector.value = font_size;
  }
  if (event.key === '6') {
    font_size -= 1;
    text_size_selector.value = font_size;
  }
  updateVars();
}


function text_size_selector_change(e) {
  console.log(text_size_selector.value);
  font_size = text_size_selector.value;
  updateVars();
}

function margins_selector_change(e) {
  console.log(margins_selector.value);
  margin = margins_selector.value;
  document.getElementById('ELTEXTO').style.marginRight = margin + "vmin";
  document.getElementById('ELTEXTO').style.marginLeft = margin + "vmin";
}

function font_selector_change(e) {
  console.log(font_selector.value);
  document.getElementById('ELTEXTO').style.fontFamily = font_selector.value;
}

function invert_change(e) {
  document.body.classList.toggle("style_dark");
  /*if (invert.checked){
  document.getElementById("ELTEXTO").style.color = "white";
  document.body.style.background = "black";
  }
  else {
  document.getElementById("ELTEXTO").style.color = "black";
  document.body.style.background = "white";
}*/
}

function clickDocument(e) {
  //document.getElementById("ELTEXTO").style.fontSize = font_size;
}

function pageScroll(e) {
  if (is_scrolling) {
    window.scrollBy(0, 1);
  }
  scrolldelay = setTimeout(pageScroll, scroll_speed);
}

function updateVars() {
  document.getElementById("ELTEXTO").style.fontSize = font_size + "vmin";
  if (is_scrolling) {
    document.getElementById("play_pause").src = "/images/play.svg";
  }
  if (!is_scrolling) {
    document.getElementById("play_pause").src = "/images/pausa.svg";
  }
}
