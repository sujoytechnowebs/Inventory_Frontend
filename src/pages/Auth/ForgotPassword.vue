<template>
  <q-page class="items-center full-height flex flex-center">
    <div class="container">
      <div class="forgot-password-section">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h5 text-center forget-password-text">
              Forgot Password
            </div>
          </q-card-section>

          <q-card-section class="q-gutter-y-md">
            <q-input outlined dense v-model="text" label="Email">
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions class="flex justify-between q-pb-lg q-px-lg">
            <q-btn flat to="login">Back To Login</q-btn>
            <q-btn to="set-password" color="primary">Click Here</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";

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
.forgot-password-section {
  max-width: 30.5em;
  margin: 0 auto;
}

.forget-password-text {
  font-weight: 600;
}
</style>
