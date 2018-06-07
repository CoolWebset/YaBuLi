import debug from '../package/debug/debug'

const init = (callback) => {
  callback(9999)
  debug('conference is load');
};
const conference = {
  init: init
};

export default conference;
