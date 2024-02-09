import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import es from "dayjs/locale/es";
dayjs.extend(localeData);
dayjs.locale(es)

const newLocale = dayjs.weekdays();
export default newLocale;
