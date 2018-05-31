import debug from '../package/debug/debug'
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
const submit = () => {
  $('#membersubmit').click(function(event) {
    let name = $('#name').val();
    let sex = $('input[name=sex]:checked').val();
    let birsthday = $('#birsthday').val();
    let phone = $('#phone').val();;
    if ($.trim(name) == '') {
      alertinfo('姓名不能为空');
      return false;
    }
    if ($.trim(shuihao) == '') {
      alertinfo('税号不能为空');
      return false;
    }
    if ($.trim(birsthday) == '') {
      alertinfo('生日不能为空');
      return false;
    }
    if ($.trim(phone) == '') {
      alertinfo('手机号码不能为空');
      return false;
    }
    $.post("/addons_execute_member-index-sendbook.html", {
      name: name,
      sex: sex,
      birsthday: birsthday,
      phone: phone
    }, function(data) {
      if (data.status == 1) {
        alertinfo('申请成功！', '/addons_execute_member-index-index');
      } else {
        alertinfo('申请失败！重新提交试试！');
      }
    })

  });
};
const init = (callback) => {
  callback(9999)
  debug('member is load');
  submit();
};
const member = {
  init: init
};

export default member;
