import { boot } from "quasar/wrappers";
import { storeInst } from "../store";

const acl = {
  hasAccess(action) {
    var allowedAccess = false;
    if (
      storeInst.getters["auth/authUser"] &&
      storeInst.getters["auth/authUser"].acl
    ) {
      if (storeInst.getters["auth/authUser"].acl[action]) allowedAccess = true;
    }
    return allowedAccess;
  },
};

export default boot(({ app }) => {
  app.config.globalProperties.$acl = acl;
});

export { acl };
