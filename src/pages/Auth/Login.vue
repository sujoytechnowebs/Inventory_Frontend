<template>
  <q-page class="items-center full-height flex flex-center">
    <div class="login-section">
      <q-card flat bordered>
        <q-form @submit="onSubmit">
          <q-card-section>
            <div class="text-h5 text-center">Login</div>
          </q-card-section>
          <q-card-section class="q-gutter-y-md">
            <q-input ref="test" outlined dense v-model="email" label="Email">
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
            <q-input
              outlined
              dense
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <div>
              <!-- <p class="reset-line">
                Don't Have An Account?
                <router-link to="/register">Click To Register</router-link>
              </p> -->
              <p class="reset-line">
                Forget Your Password?
                <router-link to="/forgot-password">Click To Reset</router-link>
              </p>
            </div>
          </q-card-section>

          <q-card-actions align="right" class="q-pb-lg q-px-lg">
            <q-btn
              color="primary"
              type="submit"
              :loading="loading"
              :disable="loading"
              >Login</q-btn
            >
          </q-card-actions>
        </q-form>
      </q-card>
    </div>
  </q-page>
</template>
<script>
// https://stackoverflow.com/questions/67181974/how-do-i-get-multiple-actions-and-state-with-vuex-namespaced-modules-and-the-vue
import { computed } from "vue";
import { useStore } from "vuex";
import { mapFields } from "vuex-map-fields";

// import { useState, useActions } from "vuex-composition-helpers";
import { ref, onMounted, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";

import { defineComponent } from "vue";

import { customHelper } from "../../libs/helper.js";
import useStoreModule from "../../libs/useStoreModule.js";
// import { createFieldMapper } from "vuex-use-fields";
// const useFieldsInMyNamespace = createFieldMapper({
//   getter: "Register/getField",
//   setter: "Register/setField",
// });

// https://quasar.dev/start/how-to-use-vue

export default defineComponent({
  name: "IndexPage",
  computed: {
    ...mapFields("login", ["credentials.email", "credentials.password"]),
  },
  setup() {
    // const store = useStore();

    onMounted(() => {});

    const { getAction } = useStoreModule();
    // const { getItems } = getAction("Register", ["getItems"]);
    const { login } = getAction("login", ["login"]);
    const loading = ref(false);
    const router = useRouter();

    const onSubmit = () => {
      loading.value = true;
      login()
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

    // let email = computed(() =>customHelper.mapFields(["email"])

    // let test = {
    //   get: function () {
    //     return store.state.result;
    //   },
    //   set: function (val) {
    //     store.state.result = val;
    //   },
    // };
    // let testEmail = computed(() => test);

    const count = ref("test");
    const email = computed({
      get: () => count.value,
      set: (val) => {
        count.value = val;
      },
    });

    return {
      onSubmit,
      // ...useFieldsInMyNamespace(["path.to.field.test"]),
      // ...mapFields(["login.credentials.email", "login.credentials.password"]),
      // email: computed(() =>
      //   customHelper.mapFields(["login.credentials.email"])
      // ),
      // email,
      isPwd: ref(true),
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

.reset-line {
  margin-bottom: 0.5rem !important;
}
</style>
