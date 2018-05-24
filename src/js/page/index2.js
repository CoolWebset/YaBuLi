import debug from '../package/debug/debug'


const init = (callback) => {
  console.log(callback);
  callback(2)
  debug('index2 is load');
};

const index = {
  init: init
};

export default index;
