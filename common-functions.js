export function responseTreatment(responseFromGithub) {
  if (responseFromGithub.status_code !== 200) {
    alert("Erro");
    document.body.removeChild(login);
    document.body.removeChild(avatar);
    return;
  }
  const gitHubInterface = {
    name: responseFromGithub.name,
    login: responseFromGithub.login,
    html_url: responseFromGithub.html_url,
    repos_url: responseFromGithub.repos_url,
    avatar_url: responseFromGithub.avatar_url,
  };
  Object.keys(gitHubInterface).forEach((key) => {
    let keyDiv = document.getElementById(key);
    switch (key) {
      case "login":
      case "name":
        if (!keyDiv) {
          keyDiv = document.createElement("div");
          keyDiv.id = key;
          keyDiv.innerText = gitHubInterface[key];
          document.body.appendChild(keyDiv);
        } else {
          keyDiv.innerText = gitHubInterface[key];
        }
        break;
      case "avatar_url":
        if (!document.getElementById("avatarImg")) {
          const avatar = document.createElement("img");
          avatar.id = "avatarImg";
          avatar.src = gitHubInterface.avatar_url;
          document.body.appendChild(avatar);
        } else {
          const avatar = document.getElementById("avatarImg");
          avatar.src = gitHubInterface.avatar_url;
        }
        break;
      case "html_url":
      case "repos_url":
        if (!keyDiv) {
          const newDiv = document.createElement("div");
          keyDiv = document.createElement("a");
          keyDiv.id = key;
          keyDiv.setAttribute(`href`, gitHubInterface[key]);
          keyDiv.innerText = gitHubInterface[key];
          newDiv.appendChild(keyDiv);
          document.body.appendChild(newDiv);
        } else {
          keyDiv.innerText = gitHubInterface[key];
          keyDiv.setAttribute("href", keyDiv);
        }
        break;
      default:
        break;
    }
  });
}

// if (!document.getElementById("login")) {
//   const login = document.createElement("div");
//   login.id = "login";
//   login.innerText = responseFromGithub.login;
//   document.body.appendChild(login);
// } else {
//   login.innerText = responseFromGithub.login;
// }
// if (!document.getElementById("avatarImg")) {
//   const avatar = document.createElement("img");
//   avatar.id = "avatarImg";
//   avatar.src = responseFromGithub.avatar_url;
//   document.body.appendChild(avatar);
// } else {
//   const avatar = document.getElementById("avatarImg");
//   avatar.src = responseFromGithub.avatar_url;
// }
