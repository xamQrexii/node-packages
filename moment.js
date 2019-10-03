const moment = require('moment');

let val;

val = moment().format('MMMM Do YYYY');
val = moment().format('MMMM Do YYYY, h:mm:ss a');
val = moment().format('ddd');
val = moment().format("MMM Do YY");

// format specific date
val = moment('20050310').format('YYYY-MM-DD');
val = moment('2004-03-10').format('dddd');
val = moment('20050310').format('[The Year is] YYYY');

// relative time
val = moment('20040410', 'YYYYMMDD').fromNow();

// calender time
val = moment().startOf('day').fromNow();
val = moment().startOf('month').fromNow();
val = moment().startOf('year').fromNow();
val = moment().endOf('day').fromNow();
val = moment().endOf('week').fromNow();
val = moment().endOf('month').fromNow();
val = moment().endOf('year').fromNow();
val = moment().subtract(3, 'days').calendar()
val = moment().subtract(10, 'weeks').calendar();
val = moment().add(2, 'years').calendar();
console.log(val)