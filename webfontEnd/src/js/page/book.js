import debug from '../package/debug/debug'
import rome from 'rome'
const formChange = () => {
  $('.nav-tabs.nav-justified>li').click(function() {
    const i = $(this).index();
    $('.nav-tabs.nav-justified>li').removeClass('active');
    $(this).addClass('active');
    $('.book-tab').removeClass('active');
    $('.book-tab').eq(i).addClass('active');
    $('.book .bg .bg').removeClass('active');
    $('.book .bg .bg').eq(i).addClass('active');
  })
}

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
  rome(intime);
  rome(outtime);
  rome(partytime);
}

const submit = () => {
  //客房预订
  $('#kfydsubmit').click(function(event) {
    let name = $('#name').val();
    let tel = $('#tel').val();
    let intime = $('#intime').val();
    let outtime = $('#outtime').val();
    let content = $('#beizhu').val();
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
    $.post("/sendbook.html", {
      name: name,
      tel: tel,
      intime: intime,
      outtime: outtime,
      content: content,
      type: 1
    }, function(data) {
      if (data.status == 1) {
        alert('预订成功！感谢您对我们的支持！');
        window.location.href = "/book.html"
      } else {
        alert('预订失败！重新提交试试！');
      }
    })

  });
  // 会议预订
  $('#hyydsubmit').click(function(event) {
    let partyconame = $('#partyconame').val();
    let partyname = $('#partyname').val();
    let partytel = $('#partytel').val();
    let partynum = $('#partynum').val();
    let partytime = $('#partytime').val();
    let content = $('#beizhu2').val();
    if ($.trim(name) == '') {
      alert('姓名不能为空');
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
    $.post("/sendbook.html", {
      partyconame: partyconame,
      partyname: partyname,
      partytel: partytel,
      partynum: partynum,
      partytime: partytime,
      content:content,
      type: 2
    }, function(data) {
      if (data.status == 1) {
        alert('预订成功！感谢您对我们的支持！');
        window.location.href = "/book.html"
      } else {
        alert('预订失败！重新提交试试！');
      }
    })
  });
}

const init = (callback) => {
  callback(99)
  debug('book is load');
  submit();
  timeselect();
  formChange();
};

const book = {
  init: init
};

export default book;
