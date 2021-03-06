/**
* @file utils/apiCreator
*/

import request from './request';

import config from '../config/request';
import { queryToString } from './helper';

/**
 * api生成器
 *
 * @return {Fucntion}
 */
export default function createApi() {
  const { prefix } = config;

  // 如果没有前缀，自动补上
  const padPrefix = (url) => {
    if (url.indexOf(prefix) === -1) {
      return prefix + url;
    }
    return url;
  };

  // 授权信息: empId, deviceId, token
  let authInfo = {};

  return {

    setAuthInfo(info) {
      authInfo = info;
    },

    getAuthInfo() {
      return authInfo;
    },

    /**
     * @param {string} url API url
     * @param {Object} query 请求参数
     *
     * @return {Promise}
     */
    get(url, query) {
      const finalUrl = padPrefix(url);
      const queryString = queryToString(query);
      return request(
        `${finalUrl}?${queryString}`,
        {
          method: 'GET',
          headers: {
            ...authInfo,
          },
        },
      );
    },

    /**
     * @param {string} url API url
     * @param {Object} query 请求参数
     *
     * @return {Promise}
     */
    post(url, query) {
      const finalUrl = padPrefix(url);
      return request(
        finalUrl,
        {
          method: 'POST',
          headers: {
            ...authInfo,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(query),
        },
      );
    },

    /**
     * @param {string} url 神策日志接收服务器url
     * @param {Object} query 日志参数
     *
     * @return {Promise}
     */
    sendLog(url, query) {
      return request(
        url,
        {
          method: 'POST',
          body: JSON.stringify(query),
        },
      );
    },
  };
}
