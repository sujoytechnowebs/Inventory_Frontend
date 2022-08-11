<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="user/createItem"
        :data-store="dataStore"
        title="Add Users"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="role"
              label="Role"
              option-value="code"
              option-label="role"
              data-store="state"
              action="getRoles"
              :multiple="false"
              :rules="[
                (val) =>
                  (val && !validationErrors.state_id > 0) ||
                  validationErrors.state_id
                    ? validationErrors.state_id
                    : 'Please choose the state name',
              ]"
            ></QSearch>
          </div>
        </div>

        <div v-if="role === 'customer'">
          <customer />
        </div>

        <div v-if="role === 'vendor'">
          <vendor />
        </div>

        <div v-if="role === 'incharge'">
          <incharge />
        </div>

        <div v-if="role === 'investor'">
          <investor />
        </div>

        <div v-if="role === 'user'">
          <user />
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { defineAsyncComponent } from "vue";

const customer = defineAsyncComponent(() =>
  import("./_components/customer.vue")
);

const vendor = defineAsyncComponent(() => import("./_components/vendor.vue"));

const incharge = defineAsyncComponent(() =>
  import("./_components/incharge.vue")
);

const investor = defineAsyncComponent(() =>
  import("./_components/investor.vue")
);

const user = defineAsyncComponent(() => import("./_components/user.vue"));

export default {
  name: "UsersCreatePage",

  components: {
    customer,
    vendor,
    incharge,
    investor,
    user,
  },

  setup() {
    return {
      modal: ref(true),
      dataStore: "user",
      validationErrors: ref({}),
    };
  },

  computed: {
    ...mapFields("user", [
      "newItem.role",
      "newItem.name",
      "newItem.account_name",
      "newItem.phone",
      "newItem.email",
      "newItem.account_no",
      "newItem.ifsc",
      "newItem.bank_branch",
    ]),
  },
};
</script>

<style scoped>
.other-section-head {
  font-size: 1.5rem;
}
</style>
