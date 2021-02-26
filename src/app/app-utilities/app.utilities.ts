import * as moment from 'moment';

export class DateUtils {

  public static getUTCFormatTime(date) {
    const utcDate = moment.utc(date);
    return utcDate.local().format('YYYY-MM-DD HH:mm:ss');
  }

  public static getUTCFormatDate(date) {
    const utcDate = moment.utc(date);
    return utcDate.local().format('DD-MMM-YYYY');
  }

}
