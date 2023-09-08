export class CookieUtils {
  /**
   * @param {string} key - The `key` parameter is a string that represents the name of the cookie that
   * you want to retrieve the value for.
   * @returns The method is returning the value of the cookie with the specified key.
   */
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

  /**
   * @param {string} key - A string representing the name of the cookie.
   * @param {string | number} value - The `value` parameter is the value that you want to set for the cookie.
   * @param {Date | null} [time=null] - The `time` parameter is a optional parameter of type `Date |
   * null`.
   */
  static set(key: string, value: string | number, time: Date | null = null) {
    const cookie = `${key}=${encodeURIComponent(value)}`;
    const expires = time ? `; expires=${time.toUTCString()}` : '';
    const path = `; path =/`;
    document.cookie = `${cookie}${expires}${path}`;
  }

  static remove(key: string) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
