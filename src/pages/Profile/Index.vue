<template>
  <div class="container">
    <div class="q-py-lg">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-6">
          <q-card flat bordered class="full-height">
            <QCreateForm
            v-bind:modal="false"
            :widgets="false"
            save-action="auth/changeEmail"
            data-store="auth"
            title="Change Email"
            save-button-label="Change Email"
            >
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12">
                    <q-input 
                    type="email"
                    outlined 
                    dense 
                    label="Current Email"
                    v-model="current_email" 
                    ref="current_email"
                    :error-message="$getValidationErrors('current_email')"
                    :error="$hasValidationErrors('current_email')"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mail" />
                      </template>
                    </q-input>
                  </div>
                  <div class="col-12">
                    <q-input 
                    type="email"
                    outlined 
                    dense label="New Email"
                    v-model="email" 
                    ref="email"
                    :error-message="$getValidationErrors('email')"
                    :error="$hasValidationErrors('email')"
                    >
                      <template v-slot:prepend>
                        <q-icon name="mail" />
                      </template>
                    </q-input>
                  </div>
                </div>
              </q-card-section>
              <!-- <q-card-section>
                <q-btn color="primary" label="Change Email" unelevated />
              </q-card-section> -->
              </QCreateForm>
            </q-card>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-card flat bordered class="full-height">
              <QCreateForm
              v-bind:modal="false"
              :widgets="false"
              save-action="auth/resetPassword"
              data-store="auth"
              title="Reset Password"
              save-button-label="Reset Password"
              >
              <q-card-section>
                <div class="row q-col-gutter-md">
                  <div class="col-12">
                    <q-input
                      outlined
                      v-model="old_password"
                      dense
                      :type="isPwd ? 'password' : 'text'"
                      label="Current Password"
                      ref="old_password"
                      :error-message="$getValidationErrors('old_password')"
                      :error="$hasValidationErrors('old_password')"
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
                  </div>
                  <div class="col-12">
                    <q-input
                      outlined
                      v-model="password"
                      dense
                      :type="isPwd ? 'password' : 'text'"
                      label="New Password"
                      ref="password"
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
                  </div>
                  <div class="col-12">
                    <q-input
                      outlined
                      v-model="password_confirmation"
                      dense
                      :type="isPwd ? 'password' : 'text'"
                      label="Confirm New Password"
                      ref="password_confirmation"
                      :error-message="$getValidationErrors('password_confirmation')"
                      :error="$hasValidationErrors('password_confirmation')"
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
                  </div>
                </div>
              </q-card-section>
            </QCreateForm>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
export default {
  name: "profile-page",
  setup() {
    return {
      isPwd: ref(true),
    };
  },

  computed: {
    // ...mapFields("auth", ["authUser"]),
    ...mapFields("auth", [
      "authUser.email",
      "editItem.branch_id",
      "editItem.application_received_date",
      "editItem.application_received_by",
      "editItem.ewi_start_date",
      "editItem.no_of_ewi",
      "editItem.loan_amount",
      "editItem.processing_fees",
      "editItem.down_payment",
      "editItem.status",
      "editItem.document_type",
      "editItem.type",
    ]),
    ...mapFields("auth", [
      "change_email.current_email",
      "change_email.email",
      "reset_password.old_password",
      "reset_password.password",
      "reset_password.password_confirmation"
      
    ]),
  },
};
</script>

<style scoped>
.profile_title {
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
