const TOKEN = 'token'
export function getAUTHToken() {
  return localStorage.getItem(TOKEN)
}
export function getAuthTokenByfirst() {
  let userInfo = getQueryParam()
  localStorage.setItem('token', userInfo.token)
  return userInfo
}
export function getQueryParam() {
  var paramStr = window.location.href
  if (!paramStr.includes('?')) return
  let userInfo = {}
  userInfo.id = paramStr.split('?')[1].split('=')[1]
  userInfo.token = paramStr.split('?')[1].split('=')[2]
  return userInfo
}
