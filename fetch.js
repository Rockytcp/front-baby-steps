export async function fetchGitHubApi(userName) {
  const response = await fetch(`https://api.github.com/users/${userName}`, {
    method: "GET",
    mode: "cors",
  });
  const responseJson = await response.json();
  responseJson.status_code = response.status;
  return responseJson;
}
