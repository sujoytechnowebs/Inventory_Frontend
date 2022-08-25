<template>
  <div class="container">
    <div class="q-py-lg">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6 col-lg-6">
          <q-card flat bordered>
            <q-card-section>
              <span class="profile_title">Account Details</span>
            </q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-12">
                  <q-input outlined v-model="text" dense label="Full Name">
                  </q-input>
                </div>
                <div class="col-12">
                  <q-input outlined v-model="text" dense label="UserName">
                  </q-input>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <q-input outlined v-model="text" dense label="Email">
                  </q-input>
                </div>
                <div class="col-12 col-md-6 col-lg-6">
                  <q-input outlined v-model="text" dense label="Phone Number">
                  </q-input>
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                  <q-input outlined v-model="text" dense label="Country">
                  </q-input>
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                  <q-input outlined v-model="text" dense label="State">
                  </q-input>
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                  <q-input outlined v-model="text" dense label="City">
                  </q-input>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn color="primary" label="Save Changes" unelevated />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-6 col-lg-6">
          <q-card flat bordered>
            <q-card-section>
              <span class="profile_title">Email Details</span>
            </q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-12">
                  <q-input outlined v-model="text" dense label="Current Email">
                    <template v-slot:prepend>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                </div>
                <div class="col-12">
                  <q-input outlined v-model="text" dense label="New Email">
                    <template v-slot:prepend>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn color="primary" label="Change Email" unelevated />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <span class="profile_title">Password Details</span>
            </q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-12">
                  <q-input
                    outlined
                    v-model="text"
                    dense
                    :type="isPwd ? 'password' : 'text'"
                    label="Current Password"
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
                    v-model="text"
                    dense
                    :type="isPwd ? 'password' : 'text'"
                    label="New Password"
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
                    v-model="text"
                    dense
                    :type="isPwd ? 'password' : 'text'"
                    label="Confirm New Password"
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
            <q-card-section>
              <q-btn color="primary" label="Change Password" unelevated />
            </q-card-section>
            <q-separator />
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "profile-page",
  setup() {
    return {
      isPwd: ref(true),
    };
  },
};
</script>

<style scoped>
.profile_title {
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
