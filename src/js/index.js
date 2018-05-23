import 'object-fit-images';
import 'picturefill';
import './bootstrap.min';
import '../css/bootstrap.css';



$(".video_fm").click(function(){
  $(".video_fm").hide();
  $('video').get(0).play();
});
