import debug from '../package/debug/debug'
import fdatepicker from '../package/datepicker/js/foundation-datepicker'
import '../package/datepicker/js/locales/foundation-datepicker.zh-CN'

const timeselect = () => {
  var nowTemp = new Date();
		var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
		var checkin = $('#intime').fdatepicker({
			onRender: function (date) {
				return date.valueOf() < now.valueOf() ? 'disabled' : '';
			}
		}).on('changeDate', function (ev) {
			if (ev.date.valueOf() > checkout.date.valueOf()) {
				var newDate = new Date(ev.date)
				newDate.setDate(newDate.getDate() + 1);
				checkout.update(newDate);
			}
			checkin.hide();
			$('#outtime')[0].focus();
		}).data('datepicker');
		var checkout = $('#outtime').fdatepicker({
			onRender: function (date) {
				return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
			}
		}).on('changeDate', function (ev) {
			checkout.hide();
		}).data('datepicker');

}

const init = (callback) => {
  callback(2)
  debug('book is load');
  timeselect();
};

const book = {
  init: init
};

export default book;
