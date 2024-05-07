export const ACCESS_TOKEN = "accesToken"

export function signOut() {
  removeAuthToken();
  window.location.href = "/";
}

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN) || sessionStorage.getItem(ACCESS_TOKEN) || "";
}


export function setAuthToken(accessToken, remember) {
  if (remember) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    return;
  }

  sessionStorage.setItem(ACCESS_TOKEN, accessToken);
}

export function removeAuthToken() {
  localStorage.removeItem(ACCESS_TOKEN);
  sessionStorage.removeItem(ACCESS_TOKEN);
}
