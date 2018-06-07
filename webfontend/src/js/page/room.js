import debug from '../package/debug/debug'

const init = (callback) => {
  callback(999)
  debug('room is load');
};
const room = {
  init: init
};

export default room;
