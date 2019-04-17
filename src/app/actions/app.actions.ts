import { Action } from '@ngrx/store';

export const APP_START = '[Applicaiton] Start';
export class ApplicationStarted
  implements Action {
  readonly type = APP_START;
  constructor() { }
}

export const APPPLICATION_ERROR = '[Applicaiton] error';
export class ApplicationError
  implements Action {
  readonly type = APPPLICATION_ERROR;
  constructor(public message: string, public feature: string) { }
}

export type ApplicationActions = ApplicationStarted | ApplicationError;
