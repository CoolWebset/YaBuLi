import 'object-fit-images';
import 'picturefill';
import './svg-sprites';
import hello from './hello-world';
import './bootstrap.min';
import '../css/bootstrap.css';
hello('Hello World');
var height = document.getElementById("logo_h").offsetHeight;
document.getElementsByClassName("nav_b")[0].style.height = height + 'px';
document.getElementsByClassName("yd_b")[0].style.height = height + 'px';


$(".video_fm").click(function(){
        $(".video_fm").hide();
        $('video').get(0).play();
    });
