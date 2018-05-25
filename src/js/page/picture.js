import debug from '../package/debug/debug'

const picClick = () => {
  $('.picture .item img').click(function(){
    alert(1)
  });
}
const init = (callback) => {
  callback(1)
  debug('picture is load');
  picClick();
};
const picture = {
  init: init
};

export default picture;
