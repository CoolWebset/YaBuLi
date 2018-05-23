import debug from '../package/debug/debug';
const videoCtrl = () =>{
  $(".video_fm").click(function(){
    $(".video_fm").hide();
    $('video').get(0).play();
  });
}
const init = (callback) => {
  callback(1);
  debug('index is load');
  videoCtrl();
};

const index = {
  init: init
};

export default index;
