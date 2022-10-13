import { store } from "quasar/wrappers";
import { createStore } from "vuex";

// import example from './module-example'
import auth from "./Auth";
import login from "./Login";
import user from "./User";
import register from "./Register";
import city from "./City";
import state from "./State";
import branch from "./Branch";
import group from "./Group";
import product from "./Product";
import productcategory from "./ProductCategory";
import stocktransfer from "./StockTransfer";
import inventory from "./Inventory";
import account from "./Account";
import checkin from "./CheckIn";
import loan from "./Loan";
import tax from "./Tax";
import purchase from "./Purchase";
import purchasedetails from "./PurchaseDetails";
import purchasereturn from "./PurchaseReturn";
import ewi from "./EWI";
import receipt from "./Receipt";
import payment from "./Payment";
import sale from "./Sale";
import salereturn from "./SaleReturn";
import groupuser from "./GroupUser";
import profitloss from "./ProfitLoss";
import customer from "./Customer";
import cashbook from "./Cashbook";
import stockholder from "./StockHolder";
import bankcash from "./BankCash";
import purchasereturndetails from "./PurchaseReturnDetails";
import saledetails from "./SaleDetails";
import salereturndetails from "./SaleReturnDetails";
import openingclose from "./OpeningClose";
import groupsummary from "./GroupSummary";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

let storeInst = null;

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      // example,
      auth,
      user,
      login,
      register,
      city,
      state,
      branch,
      group,
      product,
      productcategory,
      stocktransfer,
      inventory,
      account,
      checkin,
      loan,
      tax,
      purchase,
      purchasedetails,
      purchasereturn,
      ewi,
      receipt,
      payment,
      sale,
      salereturn,
      groupuser,
      profitloss,
      customer,
      cashbook,
      stockholder,
      bankcash,
      purchasereturndetails,
      saledetails,
      salereturndetails,
      openingclose,
      groupsummary,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  storeInst = Store;

  return Store;
});

export { storeInst };
