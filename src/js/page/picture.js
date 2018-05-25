import debug from '../package/debug/debug'

const init = (callback) => {
  callback(1)
  debug('picture is load');
};
const picture = {
  init: init
};

export default picture;
