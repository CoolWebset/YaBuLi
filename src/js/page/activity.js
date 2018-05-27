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
const hd_three = () => {
  var bannerSwiper = new Swiper('.swiper-hd_three', {
    pagination: {
      el: '.swiper-hd_three .swiper-pagination',
    },
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30
  });
}
const videoCtrl = () => {
  $(".video_fm").click(function() {
    $(".video_fm").addClass('hide');
    $('video').trigger("play");
    $('video').removeClass('pause');
    $('video').addClass('play');
  });
  $("video").addClass('pause'); //for check pause or play add a class
  $('video').click(function() {
    if ($(this).hasClass('pause')) {

    } else {
      $("video").trigger("pause");
      $(this).removeClass('play');
      $(".video_fm").removeClass('hide');
      $(this).addClass('pause');
    }
  })
}
const init = (callback) => {
  hd_three();
  videoCtrl();
  callback(1)
  debug('activity is load');
  banner();
};
const activity = {
  init: init
};

export default activity;
