import { AlignItems, FlexDirection, JustifyContent, Position } from '@common/interfaces';
import { BREAK_POINT_ENUM, DEVICE_ENUM, FONT_SIZE_ENUM } from '../enums';

export class StylesUtils {
  /**
   * @param {string} value - The `value` parameter is a string representing a value in rem units.
   * @returns the value of `Math.round(parseFloat(value) * FONT_SIZE_ENUM.DEFAULT || 16)`.
   */
  static remToPx(value: string) {
    return Math.round(parseFloat(value) * FONT_SIZE_ENUM.DEFAULT || 16);
  }

  /**
   * @param {number} value - The value parameter is a number representing the pixel value that you want
   * to convert to rem.
   * @returns a string value in the format of `${value / FONT_SIZE_ENUM.DEFAULT || 16}rem`.
   */
  static pxToRem(value: number) {
    return `${value / FONT_SIZE_ENUM.DEFAULT || 16}rem`;
  }

  /**
   * @param  - The `responsiveFontSizes` function takes an object as its parameter with three
   * properties: `sm`, `md`, and `xl`
   * @returns The function `responsiveFontSizes` returns an object with three properties. Each
   * property represents a media query for different screen sizes and has a corresponding font size
   * value.
   */
  static responsiveFontSizes({ sm, md, xl }: { sm: number; md: number; xl: number }) {
    return {
      [`@media screen and (min-width: ${DEVICE_ENUM.MOBILE || BREAK_POINT_ENUM.SM}px)`]: {
        fontSize: this.pxToRem(sm)
      },
      [`media screen and (min-width: ${DEVICE_ENUM.TABLET || BREAK_POINT_ENUM.MD}px)`]: {
        fontSize: this.pxToRem(md)
      },
      [`@media screen and (min-width: ${DEVICE_ENUM.DESKTOP || BREAK_POINT_ENUM.XL}px)`]: {
        fontSize: this.pxToRem(xl)
      }
    };
  }

  /**
   * @param {number} fontSize - The `fontSize` parameter is a number that represents the font size in
   * pixels.
   * @param {number} lineHeight - The `lineHeight` parameter is a number that represents the desired line
   * height for the font.
   * @returns an object with two properties: "fontSize" and "lineHeight".
   */
  static fontBase(fontSize: number, lineHeight: number): { fontSize: string; lineHeight: string } {
    return {
      fontSize: this.pxToRem(fontSize),
      lineHeight: this.pxToRem(lineHeight)
    };
  }

  /**
   * @param {string | string[]} props - The `props` parameter can be either a string or an array of
   * strings. It represents the CSS properties that you want to apply the transition to.
   * @param [options] - The `options` parameter is an optional object that can contain the following
   * properties:
   * @returns a CSS transition property string.
   */
  static transitions(
    props: string | string[],
    options?: Partial<{ duration: number | string; easing: string; delay: number | string }>
  ): string {
    const propsArray = Array.isArray(props) ? props : [props];

    const { duration = '300ms', easing = 'ease', delay = '0s' } = options || {};

    const transitions = propsArray
      .map(
        (prop) =>
          `${prop} ${typeof duration === 'number' ? `${duration}ms` : duration} ${easing} ${
            typeof delay === 'number' ? `${delay}ms` : delay
          }`
      )
      .join(', ');

    return `transition: ${transitions};`;
  }

  /**
   * @param {number} height - The `height` parameter is a number that represents the height of an
   * element.
   * @returns the duration in milliseconds.
   */
  static autoHeightDurationTransition(height: number): number {
    const constantFactor = 10;

    const duration = Math.round((height / 1000) * constantFactor * 1000);

    return duration;
  }

  /**
   * @param {T | undefined} value - The `value` parameter is of type `T | undefined`, which means it
   * can either be of type `T` or `undefined`.
   * @param {T} defaultValue - The `defaultValue` parameter is the value that will be returned if the
   * `value` parameter is `undefined`.
   * @returns the value if it is not undefined, otherwise it is returning the defaultValue.
   */
  static getDefault<T>(value: T | undefined, defaultValue: T): T {
    return value !== undefined ? value : defaultValue;
  }

  /**
   * @param {number} pixel - The `pixel` parameter is a number representing the size in pixels that you
   * want to convert to viewport width (vw).
   * @returns a string value that represents the calculated value in viewport width (vw) units.
   */
  static desktopVw(pixel: number): string {
    const remValue = parseFloat(this.pxToRem(pixel));
    return `${(remValue / (DEVICE_ENUM.DESKTOP / FONT_SIZE_ENUM.DEFAULT)) * 100}vw`;
  }

  /**
   * @param {number} pixel - The `pixel` parameter is a number representing the size in pixels.
   * @returns a string value.
   */
  static tabletVw(pixel: number): string {
    const remValue = parseFloat(this.pxToRem(pixel));
    return `${(remValue / (DEVICE_ENUM.TABLET / FONT_SIZE_ENUM.DEFAULT)) * 100}vw`;
  }

  /**
   * @param {number} pixel - The `pixel` parameter is a number representing the size in pixels that you
   * want to convert to viewport width (vw).
   * @returns a string value.
   */
  static mobileVw(pixel: number): string {
    const remValue = parseFloat(this.pxToRem(pixel));
    return `${(remValue / (DEVICE_ENUM.MOBILE / FONT_SIZE_ENUM.DEFAULT)) * 100}vw`;
  }

  /**
   * @param {string} [justify=center]
   * @param {string} [align=center]
   * @returns An object with the properties `display`, `flexDirection`, `justifyContent`, `alignItems`.
   */
  static adjustFlex(
    justify: JustifyContent = 'center',
    align: AlignItems = 'center',
    direction: FlexDirection = 'row'
  ) {
    return {
      display: 'flex',
      flexDirection: direction,
      justifyContent: justify,
      alignItems: align
    };
  }

  /**
   * @param {string} [horizontal=0] - The "horizontal" offset of the box shadow.
   * @param {string} [vertical=2] - The "vertical" offset of the box shadow.
   * @param {string} [blur=4] - The "blur" applied to the box shadow.
   * @param {string} [color=rgba(0,0,0,0.1)]
   * @returns boxShadow: 'horizontal vertical blur color'
   */
  static boxShadow(
    horizontal: number = 0,
    vertical: number = 2,
    blur: number = 4,
    color: string = 'rgba(0,0,0,0.1)'
  ) {
    return {
      boxShadow: `${this.pxToRem(horizontal)} ${this.pxToRem(vertical)} ${this.pxToRem(
        blur
      )} ${color}`
    };
  }

  /**
   * @param {Position} [position=absolute]
   * @param {string} [inset=0]
   * @returns An object with the properties "position" and "inset" is being returned.
   */
  static position(position: Position = 'absolute', inset: string = '0') {
    return {
      position: position,
      inset: inset
    };
  }
}
