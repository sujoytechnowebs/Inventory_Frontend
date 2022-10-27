import { boot } from "quasar/wrappers";
import moment from "moment";

const date = {
  convert(mDate) {
    return moment(mDate).format("DD/MM/YYYY");
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$date = date;
});

export { date };
