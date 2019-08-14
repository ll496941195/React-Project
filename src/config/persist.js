/**
 * @file config/persist.js
 *  redux-persist配置文件
 */

import localForage from 'localforage';

import { isLocalStorageSupport } from '../utils/helper';

localForage.config({
  driver: localForage.LOCALSTORAGE,
});

const config = {
  active: isLocalStorageSupport(),
  storeConfig: {
    storage: localForage,
  },
  // blacklist: ['routing', 'loading', '@@dva'],
  whitelist: ['global'],
};

export default config;
