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
  $('#in_time').mobiscroll().datetime({
    theme: theme,
    mode: mode,
    display: display,
    lang: lang,
    dateFormat: "yyyy-mm-dd",
    minDate: new Date(2000, 3, 10, 9, 22),
    maxDate: new Date(2030, 7, 30, 15, 44),
    stepMinute: 1
  });
  $('#out_time').mobiscroll().datetime({
    theme: theme,
    mode: mode,
    display: display,
    lang: lang,
    dateFormat: "yyyy-mm-dd",
    minDate: new Date(2000, 3, 10, 9, 22),
    maxDate: new Date(2030, 7, 30, 15, 44),
    stepMinute: 1
  });
  $('#partytime').mobiscroll().datetime({
    theme: theme,
    mode: mode,
    display: display,
    lang: lang,
    dateFormat: "yyyy-mm-dd",
    minDate: new Date(2000, 3, 10, 9, 22),
    maxDate: new Date(2030, 7, 30, 15, 44),
    stepMinute: 1
  });

  // rome(intime);
  // rome(outtime);
  // rome(partytime);
}

const submit = () => {
  //客房预订
  $('#kfydsubmit').click(function(event) {
    let name = $('#name').val();
    let tel = $('#tel').val();
    let intime = $('#in_time').val();
    let outtime = $('#out_time').val();
    let roomnum = $('#room_num').val();
    let adultnum = $('#adult_num').val();
    let childrennum = $('#children_num').val();
    let content = $('#content').val();
    if ($.trim(name) == '') {
      alertinfo('姓名不能为空');
      return false;
    }
    if ($.trim(tel) == '') {
      alertinfo('联系方式不能为空');
      return false;
    }
    if ($.trim(intime) == '') {
      alertinfo('入住时间不能为空');
      return false;
    }
    if ($.trim(outtime) == '') {
      alertinfo('离店日期不能为空');
      return false;
    }
    // if ($.trim(content) == '') {
    //   alertinfo('离店日期不能为空');
    //   return false;
    // }
    $.post("/addons_execute_diyform-index-sendbook.html", {
      name: name,
      tel: tel,
      intime: intime,
      outtime: outtime,
      roomnum: roomnum,
      adultnum: adultnum,
      childrennum: childrennum,
      content: content,
      type: 1
    }, function(data) {
      if (data.status == 1) {
        alertinfo('预订成功！感谢您对我们的支持！', '/addons_execute_diyform-index-index');
      } else {
        alertinfo('预订失败！重新提交试试！');
      }
    })

  });
  // 会议预订
  $('#hyydsubmit').click(function(event) {
    let partyconame = $('#corporate_name').val();
    let partyname = $('#partyname').val();
    let partytel = $('#partytel').val();
    let partynum = $('#partynum').val();
    let partytime = $('#partytime').val();
    let content = $('#beizhu2').val();
    if ($.trim(partyconame) == '') {
      alertinfo('公司名称不能为空');
      return false;
    }
    if ($.trim(partyname) == '') {
      alertinfo('联系人不能为空');
      return false;
    }
    if ($.trim(partytel) == '') {
      alertinfo('联系方式不能为空');
      return false;
    }
    if ($.trim(partynum) == '') {
      alertinfo('会议人数不能为空');
      return false;
    }
    if ($.trim(partytime) == '') {
      alertinfo('会议时间不能为空');
      return false;
    }
    $.post("/addons_execute_diyform-index-sendbook.html", {
      partyconame: partyconame,
      partyname: partyname,
      partytel: partytel,
      partynum: partynum,
      partytime: partytime,
      content: content,
      type: 2
    }, function(data) {
      if (data.status == 1) {
        alertinfo('预订成功！感谢您对我们的支持！', '/addons_execute_diyform-index-meet');
      } else {
        alertinfo('预订失败！重新提交试试！');
      }
    })
  });
}

const init = (callback) => {
  callback(99)
  debug('meet is load');
  submit();
  timeselect();
};

const book = {
  init: init
};

export default book;
