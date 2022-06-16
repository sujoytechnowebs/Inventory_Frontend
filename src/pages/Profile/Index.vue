<template>
  <div class="container">
    <div class="q-py-lg">
      <div class="row q-col-gutter-md">
        <div class="col-5">
          <q-card flat bordered>
            <q-card-section>
              <span>Profile Picture</span>
            </q-card-section>
            <q-separator />
            <q-card-section class="flex flex-center">
              <q-avatar size="200px">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
            </q-card-section>
            <q-card-section class="flex flex-center">
              <q-btn color="primary" label="Upload New Image" unelevated />
            </q-card-section>
          </q-card>
        </div>
        <div class="col-7">
          <q-card flat bordered>
            <q-card-section>
              <span>Account Details</span>
            </q-card-section>
            <q-separator />
            <q-card-section>
              <span>Basic Details</span>
            </q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-md">
                <div class="col-12">
                  <q-input outlined v-model="text" dense label="UserName">
                    <template v-slot:prepend>
                      <q-icon name="account_circle" />
                    </template>
                  </q-input>
                </div>
                <div class="col-6">
                  <q-input outlined v-model="text" dense label="First Name">
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                </div>
                <div class="col-6">
                  <q-input outlined v-model="text" dense label="Last Name">
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                </div>
                <div class="col-6">
                  <q-input outlined v-model="text" dense label="Email">
                    <template v-slot:prepend>
                      <q-icon name="mail" />
                    </template>
                  </q-input>
                </div>
                <div class="col-6">
                  <q-input outlined v-model="text" dense label="Phone Number">
                    <template v-slot:prepend>
                      <q-icon name="smartphone" />
                    </template>
                  </q-input>
                </div>
                <div class="col-4">
                  <q-input outlined v-model="text" dense label="Country">
                    <template v-slot:prepend>
                      <q-icon name="person_pin_circle" />
                    </template>
                  </q-input>
                </div>
                <div class="col-4">
                  <q-input outlined v-model="text" dense label="State">
                    <template v-slot:prepend>
                      <q-icon name="person_pin_circle" />
                    </template>
                  </q-input>
                </div>
                <div class="col-4">
                  <q-input outlined v-model="text" dense label="City">
                    <template v-slot:prepend>
                      <q-icon name="person_pin_circle" />
                    </template>
                  </q-input>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-btn color="primary" label="Save Changes" unelevated />
            </q-card-section>
            <q-separator />
            <q-card-section>
              <span>Email Details</span>
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
              <span>Password Details</span>
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
