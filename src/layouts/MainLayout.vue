<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Amar Furniture </q-toolbar-title>

        <div>
          <q-btn-dropdown flat label="Accounts">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-btn
                  to="/profile"
                  color="primary"
                  size="sm"
                  label="Profile"
                  class="q-ma-sm"
                />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  :loading="loading"
                  :disable="loading"
                  @click="logOutUser()"
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="220"
      class="bg-primary text-white"
    >
      <q-list>
        <q-item-label header>
          <span class="text-white flex flex-center admin_font_size">
            <router-link to="/" class="company_navbar">Menu</router-link>
          </span>
        </q-item-label>

        <EssentialLink :essentialLinks="essentialLinks" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import useStoreModule from "../libs/useStoreModule.js";

const linksList = [
  {
    title: "User",
    icon: "account_circle",
    show: true,
    childs: [
      {
        title: "Users Management",
        icon: "hlw",
        link: "/users",
        show: true,
      },
    ],
  },
  {
    title: "Branch",
    icon: "share",
    // link: "/cities",
    show: true,
    childs: [
      {
        title: "State",
        icon: "hlw",
        link: "/states",
        show: true,
      },
      {
        title: "Branch",
        icon: "hlw",
        link: "/branches",
        show: true,
      },
      {
        title: "City",
        icon: "hlw",
        link: "/cities",
        show: true,
      },
      {
        title: "Staff",
        icon: "hlw",
        link: "/cities",
        show: true,
      },
    ],
  },
  {
    title: "Group",
    icon: "group_work",
    link: "/profile",
    show: true,
    childs: [
      {
        title: "Group Name",
        icon: "hlw",
        link: "/groups",
        show: true,
      },
      {
        title: "Group User",
        icon: "hlw",
        link: "/users",
        show: true,
      },
    ],
  },
  {
    title: "Accounts",
    icon: "account_balance",
    link: "/profile",
    show: true,
    childs: [
      {
        title: "Accounts",
        icon: "hlw",
        link: "/accounts",
        show: true,
      },
      {
        title: "Check In",
        icon: "hlw",
        link: "/check-in",
        show: true,
      },
      {
        title: "Tax",
        icon: "hlw",
        link: "/tax",
        show: true,
      },
    ],
  },
  {
    title: "Product",
    icon: "style",
    link: "/profile",
    show: true,
    childs: [
      {
        title: "Products Management",
        icon: "hlw",
        link: "/products",
        show: true,
      },
      {
        title: "Products Category",
        icon: "hlw",
        link: "/products-category",
        show: true,
      },
    ],
  },
  {
    title: "Ledgers",
    icon: "menu_book",
    link: "/profile",
    show: true,
    childs: [
      {
        title: "Purchase",
        icon: "hlw",
        link: "/purchase",
        show: true,
      },
      {
        title: "Purchase Return",
        icon: "hlw",
        link: "/purchase-return",
        show: true,
      },
      {
        title: "Sales",
        icon: "hlw",
        link: "/users",
        show: true,
      },
      {
        title: "Sales Details",
        icon: "hlw",
        link: "/users",
        show: true,
      },
      {
        title: "Sales Return",
        icon: "hlw",
        link: "/users",
        show: true,
      },
      {
        title: "Sales Return Details",
        icon: "hlw",
        link: "/users",
        show: true,
      },
      {
        title: "Inventory",
        icon: "hlw",
        link: "/inventory",
        show: true,
      },
      {
        title: "Stock Transfer",
        icon: "hlw",
        link: "/stock-transfer",
        show: true,
      },
    ],
  },
  {
    title: "Loan",
    icon: "real_estate_agent",
    link: "/profile",
    show: true,
    childs: [
      {
        title: "Loan Management",
        icon: "hlw",
        link: "/loans",
        show: true,
      },
      {
        title: "Loan Documents",
        icon: "hlw",
        link: "/users",
        show: true,
      },
      {
        title: "Loan Product Details",
        icon: "hlw",
        link: "/users",
        show: true,
      },
      {
        title: "EWI",
        icon: "hlw",
        link: "/users",
        show: true,
      },
    ],
  },
  {
    title: "Profile",
    icon: "manage_accounts",
    link: "/users",
    show: true,
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { getAction } = useStoreModule();
    const { logOut } = getAction("auth", ["logOut"]);
    const loading = ref(false);

    const logOutUser = () => {
      loading.value = true;
      logOut()
        .then((response) => {
          console.log("response", response);
          router.push("/");
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          console.log("finally", "finally");
          loading.value = false;
        });
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      loading,
      logOutUser,
    };
  },
});
</script>

<style scoped>
.company_navbar {
  text-decoration: none;
  color: aliceblue;
}

.admin_font_size {
  font-size: 1.2rem;
}
</style>
