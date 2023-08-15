export class CookieUtils {
  static get(key: string) {
    const cookies = document.cookie;
    const array = cookies.split(';').filter((str) => {
      const arr = str.trim().split('=');
      return arr[0] == key;
    });
    if (!array || array.length <= 0) {
      return '';
    }
    return decodeURIComponent(array[0].trim().split('=')[1]);
  }

  static set(key: string, value: any, time: Date | null = null) {
    const cookie = `${key}=${encodeURIComponent(value)}`;
    const expires = time ? `; expires=${time.toUTCString()}` : '';
    const path = `; path =/`;
    document.cookie = `${cookie}${expires}${path}`;
  }

  static remove(key: string) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
