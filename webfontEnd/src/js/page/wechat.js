import debug from '../package/debug/debug'

const init = (callback) => {
  callback(1)
  debug('wechat is load');
};
const wechat = {
  init: init
};

export default wechat;
