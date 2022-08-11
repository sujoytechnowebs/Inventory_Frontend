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
          // acl: "home",
        },
      },
      {
        path: "users",
        component: () => import("pages/Users/Index.vue"),
        meta: {
          name: "user",
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
          // acl: "user.index",
        },
      },
      {
        path: "check-in",
        component: () => import("pages/CheckIn/Index.vue"),
        meta: {
          name: "checkin",
          requiresAuth: true,
          // acl: "user.index",
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
        path: "ewi-details",
        component: () => import("pages/EWI/Index.vue"),
        meta: {
          name: "ewi-details",
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
        path: "stack-holder",
        component: () => import("pages/StackHolder/Index.vue"),
        meta: {
          name: "stackholder-page",
          requiresAuth: true,
          // acl: "user.index",
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
          // acl: "user.index",
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
        path: "register",
        component: () => import("pages/Auth/Register.vue"),
        meta: {
          name: "register",
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
