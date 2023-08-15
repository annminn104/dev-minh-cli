import moment from 'moment';

export class TimeUtils {
  private static formatDateTime(date: Date | string, format: string): string {
    return moment(date).format(format);
  }

  static toDateTime(date: Date | string, prefixDate = '-', prefixTime = ':'): string {
    const dateFormat = `DD${prefixDate}MM${prefixDate}YYYY`;
    const timeFormat = `HH${prefixTime}mm${prefixTime}ss`;
    return this.formatDateTime(date, `${dateFormat} ${timeFormat}`);
  }

  static toDate(date: Date | string, prefix = '-'): string {
    const format = `DD${prefix}MM${prefix}YYYY`;
    return this.formatDateTime(date, format);
  }

  static toTime(time: Date | string, prefix = ':'): string {
    const format = `HH${prefix}mm${prefix}ss`;
    return this.formatDateTime(time, format);
  }

  static toUTC(date: Date | string): string {
    return moment(date).utc().format();
  }

  static toUTCStart(date: Date | string): string {
    return moment(date).utc().startOf('day').format();
  }

  static toUTCEnd(date: Date | string): string {
    return moment(date).utc().endOf('day').format();
  }
}
