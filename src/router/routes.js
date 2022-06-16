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
        path: "profile",
        component: () => import("pages/Profile/Index.vue"),
        meta: {
          name: "profile-page",
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
