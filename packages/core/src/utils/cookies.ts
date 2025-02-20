type SetCookieConfigs = {
  days: number
  path: string
  sameSite: 'Lax' | 'Strict' | 'None'
}

const defaultConfigs: SetCookieConfigs = {
  days: 365,
  path: '/',
  sameSite: 'Lax',
}

export const setCookie = (
  name: string,
  value: string,
  configs?: Partial<SetCookieConfigs>,
) => {
  const finalConfig = { ...defaultConfigs, ...configs }
  const encodedValue = encodeURIComponent(value)
  const expires = new Date(Date.now() + finalConfig.days * 864e5).toUTCString()
  document.cookie =
    `${name}=${encodedValue}; expires=${expires}; path=${finalConfig.path}; SameSite=${finalConfig.sameSite}`
}

export const getCookie = (name: string) => {
  const cookie = document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=')
    return parts[0] === name && typeof parts[1] === 'string'
      ? decodeURIComponent(parts[1])
      : r
  }, '')

  if (cookie === '') {
    return null
  }

  return cookie
}

export const deleteCookie = (name: string, path = '/') => {
  const config = { ...defaultConfigs, days: -1, path: path }
  setCookie(name, '', config)
}
