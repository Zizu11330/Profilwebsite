function greetUser() {
  const name = document.getElementById("nameInput").value;
  const greetingMessage = document.getElementById("greetingMessage");

  if (name) {
    greetingMessage.textContent = `Hallo, ${name}!`;
  } else {
    greetingMessage.textContent = "Bitte gib dein Name ein";
  }
}
