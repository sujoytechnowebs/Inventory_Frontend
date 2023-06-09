const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: {
          name: "home",
          requiresAuth: true,
        },
      },
      {
        path: "users",
        component: () => import("pages/Users/Index.vue"),
        meta: {
          name: "user",
          requiresAuth: true,
          acl: "user.index",
        },
      },
      {
        path: "customers",
        component: () => import("pages/Customer/Index.vue"),
        meta: {
          name: "customer",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "cities",
        component: () => import("pages/City/Index.vue"),
        meta: {
          name: "city",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "states",
        component: () => import("pages/State/Index.vue"),
        meta: {
          name: "state",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "branches",
        component: () => import("pages/Branch/Index.vue"),
        meta: {
          name: "branch",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "groups",
        component: () => import("pages/Group/Index.vue"),
        meta: {
          name: "group",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "accounts",
        component: () => import("pages/Account/Index.vue"),
        meta: {
          name: "account",
          requiresAuth: true,
          acl: "account.index",
        },
      },
      {
        path: "loans",
        component: () => import("pages/Loan/Index.vue"),
        meta: {
          name: "loan",
          requiresAuth: true,
          // acl: "user.index",
        },
      },

      {
        path: "bank-cash",
        component: () => import("pages/BankCash/Index.vue"),
        meta: {
          name: "bank-cash",
          requiresAuth: true,
          // acl: "user.index",
        },
      },

      {
        path: "ewi-details",
        component: () => import("pages/EWI/Index.vue"),
        meta: {
          name: "ewi-details",
          requiresAuth: true,
          // acl: "user.index",
        },
      },

      {
        path: "emi-details",
        component: () => import("pages/EMI/Index.vue"),
        meta: {
          name: "emi-details",
          requiresAuth: true,
          // acl: "user.index",
        },
      },

      {
        path: "receipt",
        component: () => import("pages/Receipt/Index.vue"),
        meta: {
          name: "receipt",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "payment",
        component: () => import("pages/Payment/Index.vue"),
        meta: {
          name: "payment",
          requiresAuth: true,
          // acl: "user.index",
        },
      },

      {
        path: "profile",
        component: () => import("pages/Profile/Index.vue"),
        meta: {
          name: "profile-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "products",
        component: () => import("pages/Product/Index.vue"),
        meta: {
          name: "product-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "products-category",
        component: () => import("pages/ProductCategory/Index.vue"),
        meta: {
          name: "productcategory-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "stock-holder",
        component: () => import("pages/StockHolder/Index.vue"),
        meta: {
          name: "stockholder-page",
          requiresAuth: true,
          acl: "investorEquity.index",
        },
      },
      {
        path: "stock-transfer",
        component: () => import("pages/StockTransfer/Index.vue"),
        meta: {
          name: "productcategory-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "inventory",
        component: () => import("pages/Inventory/Index.vue"),
        meta: {
          name: "inventory-page",
          requiresAuth: true,
          acl: "user.index",
        },
      },
      {
        path: "tax",
        component: () => import("pages/Tax/Index.vue"),
        meta: {
          name: "tax-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "purchase",
        component: () => import("pages/Purchase/Index.vue"),
        meta: {
          name: "purchase-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "purchase-return",
        component: () => import("pages/PurchaseReturn/Index.vue"),
        meta: {
          name: "purchase-return-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "sale",
        component: () => import("pages/Sale/Index.vue"),
        meta: {
          name: "sale-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "sale-return",
        component: () => import("pages/SaleReturn/Index.vue"),
        meta: {
          name: "sale-return-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "profit-loss",
        component: () => import("pages/ProfitLoss/Index.vue"),
        meta: {
          name: "profit-loss-page",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "investor-details",
        component: () => import("pages/InvestorDetails/Index.vue"),
        meta: {
          name: "investor-page",
          requiresAuth: true,
        },
      },
      {
        path: "cashbook",
        component: () => import("pages/Cashbook/Index.vue"),
        meta: {
          name: "cashbook-page",
          requiresAuth: true,
        },
      },

      // Ledger View

      {
        path: "ledger",
        component: () => import("pages/Ledger/Index.vue"),
        meta: {
          name: "ledger-page",
          requiresAuth: true,
        },
      },

      {
        path: "balance_status",
        component: () => import("pages/OpeningClose/Index.vue"),
        meta: {
          name: "balance-status",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
      {
        path: "groups-summary",
        component: () => import("pages/GroupSummary/Index.vue"),
        meta: {
          name: "group-summary",
          requiresAuth: true,
          // acl: "user.index",
        },
      },
    ],
  },

  {
    path: "/print/",
    component: () => import("layouts/PrintLayout.vue"),
    children: [
      {
        name: "ewi-receipt",
        path: "ewi-receipt",
        component: () => import("pages/EWI/Print.vue"),
        meta: {
          name: "receipt",
          requiresAuth: true,
        },
      },

      // EMI Receipt

      {
        name: "emi-receipt",
        path: "emi-receipt",
        component: () => import("pages/EMI/Print.vue"),
        meta: {
          name: "emireceipt",
          requiresAuth: true,
        },
      },
    ],
  },

  // Test By Sujoy

  {
    path: "/print/",
    component: () => import("layouts/BengaliLayout.vue"),
    children: [
      {
        name: "bengali-receipt",
        path: "bengali-receipt",
        component: () => import("pages/Loan/BengaliPrint"),
        meta: {
          name: "receipt",
          requiresAuth: true,
        },
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/GuestLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/Auth/Login.vue"),
        meta: {
          name: "login",
          requiresAuth: false,
        },
      },
      {
        path: "set-password",
        component: () => import("pages/Auth/SetPassword.vue"),
        meta: {
          name: "set-password",
          requiresAuth: false,
        },
      },
      {
        path: "forgot-password",
        component: () => import("pages/Auth/ForgotPassword.vue"),
        meta: {
          name: "forgot-password",
          requiresAuth: false,
        },
      },
      // {
      //     path: 'reset-email',
      //     component: () =>
      //         import ('pages/Auth/Forgot/index.vue'),
      //     meta: {
      //         name: 'foreget-password',
      //         requiresAuth: false
      //     }
      // },
      // {
      //     path: 'signup',
      //     component: () =>
      //         import ('pages/Auth/Signup/index.vue'),
      //     meta: {
      //         name: 'signup',
      //         requiresAuth: false
      //     }
      // },
    ],
  },

  // Customer Layout

  {
    path: "/",
    component: () => import("layouts/CustomerLayout.vue"),
    children: [
      {
        path: "/customer-product-category",
        component: () => import("pages/CustomerInterface/ProductCategory.vue"),
        meta: {
          name: "customer-product-category",
          requiresAuth: false,
        },
      },
      {
        path: "/customer-products",
        component: () => import("pages/CustomerInterface/Products.vue"),
        meta: {
          name: "customer-products",
          requiresAuth: false,
        },
      },
      {
        path: "/product-details",
        component: () => import("pages/CustomerInterface/ProductDetails.vue"),
        meta: {
          name: "product-details",
          requiresAuth: false,
        },
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
