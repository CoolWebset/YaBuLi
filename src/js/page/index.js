import debug from '../package/debug/debug'
import Swiper from 'swiper';
const videoCtrl = () => {
  $(".video_fm").click(function() {
    $(".video_fm").hide();
    $('video').get(0).play();
  });
}
const banner = () => {
  var bannerSwiper = new Swiper('.i_ban.swiper-container', {
    pagination: {
      el: '.i_ban .swiper-pagination',
    },
    loop: true,
  });
}
const init = (callback) => {
  callback(1);
  debug('index is load');
  videoCtrl();
  banner();
};

const index = {
  init: init
};

export default index;
