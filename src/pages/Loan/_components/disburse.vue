<template>
  <div class="div">
    <q-card class="my-card">
      <QEditForm
        :modal="modal"
        :widgets="true"
        :save-action="saveaction"
        :data-store="dataStore"
        closeModalMutation="showHideApproveModal"
      >
        <p class="form-heading q-pt-md">Branch Details</p>
      </QEditForm>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapFields } from "vuex-map-fields";

export default {
  name: "LoansEditPage",
  setup() {
    return {
      modal: true,
      dataStore: "loan",
      saveaction: "loan/disburseUpdate",
      validationErrors: ref({}),
      modelValue: ref(),
      options: ["Approved", "Reject"],
    };
  },
  computed: {
    ...mapFields("loan", [
      "approveItem.customers_id",
      "approveItem.branch_id",
      "approveItem.application_received_date",
      "approveItem.application_received_by",
      "approveItem.application_verified_date",
      "approveItem.application_verified_by",
      "approveItem.application_approve_date",
      "approveItem.application_approved_by",
      "approveItem.ewi_start_date",
      "approveItem.no_of_ewi",
      "approveItem.loan_amount",
      "approveItem.processing_fees",
      "approveItem.down_payment",
      "approveItem.status",
    ]),
  },
};
</script>

<style scoped>
.form-heading {
  text-align: center;
  font-size: large;
}
</style>
