import { fetchGitHubApi } from "./fetch.js";
import { responseTreatment } from "./common-functions.js";

const firstDiv = document.createElement("div");
firstDiv.innerText = "Olá, por favor digite um nome";
document.body.appendChild(firstDiv);
const nameInput = document.createElement("input");
nameInput.id = "userName";
document.body.appendChild(nameInput);
const inputButton = document.createElement("button");
inputButton.innerText = "CLICAR";
inputButton.addEventListener("click", async () => {
  const userName = document.getElementById("userName").value;
  if (!userName) {
    alert("Nome é obrigatório.");
  } else {
    const responseFromGithub = await fetchGitHubApi(userName);
    responseTreatment(responseFromGithub);
  }
});
document.body.appendChild(inputButton);
