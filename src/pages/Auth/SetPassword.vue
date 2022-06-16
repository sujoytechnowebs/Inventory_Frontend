<template>
  <q-page class="items-center full-height flex flex-center">
    <div class="login-section">
      <q-card flat bordered>
        <q-card-section>
          <div class="text-h5 text-center">Set Password</div>
        </q-card-section>

        <q-card-section class="q-gutter-y-md">
          <q-input outlined dense v-model="text" label="Password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <q-input outlined dense v-model="text" label="Confirm Password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions class="flex justify-between q-pb-lg q-px-lg">
          <q-btn flat>Back To Login</q-btn>
          <q-btn color="primary">Reset Password</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>
<script>
import { reactive } from "vue";
import { useQuasar } from "quasar";
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});

// const handleError = () => {
//   // Do some validation
// };

// const handleSuccess = (res) => {
//   captcha_res = ref(res);
// };

// function onSubmit() {
//   loader = ref(true);
//   store
//     .dispatch("Auth/login", {
//       email: email,
//       password: password,
//       captcha_res: captcha_res,
//     })
//     .then((response) => {
//       loader = ref(false);
//       var redirectTo = "/admin";
//       router.push(redirectTo);
//     })
//     .catch((error) => {
//       loader = ref(false);
//     });
// }
</script>
<style scoped>
.login-section {
  max-width: 30.5em;
  margin: 0 auto;
  min-width: 35em;
}
</style>
