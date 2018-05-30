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
const submit = ()=>{
  $('#fpsubmit').click(function(event) {
    let type = $('input[name=type]:checked').val();
    let name = $('#name').val();
    let tel = $('#tel').val();
    if($("#mrtt").is(':checked')){
      let mrtt = 1;
    }else{
      let mrtt = 0;
    }
    let shuihao = $('#shuihao').val();
    let address = $('#address').val();
    let khyh = $('#khyh').val();
    let yhzh = $('#yhzh').val();
    if ($.trim(name) == '') {
      alertinfo('抬头名称不能为空');
      return false;
    }
    if ($.trim(shuihao) == '') {
      alertinfo('税号不能为空');
      return false;
    }
    if ($.trim(address) == '') {
      alertinfo('单位地址不能为空');
      return false;
    }
    if ($.trim(tel) == '') {
      alertinfo('电话号码不能为空');
      return false;
    }
    if ($.trim(khyh) == '') {
      alertinfo('开户银行不能为空');
      return false;
    }
    if ($.trim(yhzh) == '') {
      alertinfo('银行账号不能为空');
      return false;
    }
    // if ($.trim(content) == '') {
    //   alertinfo('离店日期不能为空');
    //   return false;
    // }
    $.post("/addons_execute_invoiceform-index-sendbook.html", {
      type:type,
      name: name,
      tel: tel,
      mrtt:mrtt,
      shuihao: shuihao,
      address: address,
      khyh: khyh,
      yhzh: yhzh,
    }, function(data) {
      if (data.status == 1) {
        alertinfo('申请成功！', '/addons_execute_invoiceform-index-index');
      } else {
        alertinfo('申请失败！重新提交试试！');
      }
    })

  });
};
const init = (callback) => {
  callback(9999)
  debug('invoice is load');
  submit();
};
const invoice = {
  init: init
};

export default invoice;
