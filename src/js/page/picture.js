import debug from '../package/debug/debug'
import 'whatwg-fetch'
import Swiper from 'swiper';

const picshow = $('.pic-show');
const picitem = $('.picture .item');
const picclose = $('.pic-show .close');
const picClick = () => {

  picitem.click(function() {
    $('body').addClass('picshow');
    fetch('http://114.115.177.23:9000/mock/11/pic')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        let trs = [];
        $.each(json.data, function(n, value) {
          if (n == 0) {
            trs.push('<div class="swiper-slide active-nav"><img src="' + value.img + '" alt=""></div>');
          } else if ((n + 1) % 6 == 0) {
            trs.push('<div class="swiper-slide slide6"><img src="' + value.img + '" alt=""></div>');
          } else {
            trs.push('<div class="swiper-slide"><img src="' + value.img + '" alt=""></div>');
          }

        });
        // $('.view .swiper-wrapper,.preview .swiper-wrapper').html(trs);
        return trs
      }).then(function(trs) {
        if (trs) {

          piccontent(trs);
        }
      }).catch(function(ex) {
        console.log('请求失败!', ex)
      })

  });
  picclose.click(function() {
    $('body').removeClass('picshow');
  });

}
const piccontent = (data) => {
  var viewSwiper = new Swiper('.view .swiper-container', {
    on: {
      init: function() {
        //Swiper初始化了
        // console.log(data);
        this.removeAllSlides();
        this.appendSlide(data);
        $('.pc-slide').addClass('on')
        // this.slideTo(1);

      },
      click: function() {
        // alert('你点了Swiper');
      },
      slideChangeTransitionStart: function() {
        updateNavPosition()
      }
    }
  })

  $('.view .arrow-left,.preview .arrow-left').on('click', function(e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == 0) {
      viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);
      return
    }
    viewSwiper.slidePrev()
  })
  $('.view .arrow-right,.preview .arrow-right').on('click', function(e) {
    e.preventDefault()
    if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {
      viewSwiper.slideTo(0, 1000);
      return
    }
    viewSwiper.slideNext()
  })

  var previewSwiper = new Swiper('.preview .swiper-container', {
    //visibilityFullFit: true,
    slidesPerView: 6,
    spaceBetween: 15,
    autoHeight: true,
    on: {
      init: function() {
        //Swiper初始化了
        // console.log(data);
        this.removeAllSlides();
        this.appendSlide(data);
        // this.slideTo(1);

      },
      tap: function() {
        viewSwiper.slideTo(previewSwiper.clickedIndex)
      }
    }
  })

  function updateNavPosition() {
    $('.preview .active-nav').removeClass('active-nav')
    var activeNav = $('.preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')
    if (!activeNav.hasClass('swiper-slide-visible')) {
      if (activeNav.index() > previewSwiper.activeIndex) {
        var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1
        previewSwiper.slideTo(activeNav.index() - thumbsPerNav)
      } else {
        previewSwiper.slideTo(activeNav.index())
      }
    }
  }

}
const banner = () => {
  var bannerSwiper = new Swiper('.i_ban.swiper-container', {
    pagination: {
      el: '.i_ban .swiper-pagination',
    },
    loop: true,
    speed: 2000,
    autoplay: true
  });
}
const init = (callback) => {
  callback(1)
  debug('picture is load');
  picClick();
  // $('body').addClass('picshow');
  // piccontent();
  banner();
};
const picture = {
  init: init
};

export default picture;
