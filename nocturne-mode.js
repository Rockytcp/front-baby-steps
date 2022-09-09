const nocturneButton = document.createElement("button");
nocturneButton.style.float = "right";
nocturneButton.innerText = "Modo Noturno";
document.body.appendChild(nocturneButton);
nocturneButton.addEventListener("click", () => {
  const body = document.body;
  body.classList.toggle("dark-mode");
});
