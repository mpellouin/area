import { Platform } from 'react-native'
export const getDeepLink = (path = '') => {
  const scheme = 'http'
  const host = "https://lisolescargot.netlify.app"
  const prefix = `${scheme}://host/`
  return prefix + path
}