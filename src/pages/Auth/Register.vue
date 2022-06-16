<template>
  <q-page class="items-center full-height flex flex-center">
    <div class="login-section">
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h5 text-center">Register</div>
        </q-card-section>
        <q-form @submit="onSubmit">
          <q-card-section class="q-gutter-y-md">
            <q-input outlined dense v-model="name" label="User Name">
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
            <q-input outlined dense v-model="email" label="Email">
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
            <q-input
              outlined
              dense
              v-model="password"
              label="comfirm_password"
              type="password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
            <q-input outlined dense v-model="password" label="Confirm Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions align="right" class="q-pb-lg q-pl-lg q-pr-lg">
            <q-btn
              color="primary"
              :loading="loading"
              :disable="loading"
              type="submit"
              >Register</q-btn
            >
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { mapFields } from "vuex-map-fields";
import { ref } from "vue";
import { defineComponent } from "vue";
import useStoreModule from "../../libs/useStoreModule.js";

export default defineComponent({
  name: "IndexPage",
  computed: {
    ...mapFields("register", [
      "credentials.name",
      "credentials.email",
      "credentials.password",
      "credentials.comfirm_password",
    ]),
  },
  setup() {
    const { getAction } = useStoreModule();
    const { register } = getAction("register", ["register"]);
    const loading = ref(false);

    const onSubmit = () => {
      loading.value = true;
      register()
        .then((response) => {
          console.log("response", response);
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
      onSubmit,
      loading,
    };
  },
});
</script>
<style scoped>
.login-section {
  max-width: 30.5em;
  margin: 0 auto;
  min-width: 35em;
}
</style>
