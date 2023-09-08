export abstract class CommonService<T extends CommonService<T>> {
  static instance: T;
  static getInstance<T extends CommonService<T>>(this: new () => T): T {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance as T;
  }
}

export interface IHttpResponse<T> {
  statusCode: number;
  data: T;
  errors: unknown;
  message: string;
}
