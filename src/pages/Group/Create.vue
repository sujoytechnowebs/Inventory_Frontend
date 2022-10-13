<template>
  <div>
    <q-card class="my-card">
      <QCreateForm
        :modal="modal"
        :widgets="true"
        save-action="group/createItem"
        :data-store="dataStore"
        title="Add Groups"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Group Name"
              @keydown="checkKeyDownAlphaNumeric($event)"
              :error-message="$getValidationErrors('name')"
              :error="$hasValidationErrors('name')"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <QSearch
              v-model="branch_id"
              label="Branch"
              option-value="id"
              option-label="name"
              data-store="branch"
              action="getItems"
              :multiple="false"
              :error-message="$getValidationErrors('branch_id')"
              :error="$hasValidationErrors('branch_id')"
            ></QSearch>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <q-select
              outlined
              v-model="day"
              dense
              :options="days_select"
              label
              option-value="value"
              option-label="label"
              option-disable="inactive"
              emit-value
              map-options
              :error-message="$getValidationErrors('day')"
              :error="$hasValidationErrors('day')"
            >
              <template v-slot:label>
                Day
                <span class="text-weight-bold text-negative">*</span>
              </template>
            </q-select>
          </div>
          <div class="col-12 col-md-4 col-lg-4">
            <QSearch
              v-model="responsible_by"
              label="Responsible Staff"
              option-value="id"
              option-label="name"
              data-store="user"
              action="getStaff"
              :multiple="false"
              :error-message="$getValidationErrors('responsible_by')"
              :error="$hasValidationErrors('responsible_by')"
            ></QSearch>
          </div>

          <div class="col-12 col-md-4 col-lg-4">
            <q-input
              outlined
              dense
              label="Contact Time"
              v-model="conduct_time"
              mask="time"
              :error-message="$getValidationErrors('conduct_time')"
              :error="$hasValidationErrors('conduct_time')"
            >
              <template v-slot:prepend>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-time v-model="conduct_time">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-time>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="row q-col-gutter-md">
          <p class="grp_adr">Group Address:</p>
          <div class="col-12">
            <q-input
              outlined
              dense
              v-model="address"
              label="Address"
              :error-message="$getValidationErrors('address')"
              :error="$hasValidationErrors('address')"
            ></q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              outlined
              dense
              v-model="village"
              label="Village"
              :error-message="$getValidationErrors('village')"
              :error="$hasValidationErrors('village')"
            ></q-input>
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              outlined
              dense
              v-model="pin"
              type="number"
              label="Pin Code"
              :error-message="$getValidationErrors('pin')"
              :error="$hasValidationErrors('pin')"
            ></q-input>
          </div>
        </div>
      </QCreateForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";
import { mapGetters } from "vuex";

export default {
  name: "GroupCreatePage",
  data() {
    return {
      modal: ref(true),
      dataStore: "group",
      validationErrors: ref({}),
      modelValue: ref(),
      days_select: [
        {
          value: "mon",
          label: "Monday",
        },
        {
          value: "tue",
          label: "Tuesday",
        },
        {
          value: "wed",
          label: "Wednesday",
        },
        {
          value: "thu",
          label: "Thrusday",
        },
        {
          value: "fri",
          label: "Friday",
        },
        {
          value: "sat",
          label: "Saturday",
        },
      ],
    };
  },

  created() {
    this.branch_id = this.getActiveBranch;
  },

  computed: {
    ...mapFields("group", [
      "newItem.name",
      "newItem.branch_id",
      "newItem.address",
      "newItem.village",
      "newItem.pin",
      "newItem.day",
      "newItem.responsible_by",
      "newItem.conduct_time",
    ]),
    ...mapGetters("auth", ["getActiveBranch"]),
  },

  methods: {
    checkKeyDownAlphaNumeric(event) {
      if (!/[a-zA-Z\s]/.test(event.key)) {
        this.ignoredValue = event.key ? event.key : "";
        event.preventDefault();
      }
    },
  },
};
</script>

<style scoped>
.address_head {
  font-size: 1rem;
  font-weight: 600;
}

.grp_adr {
  font-size: 1rem;
  font-weight: 600;
}
</style>
