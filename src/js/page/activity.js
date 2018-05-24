import debug from '../package/debug/debug'
import Swiper from 'swiper';


const banner = () => {
  var bannerSwiper = new Swiper('.i_ban.swiper-container', {
    pagination: {
      el: '.i_ban .swiper-pagination',
    },
    loop: true,
  });
}
const init = (callback) => {
  callback(1)
  debug('activity is load');
  banner();
};
const activity = {
  init: init
};

export default activity;
