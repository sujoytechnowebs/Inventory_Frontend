<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        title="Disburse Loan"
        closeModalMutation="showHideDisburseModal"
      >
        <div class="row q-mb-md q-col-gutter-md">
          <div class="col-12">
            <q-input
              dense
              outlined
              v-model="ewi_start_date"
              mask="date"
              :rules="[
                (val) =>
                  (val && !validationErrors.ewi_start_date > 0) ||
                  validationErrors.ewi_start_date
                    ? validationErrors.ewi_start_date
                    : 'Please Write The EWI starting date',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="event" class="cursor-pointer">
                  <q-popup-proxy
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date v-model="ewi_start_date">
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
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
  name: "DisbursePage",
  setup() {
    return {
      modal: true,
      dataStore: "loan",
      saveaction: "loan/disburseUpdate",
      validationErrors: ref({}),
      modelValue: ref(),
    };
  },
  computed: {
    ...mapFields("loan", ["disburseItem.ewi_start_date"]),
  },
};
</script>
