import { Options } from './options'
import { options as opts } from './options.prod'

export const options: Options = opts;
export const environment = {
  production: true,
  reduxDevTools: false,
  mockBackend: false,
};
