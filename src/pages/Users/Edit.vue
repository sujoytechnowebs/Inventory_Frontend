<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit User"
      >
        <div v-if="code === 'customer'">
          <customer />
        </div>

        <div v-if="code === 'vendor'">
          <vendor />
        </div>

        <div v-if="code === 'incharge'">
          <incharge />
        </div>

        <div v-if="code === 'investor'">
          <investor />
        </div>

        <div v-if="code === 'user'">
          <user />
        </div>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const customer = defineAsyncComponent(() =>
  import("./_componentsEdit/customer.vue")
);

const vendor = defineAsyncComponent(() =>
  import("./_componentsEdit/vendor.vue")
);

const incharge = defineAsyncComponent(() =>
  import("./_componentsEdit/incharge.vue")
);

const investor = defineAsyncComponent(() =>
  import("./_componentsEdit/investor.vue")
);

const user = defineAsyncComponent(() => import("./_componentsEdit/user.vue"));

export default {
  name: "UsersEditPage",

  components: {
    customer,
    vendor,
    incharge,
    investor,
    user,
  },

  computed: {
    ...mapFields("user", [
      "editItem.code",
      "editItem.name",
      "editItem.account_name",
      "editItem.phone",
      "editItem.email",
      "editItem.account_no",
      "editItem.ifsc",
      "editItem.bank_branch",
    ]),
  },
  setup() {
    return {
      modal: true,
      dataStore: "user",
      saveaction: "user/updateItem",
      validationErrors: ref({}),
    };
  },
};
</script>
