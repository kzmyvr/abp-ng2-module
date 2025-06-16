import TokenService from './token';

export interface AjaxError {
  message: string;
  details?: string;
}

export async function abpFetch(url: string, options: RequestInit = {}): Promise<any> {
  const headers = new Headers(options.headers || {});
  const token = TokenService.getToken();
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  const response = await fetch(url, { ...options, headers });

  if (!response.ok) {
    const errorBody = await response.text();
    let parsed: any;
    try { parsed = JSON.parse(errorBody); } catch { parsed = { message: errorBody }; }
    throw parsed as AjaxError;
  }

  const text = await response.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return text;
  }
}
