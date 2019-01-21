import { Options } from './options'
import { options as opts } from './options.dev'

export const options: Options = opts;
export const environment = {
  production: false,
  reduxDevTools: true,
  mockBackend: true,
};
