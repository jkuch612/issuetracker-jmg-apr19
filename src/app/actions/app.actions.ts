import { Action } from '@ngrx/store';

export const APP_START = '[Applicaiton] Start';
export class ApplicationStarted
  implements Action {
  readonly type = APP_START;
  constructor() { }
}

export type ApplicationActions = ApplicationStarted;
