import { isNaN, isUndefined, toNumber } from 'lodash';

export class NumberUtils {
  /**
   * @param {number} number
   * @returns a string
   */
  static formatMoney(number: number): string {
    return Math.round(number).toLocaleString('en-GB');
  }

  static convertQueryParam = (param: string | number | undefined | null): number | null => {
    const numParam = Number(param);
    return typeof numParam === 'number' && !isNaN(numParam) ? numParam : null;
  };

  /**
   * @param {unknown} number
   * @returns returns a number or 0.
   */
  static parseToNumber(number: unknown): number {
    if (isUndefined(number)) {
      return 0;
    }
    const isNumber = toNumber(number);
    if (isNaN(isNumber)) {
      return 0;
    }
    return isNumber;
  }
}
