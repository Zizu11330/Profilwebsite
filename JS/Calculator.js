let display = ""; //Speichern der Variable

function updateDisplay() {
  const textfeld = document.querySelector(".Textfeld");
  textfeld.textContent = display; // Aktualisiere das Textfeld
}

function safe1() {
  display += "1";
  updateDisplay();
}

function safe2() {
  display += "2";
  updateDisplay();
}

function safe3() {
  display += "3";
  updateDisplay();
}

function safe4() {
  display += "4";
  updateDisplay();
}

function safe5() {
  display += "5";
  updateDisplay();
}

function safe6() {
  display += "6";
  updateDisplay();
}

function safe7() {
  display += "7";
  updateDisplay();
}

function safe8() {
  display += "8";
  updateDisplay();
}

function safe9() {
  display += "9";
  updateDisplay();
}2

function safe0() {
  display += "0";
  updateDisplay();
}

function safePlus() {
  display += " + ";
  updateDisplay();
}

function safeMinus() {
  display += " - ";
  updateDisplay();
}

function safeMal() {
  display += " * ";
  updateDisplay();
}

function safeDurch() {
  display += " / ";
  updateDisplay();
}

function safeGleich() {
  try {
    display = eval(display); // Berechnung der Eingabe
    updateDisplay();
  } catch (error) {
    display = "Fehler"; // Fehleranzeige bei ungültigem Ausdruck
    updateDisplay();
    setTimeout(() => {
      display = "";
      updateDisplay();
    }, 2000); // Fehlernachricht nach 2 Sekunden löschen
  }
}

function löschen() {
  display = ""; // Anzeige leeren
  updateDisplay();
}
