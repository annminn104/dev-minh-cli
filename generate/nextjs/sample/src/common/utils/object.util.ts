export class ObjectUtils {
  /**
   * Remove all properties that have empty value like: ```'', null, 'null', undefine```
   * @param obj Object need execute
   * @returns Object after clear empty properties
   */
  static removeEmpty(obj: Record<string, unknown>): Record<string, unknown> {
    Object.keys(obj).forEach(
      (k) =>
        (obj[k] == '' || obj[k] == null || obj[k] == 'null' || obj[k] == undefined) && delete obj[k]
    );
    return obj;
  }

  /**
   * @param {Record<string, unknown>} obj - The `obj` parameter is an object that contains key-value pairs representing
   * query parameters.
   * @returns The function `setQueryParams` returns a string that represents the query parameter
   */
  static setQueryParams(obj: Record<string, unknown>): string {
    if (obj && Object.keys(obj).length > 0) {
      return `?${Object.keys(obj)
        .filter((key) => {
          const value = obj[key];
          return value != null && value.toString() != '' && value != undefined && value != 'null';
        })
        .map((key) => {
          const value = obj[key];
          return [key, encodeURIComponent(String(value))].join('=');
        })
        .join('&')}`;
    } else {
      return '';
    }
  }
  /**
   * @param {string} query - The query string.
   * @param {string} key - The key of the desired query parameter.
   * @returns {string | null} - Returns the value of the given key from the query string or null if not found.
   */
  static getQueryParams(query: string, key: string): string | null {
    const params = new URLSearchParams(query);
    return params.get(key);
  }
}
