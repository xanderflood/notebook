import { Options } from './options'
import { options as opts } from './options.staging'

export const options: Options = opts;
export const environment = {
  production: true,
  reduxDevTools: true,
  mockBackend: false,
};
