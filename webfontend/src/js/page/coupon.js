import debug from '../package/debug/debug'
import mobiscroll from '../package/mobiscroll/mobiscroll.custom.min'
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
const timeselect = () => {
  var theme = "ios";
  var mode = "scroller";
  var display = "bottom";
  var lang = "zh";
  $('#birsthday').mobiscroll().datetime({
    theme: theme,
    mode: mode,
    display: display,
    lang: lang,
    dateFormat: "yyyy-mm-dd",
    minDate: new Date(2000, 3, 10, 9, 22),
    maxDate: new Date(2030, 7, 30, 15, 44),
    stepMinute: 1
  });

  $('#registration').mobiscroll().datetime({
    theme: theme,
    mode: mode,
    display: display,
    lang: lang,
    dateFormat: "yyyy-mm-dd",
    minDate: new Date(2000, 3, 10, 9, 22),
    maxDate: new Date(2030, 7, 30, 15, 44),
    stepMinute: 1
  });
}
const submit = () => {
  $('#membersubmit').on("click",function(){
    let name = $('#name').val();
    let phone = $('#phone').val();
    let wechat = $('#wechat').val();
    let idcode = $('#idcode').val();
    let birsthday = $('#birsthday').val();
    let registration = $('#registration').val();
    let auditor = $('#auditor').val();

    if ($.trim(name) == '') {
      alertinfo('姓名不能为空');
      return false;
    }
    if ($.trim(phone) == '') {
      alertinfo('手机号码不能为空');
      return false;
    }
    if ($.trim(idcode) == '') {
      alertinfo('身份证码不能为空');
      return false;
    }
    if ($.trim(birsthday) == '') {
      alertinfo('生日不能为空');
      return false;
    }
    if ($.trim(registration) == '') {
      alertinfo('登记日期不能为空');
      return false;
    }
    if ($.trim(auditor) == '') {
      alertinfo('龙江网络审核责任人不能为空');
      return false;
    }
    $.post("/addons_execute_coupon-index-sendbook.html", {
      name: name,
      phone: phone,
      wechat: wechat,
      idcode: idcode,
      birsthday: birsthday,
      registration: registration,
      auditor:auditor
    }, function(data) {
      if (data.status == 1) {
        alertinfo('提交成功！');
      } else {
        alertinfo('注册失败！重新提交试试！');
      }
    })

  });
};
const init = (callback) => {
  callback(9999)
  debug('coupon is load');
  submit();
  timeselect();
};
const coupon = {
  init: init
};

export default coupon;
