import _isEqual from 'lodash/isEqual';

export class HelperUtils {
  /**
   * @param {T} data - new data with setStateAction
   * @param {T} mutation - old date in useMutation
   * @param [callback] cb edit func...
   */
  static shouldCallApiEdit<T>(data: T, mutation: T, callback?: () => void): void {
    if (!_isEqual(data, mutation) && true) {
      if (callback) {
        callback();
      }
    }
  }
}
