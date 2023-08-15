export class ModifierUtils {
  /**
   * @param {string} baseClassName.
   * @param {(string | string[] | false | undefined)[]} modifiers
   * @returns a string classNames.
   */
  static map(
    baseClassName: string,
    ...modifiers: (string | string[] | false | undefined)[]
  ): string {
    return modifiers
      .reduce<string[]>((acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]), [])
      .map((m) => `-${m}`)
      .reduce<string>(
        (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
        baseClassName
      );
  }
}
