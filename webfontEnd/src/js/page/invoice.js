import debug from '../package/debug/debug'

const init = (callback) => {
  callback(9999)
  debug('invoice is load');
};
const wechat = {
  init: init
};

export default wechat;
