import debug from '../package/debug/debug'
// import mobiscroll from '../package/mobiscroll/mobiscroll.custom.min'
/**
 * 弹窗
 * @param  {[type]} info [description]
 * @param  {[type]} aurl [description]
 * @return {[type]}      [description]
 */
const alertinfo = (info, aurl) => {
  $('.alert_player').fadeIn();
  $('.alert_player .info').html(info);
  if (aurl === undefined) {} else {
    $('.alert_player .queren_btn,.alert_player .bg').click(function() {
      location.href = aurl;
    })
  }
  $('.alert_player .bg,.alert_player .queren_btn').click(function() {
    $('.alert_player').fadeOut();
  });
};
// const timeselect = () => {
//   var theme = "ios";
//   var mode = "scroller";
//   var display = "bottom";
//   var lang = "zh";
//   $('#birsthday').mobiscroll().datetime({
//     theme: theme,
//     mode: mode,
//     display: display,
//     lang: lang,
//     dateFormat: "yyyy-mm-dd",
//     minDate: new Date(2000, 3, 10, 9, 22),
//     maxDate: new Date(2030, 7, 30, 15, 44),
//     stepMinute: 1
//   });
// }
const submit = () => {
  $('#membersubmit').on("click",function(){
    let name = $('#name').val();
    let sex = $('input[name=sex]:checked').val();
    let birsthday = $('#birsthday').val();
    let phone = $('#phone').val();;
    if ($.trim(name) == '') {
      alertinfo('姓名不能为空');
      return false;
    }
    if ($.trim(phone) == '') {
      alertinfo('手机号码不能为空');
      return false;
    }
    $.post("/addons_execute_memberform-index-sendbook.html", {
      name: name,
      sex: sex,
      birsthday: birsthday,
      phone: phone
    }, function(data) {
      if (data.status == 1) {
        alertinfo('注册成功！', 'https://mp.weixin.qq.com/s?__biz=MjM5MTU1MzEzMw==&mid=504052507&idx=1&sn=5a8a33430e1e3a5e16e951f6ea8481dc&chksm=3d4c58190a3bd10fa23dfb2070640e166ca47b81bb80c645478a08e15e13d251f2ee8dd049fe&mpshare=1&scene=1&srcid=0531cxzxOIICz5f3hdYe1cGg#rd');
      } else {
        alertinfo('注册失败！重新提交试试！');
      }
    })

  });
};
const init = (callback) => {
  callback(9999)
  debug('member is load');
  submit();
  // timeselect();
};
const member = {
  init: init
};

export default member;
