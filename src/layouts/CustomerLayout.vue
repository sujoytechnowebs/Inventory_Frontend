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

        <q-toolbar-title>
          {{ siteName }}
        </q-toolbar-title>

        <div :class="$q.platform.is.desktop ? '' : 'hide-diff-paltform'">
          <QSearch
            class="bg-white remove-width"
            v-model="current_branch_selected"
            label="Branch"
            option-value="id"
            option-label="name"
            data-store="branch"
            action="getItems"
            :multiple="false"
          ></QSearch>
        </div>
        <div>
          <q-btn-dropdown flat label="Accounts">
            <div class="row no-wrap q-pa-md">
              <div class="column items-center">
                <div class="q-mb-md">
                  <span class="profile_head q-mr-sm">Name:</span
                  >{{ authUser.name }}
                </div>
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
        <q-item-label
          :class="$q.platform.is.mobile ? '' : 'hide-diff-paltform'"
        >
          <QSearch
            class="bg-white drawer-branch-search remove-width"
            v-model="current_branch_selected"
            label="Branch"
            option-value="id"
            option-label="name"
            data-store="branch"
            action="getItems"
            :multiple="false"
          ></QSearch>
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
import { defineComponent, ref, watch, onMounted } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import useStoreModule from "../libs/useStoreModule.js";
import { mapFields } from "vuex-map-fields";
import { LocalStorage as SessionStorage } from "quasar";
import { acl } from "../boot/acl.js";

const linksList = [
  {
    title: "Users",
    icon: "account_circle",
    show: "",
    childs: [
      {
        title: "User",
        icon: "hlw",
        link: "/users",
        show: "user.index",
      },
      {
        title: "Stock Holder",
        icon: "hlw",
        link: "/stock-holder",
        show: "investorEquity.index",
      },
    ],
  },
  {
    title: "Center",
    icon: "workspaces",
    // link: "/cities",
    show: "",
    childs: [
      {
        title: "State",
        icon: "hlw",
        link: "/states",
        show: "state.index",
      },
      {
        title: "City",
        icon: "hlw",
        link: "/cities",
        show: "city.index",
      },
      {
        title: "Branch",
        icon: "hlw",
        link: "/branches",
        show: "branch.index",
      },
      {
        title: "Group Name",
        icon: "hlw",
        link: "/groups",
        show: "group.index",
      },
      {
        title: "Customer",
        icon: "hlw",
        link: "/customers",
        show: "",
      },
      {
        title: "Group Loan",
        icon: "hlw",
        link: "/groups-summary",
        show: "",
      },
    ],
  },
  {
    title: "Product",
    icon: "account_balance",
    link: "/profile",
    show: "",
    childs: [
      {
        title: "Products Category",
        icon: "hlw",
        link: "/products-category",
        show: "productcategory.index",
      },
      {
        title: "Products",
        icon: "hlw",
        link: "/products",
        show: "product.index",
      },
    ],
  },
  {
    title: "Transfer",
    icon: "move_up",
    link: "",
    show: "",
    childs: [
      {
        title: "Inventory",
        icon: "hlw",
        link: "/inventory",
        show: "inventory.index",
      },
      {
        title: "Stock Transfer",
        icon: "hlw",
        link: "/stock-transfer",
        show: "stockTransfer.index",
      },
      {
        title: "Purchase",
        icon: "hlw",
        link: "/purchase",
        show: "purchase.index",
      },
      {
        title: "Purchase Return",
        icon: "hlw",
        link: "/purchase-return",
        show: "purchaseReturn.index",
      },
      {
        title: "Sales",
        icon: "hlw",
        link: "/sale",
        show: "sales.index",
      },
      {
        title: "Sales Return",
        icon: "hlw",
        link: "/sale-return",
        show: "salesReturn.index",
      },
    ],
  },
  {
    title: "Ledger",
    icon: "menu_book",
    link: "/profile",
    show: "",
    childs: [
      {
        title: "Ledger",
        icon: "hlw",
        link: "/ledger",
        show: "",
      },
      {
        title: "Balance Status",
        icon: "hlw",
        link: "/balance_status",
        show: "",
      },
      {
        title: "Accounts",
        icon: "hlw",
        link: "/accounts",
        show: "account.index",
      },
      {
        title: "Receipt",
        icon: "hlw",
        link: "/receipt",
        show: "receipt.index",
      },
      {
        title: "Payment",
        icon: "hlw",
        link: "/payment",
        show: "payment.index",
      },
      {
        title: "Profit & Loss",
        icon: "hlw",
        link: "/profit-loss",
        show: "",
      },
      {
        title: "Cash Bank Balance",
        icon: "hlw",
        link: "/cashbook",
        show: "",
      },
      // {
      //   title: "Bank Balance",
      //   icon: "hlw",
      //   link: "/bank-cash",
      //   show: "",
      // },
    ],
  },
  {
    title: "Loan",
    icon: "real_estate_agent",
    link: "/profile",
    show: "",
    childs: [
      {
        title: "Loan",
        icon: "hlw",
        link: "/loans",
        show: "loan.index",
      },
      {
        title: "EWI Details",
        icon: "hlw",
        link: "/ewi-details",
        show: "ewi.index",
      },
      {
        title: "EMI Details",
        icon: "hlw",
        link: "/emi-details",
        show: "",
      },
    ],
  },
  {
    title: "Profile",
    icon: "manage_accounts",
    link: "/profile",
    show: "",
  },
];

export default defineComponent({
  name: "MainLayout",

  computed: {
    siteName() {
      return process.env.SITE_NAME;
    },
  },

  components: {
    EssentialLink,
  },

  created() {
    if (SessionStorage.getItem("active_branch") !== null) {
      console.log(
        "this is branch id in mounted",
        SessionStorage.getItem("active_branch")
      );
      this.current_branch_selected = SessionStorage.getItem("active_branch");
      this.setActiveBranch(SessionStorage.getItem("active_branch"));
    }
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const { getAction, getGetters, getMutations, getState } = useStoreModule();
    const { authUser } = getGetters("auth", ["authUser"]);
    const { active_branch } = getState("auth", ["active_branch"]);
    const { setActiveBranch } = getMutations("auth", ["setActiveBranch"]);
    const { logOut } = getAction("auth", ["logOut"]);
    const { switchActiveBranch } = getAction("auth", ["switchActiveBranch"]);
    const loading = ref(false);

    const current_branch_selected = ref(null);

    const logOutUser = () => {
      loading.value = true;

      logOut()
        .then((response) => {
          window.location.href = "/";
        })
        .catch((err) => {
          console.log("err", err);
        })
        .finally(() => {
          loading.value = false;
        });
    };

    // onMounted(() => {
    //   if (SessionStorage.getItem("active_branch") !== null) {
    //     console.log(
    //       "this is branch id in mounted",
    //       SessionStorage.getItem("active_branch")
    //     );
    //     current_branch_selected.value = SessionStorage.getItem("active_branch");
    //     setActiveBranch(SessionStorage.getItem("active_branch"));
    //   }
    // });

    watch(current_branch_selected, async (newValue, oldValue) => {
      if (newValue != oldValue) {
        if (
          SessionStorage.getItem("active_branch") !== null &&
          SessionStorage.getItem("active_branch") ===
            current_branch_selected.value
        ) {
          console.log("watch in if");

          return false;
        } else {
          console.log("watch in else");
          SessionStorage.set("active_branch", newValue ? newValue : "");
          changeActiveBranch(newValue ? newValue : "");
        }
      }
    });

    const changeActiveBranch = (branch_id) => {
      setActiveBranch(branch_id);
      switchActiveBranch(branch_id).then((response) => {});
    };

    //Switch Branch

    // const switchActiveBranch = (branch_id) => {
    //   setSwitchBranch(branch_id);
    // };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      loading,
      logOutUser,
      authUser,
      active_branch,
      current_branch_selected,
      setActiveBranch,
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

.hide-diff-paltform {
  display: none;
}

.drawer-branch-search {
  width: 85% !important;
  margin-left: 16px !important;
}

.remove-width
  .q-field__inner
  .q-field__control
  .q-field__control-container
  .q-field__native
  .q-field__input {
  min-width: 0 !important;
}

.profile_head {
  font-weight: 500;
  font-size: 1rem;
}
</style>
