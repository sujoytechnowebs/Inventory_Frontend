<template>
  <q-page class="items-center full-height flex flex-center">
    <div class="container">
      <div class="login-section">
        <q-card flat bordered>
          <q-form @submit="onSubmit">
            <q-card-section>
              <div class="text-h5 text-center login-text">LOGIN</div>
            </q-card-section>

            <q-card-section class="q-gutter-y-md">
              <q-input
                ref="test"
                outlined
                dense
                v-model="email"
                label="Email"
                :rules="[
                  (val) =>
                    (val && !validationErrors.email > 0) ||
                    validationErrors.email
                      ? validationErrors.email
                      : 'Please Enter Your Email',
                ]"
                :error-message="$getValidationErrors('email')"
                :error="$hasValidationErrors('email')"
              >
                <template v-slot:prepend>
                  <q-icon name="mail" />
                </template>
              </q-input>
              <q-input
                dense
                outlined
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="Password"
                :rules="[
                  (val) =>
                    (val && !validationErrors.password > 0) ||
                    validationErrors.password
                      ? validationErrors.password
                      : 'Please Enter Your Password',
                ]"
                :error-message="$getValidationErrors('password')"
                :error="$hasValidationErrors('password')"
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
              <div></div>

              <q-btn
                class="full-width q-mb-md"
                unelevated
                rounded
                color="primary"
                type="submit"
                :loading="loading"
                :disable="loading"
                >Login</q-btn
              >
            </q-card-section>

            <!-- <q-card-section>
              <p align="center">
                <router-link
                  to="/forgot-password"
                  class="text-underline-for-redirect"
                  >Forgot Password?</router-link
                >
              </p>
            </q-card-section> -->
          </q-form>
        </q-card>
      </div>
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

import { defineComponent, getCurrentInstance } from "vue";
import { useQuasar } from "quasar";
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
    ...mapFields("auth", ["credentials.email", "credentials.password"]),
  },
  setup() {
    // const store = useStore();

    onMounted(() => {});

    const { getAction } = useStoreModule();
    // const { getItems } = getAction("Register", ["getItems"]);
    const { login } = getAction("auth", ["login"]);
    const loading = ref(false);
    const router = useRouter();

    const $q = useQuasar();

    const app = getCurrentInstance();
    const clearValidationErrors =
      app.appContext.config.globalProperties.$clearValidationErrors;
    const Qnotify = app.appContext.config.globalProperties.$Qnotify;
    const setValidationErrors =
      app.appContext.config.globalProperties.$setValidationErrors;

    const onSubmit = () => {
      loading.value = true;
      login()
        .then((response) => {
          console.log("response", response);
          $q.notify({
            progress: true,
            message: "Login successfull",
            type: "positive",
            timeout: 5000,
            position: "top-right",
            actions: [
              {
                icon: "close",
                color: "white",
                handler: () => {},
              },
            ],
          });
          router.push("/");
        })
        .catch((error) => {
          loading.value = false;

          let formatted_message = error.response.data.message;
          let errorMessages = {};
          if (error.response.data.errors) {
            errorMessages = error.response.data.errors;
          }
          setValidationErrors(errorMessages);

          console.log("checking errorMessages", errorMessages);

          $q.notify({
            progress: true,
            message: formatted_message,
            type: "negative",
            timeout: 5000,
            position: "top-right",
            actions: [
              {
                icon: "close",
                color: "white",
                handler: () => {},
              },
            ],
          });
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

      validationErrors: ref({}),
    };
  },
});
</script>
<style scoped>
.login-section {
  max-width: 25.5em;
  margin: 0 auto;
}

.signup-link {
  margin-bottom: 0px;
}

.text-underline-for-redirect {
  text-decoration: none !important;
  color: #000000;
}

.text-underline-for-redirect:hover {
  color: rgb(55, 0, 255);
}

.login-text {
  font-weight: 600;
}
</style>
