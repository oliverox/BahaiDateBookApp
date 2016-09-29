import moment from 'moment-timezone';
import localBadiDate from '../../lib/badi/localBadiDate';

const today = moment();
const todayBadi = new localBadiDate(today, 37.4719020, -122.1317400);

const DATES = [
  [today.format('dddd D MMMM'), todayBadi.badiDate.format('d MM'), ''],
  ['Wednesday 28 September', '19 Might', ''],
  ['Thursday 29 September', '1 Will', ''],
  ['Friday 30 September', '2 Will', ''],
  ['Saturday 1 October', '3 Will', ''],
  ['Sunday 2 October', '4 Will', 'today'],
  ['Monday 3 October', '5 Will', ''],
  ['Tuesday 4 October', '6 Will', ''],
  ['Wednesday 5 October', '7 Will', ''],
  ['Thursday 6 October', '8 Will', '']
];

export default DATES;
