const tokenKey = 'accessToken'
export function getToken() {
  return window.localStorage.getItem(tokenKey)
}
export function setToken(value) {
  window.localStorage.setItem(tokenKey,value)
}
export function removeToken() {
  window.localStorage.removeItem(tokenKey)
}
