import apiCreator from '../utils/apiCreator';

const api = apiCreator();

export default {

  // 暴露api上的几个底层方法: get / post
  ...api,

  // 获取开户申请ID
  getBdid: query => api.post('/groovy/cif/OpenAcc/cifSaveOpenAccSerialNo', query),

  getsearchList: query => api.post('/test/list', query),
};
