import debug from '../package/debug/debug'


const init = (callback) => {
  callback(2)
  debug('book is load');
};

const book = {
  init: init
};

export default book;
