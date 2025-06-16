export const TOKEN_COOKIE = 'Abp.AuthToken';
export const REFRESH_TOKEN_COOKIE = 'Abp.AuthRefreshToken';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string, expireDate?: Date) {
  if (typeof document === 'undefined') return;
  let cookie = `${name}=${encodeURIComponent(value)}`;
  if (expireDate) {
    cookie += `; expires=${expireDate.toUTCString()}`;
  }
  cookie += '; path=/';
  document.cookie = cookie;
}

function deleteCookie(name: string) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

export const TokenService = {
  getToken(): string | null {
    return getCookie(TOKEN_COOKIE);
  },
  setToken(token: string, expireDate?: Date) {
    setCookie(TOKEN_COOKIE, token, expireDate);
  },
  clearToken() {
    deleteCookie(TOKEN_COOKIE);
  },
  getRefreshToken(): string | null {
    return getCookie(REFRESH_TOKEN_COOKIE);
  },
  setRefreshToken(token: string, expireDate?: Date) {
    setCookie(REFRESH_TOKEN_COOKIE, token, expireDate);
  },
  clearRefreshToken() {
    deleteCookie(REFRESH_TOKEN_COOKIE);
  }
};
export default TokenService;
