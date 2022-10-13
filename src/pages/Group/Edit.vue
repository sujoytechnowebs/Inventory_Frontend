<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Edit Groups"
      >
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6 col-lg-6">
            <q-input
              ref="name"
              outlined
              v-model="name"
              dense
              label="Group Name"
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
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "GroupEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "group",
      saveaction: "group/updateItem",
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
  computed: {
    ...mapFields("group", [
      "editItem.name",
      "editItem.address",
      "editItem.branch_id",
      "editItem.village",
      "editItem.pin",
      "editItem.day",
      "editItem.responsible_by",
      "editItem.conduct_time",
    ]),
  },
};
</script>
